import { Books } from './books.js';
import { LocalStorage } from './localstorage.js';

const bookItems = document.querySelector('.bookItems');
const newBook = new Books();
const storeData = new LocalStorage(newBook.book);
/* eslint-disable import/prefer-default-export */
export const restore = () => {
  const data = localStorage.getItem('data');

  if (data === '' || data === '[]') {
    return;
  }
  const parsed = JSON.parse(data);

  parsed.forEach((element) => {
    const collection = document.createElement('div');
    collection.classList.add('collection');
    bookItems.appendChild(collection);

    const title = document.createElement('p');
    const author = document.createElement('p');
    const titAuth = document.createElement('div');
    const remove = document.createElement('button');

    title.classList.add('title');
    author.classList.add('author');
    titAuth.classList.add('wrapper');
    remove.id = 'remove';

    title.textContent = `${element.title} by \u00A0`;
    author.textContent = element.author;
    remove.textContent = 'remove';

    titAuth.appendChild(title);
    titAuth.appendChild(author);
    collection.appendChild(titAuth);
    collection.appendChild(remove);

    if (bookItems.innerHTML !== '') {
      bookItems.style.border = '4px solid';
    }

    remove.addEventListener('click', () => {
      newBook.book = [];
      bookItems.removeChild(collection);

      const allCollections = bookItems.querySelectorAll('.collection');

      allCollections.forEach((item) => {
        const title = item.querySelector('.title');
        const author = item.querySelector('.author');

        newBook.addBook({
          title: title.textContent,
          author: author.textContent,
        });
      });
      localStorage.setItem('data', JSON.stringify(newBook.book));
      storeData.saveData(newBook.book);

      if (bookItems.innerHTML === '') {
        bookItems.style.border = '0 solid';
      }
    });
  });
};
