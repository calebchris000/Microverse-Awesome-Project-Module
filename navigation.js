import { contact } from "./modules/contact.js";

let header = document.querySelector('.title')
let list = document.querySelector('.list')
let addNew = document.querySelector('.addNew')
let contactButton = document.querySelector('.contact')
let form = document.querySelector('form');
let contactWrapper = document.querySelector(".contactInfo");
let bookItems = document.querySelector(".bookItems");

export const navEvents = () => {
    list.addEventListener('click', () => {
        header.textContent = 'All awesome books' 
        list.style.color = '#073763'
        addNew.style.color = '#000'
        bookItems.style.display = 'flex'
        form.style.display = 'none'
        contactWrapper.style.display = 'none'
        contactButton.style.color = '#000'
      })
      
      addNew.addEventListener('click', () => {
        header.textContent = 'Add new content'
        list.style.color = '#000'
        addNew.style.color = '#073763'
        bookItems.style.display = 'none'
        contactWrapper.style.display = 'none'
        form.style.display = 'flex'
        contactButton.style.color = '#000'
      })
      
      contactButton.addEventListener('click', () => {
        header.textContent = 'Contact Information'
        form.style.display = 'none'
        addNew.style.color = '#000'
        list.style.color = '#000'
        contactWrapper.style.display = 'flex'
        contactButton.style.color = '#073763'
        contact()
      })
      
}
