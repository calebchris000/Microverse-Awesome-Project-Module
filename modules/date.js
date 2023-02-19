let dateWrapper = document.querySelector(".date");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const countTime = () => {
  setInterval(() => {
    let newDate = new Date();
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let year = newDate.getFullYear();
    let time = `${newDate.toLocaleTimeString()}`;
    dateWrapper.innerHTML = `${monthNames[month]} ${day +12} ${year}, ${time}`;
  }, 1000)

 
}

export {countTime}

