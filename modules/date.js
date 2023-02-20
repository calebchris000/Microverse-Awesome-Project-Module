import { DateTime } from './luxon-min.js';

const dateWrapper = document.querySelector('.date');

/* eslint-disable import/prefer-default-export */
export const countTime = () => {
  setInterval(() => {
    const dt = DateTime.now();

    dateWrapper.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  }, 1000);
};
