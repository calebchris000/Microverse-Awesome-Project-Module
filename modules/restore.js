import { Books } from "../modules/books.js";
import { LocalStorage } from "./localstorage.js";

let bookItems = document.querySelector(".bookItems");

let newBook = new Books();
let storeData = new LocalStorage(newBook.book);

export const restore = () => {
  let data = localStorage.getItem("data");

  if (data === "" || data === "[]") {
    return;
  }

  let parsed = JSON.parse(data);

  parsed.forEach((element) => {
    let collection = document.createElement("div");
    collection.classList.add("collection");
    bookItems.appendChild(collection);

    let title = document.createElement("p");
    let author = document.createElement("p");
    let titAuth = document.createElement("div");
    let remove = document.createElement("button");

    title.classList.add("title");
    author.classList.add("author");
    titAuth.classList.add("wrapper");
    remove.id = "remove";

    title.textContent = element.title + " by \u00A0";
    author.textContent = element.author;
    remove.textContent = "remove";

    titAuth.appendChild(title);
    titAuth.appendChild(author);
    collection.appendChild(titAuth);
    collection.appendChild(remove);

    if (bookItems.innerHTML !== "") {
      bookItems.style.border = "4px solid";
    }

    remove.addEventListener("click", function () {
      newBook.book = [];
      bookItems.removeChild(collection);

      let allCollections = bookItems.querySelectorAll(".collection");

      allCollections.forEach((item, index) => {
        let title = item.querySelector(".title");
        let author = item.querySelector(".author");

        newBook.addBook({
          title: title.textContent,
          author: author.textContent,
        });

      });
      
      localStorage.setItem("data", JSON.stringify(newBook.book));
      storeData.saveData(newBook.book);

      if (bookItems.innerHTML === "") {
        bookItems.style.border = "0 solid";
      }
    });
  });
};
