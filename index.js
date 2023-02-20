import { Books } from "./modules/books.js";
import { LocalStorage } from "./modules/localstorage.js";
import { countTime } from "./modules/date.js";
import { navEvents } from "./navigation.js";
import { restore } from "./modules/restore.js";

let bookItems = document.querySelector(".bookItems");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let add = document.querySelector(".addButton");

countTime(); // Keeps the time moving

const newBook = new Books(titleInput, authorInput);
let storeData = new LocalStorage(newBook.book);

add.addEventListener("click", () => {
  let titleText = newBook.getTitle();
  let authorText = newBook.getAuthor();
  if (titleText == "" || authorText == "") {
    return;
  }

  newBook.addBook({ title: titleText, author: authorText });
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

  title.textContent = titleInput.value + ' by  \u00A0 ';
  author.textContent = authorInput.value;
  remove.textContent = "remove";

  titAuth.appendChild(title);
  titAuth.appendChild(author);
  collection.appendChild(titAuth);
  collection.appendChild(remove);

  storeData.saveData(newBook.book); // Automatically moves the array to the localStorage class

  remove.addEventListener("click", function () {
    newBook.book = [];
    bookItems.removeChild(collection);

    let allCollections = bookItems.querySelectorAll(".collection");

    allCollections.forEach((item, index) => {
      let title = item.querySelector(".title");
      let author = item.querySelector(".author");

      newBook.addBook({ title: title.textContent, author: author.textContent });
    });
    localStorage.setItem("data", JSON.stringify(newBook.book));

    if (bookItems.innerHTML === "") {
      bookItems.style.border = "0 solid";
    }
  });

  titleInput.value = "";
  authorInput.value = "";

  setTimeout(function(){
    add.style.borderColor = '#000'
    add.style.color = '#000'
    add.textContent = 'Add'
  }, 1000)

  add.style.borderColor = 'green'
    add.style.color = 'green'
    add.textContent = 'Added'

    if (bookItems.innerHTML !== "") {
      bookItems.style.border = "4px solid";
    }
});

navEvents(); // What happens when you click on the navigation buttons?

window.onload = restore()