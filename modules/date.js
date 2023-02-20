const dateWrapper = document.querySelector('.date');

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/* eslint-disable import/prefer-default-export */
export const countTime = () => {
  setInterval(() => {
    const newDate = new Date();
    const month = newDate.getMonth();
    const day = newDate.getDay();
    const year = newDate.getFullYear();
    const time = `${newDate.toLocaleTimeString()}`;
    dateWrapper.innerHTML = `${monthNames[month]} ${day + 12} ${year}, ${time}`;
  }, 1000);
};
