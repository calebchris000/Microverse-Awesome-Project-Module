let bookItems = document.querySelector(".bookItems");
let form = document.querySelector("form");
let contactWrapper = document.querySelector(".contactInfo");

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

  bookItems.style.display = "none";
  form.style.display = "none";

};
