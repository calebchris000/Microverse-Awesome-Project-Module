const bookItems = document.querySelector('.bookItems');
const form = document.querySelector('form');
const contactWrapper = document.querySelector('.contactInfo');

/* eslint-disable import/prefer-default-export */
export const contact = () => {
  contactWrapper.innerHTML = `
  <p>
      Do you have any questions or you just want to 
      say "Hello"?<br>You can reach out to us!
  </p>
  
  <ul class="contact-info">
      <li>Our email: johndoe1987@gmail.com</li>
      <li>Our phone number: (425) 555-0198</li>
      <li>Our address: 742 Maple Street, Springfield</li>
  </ul>
  `;

  bookItems.style.display = 'none';
  form.style.display = 'none';
};
