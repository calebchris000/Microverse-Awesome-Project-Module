/* eslint-disable import/prefer-default-export */
export class LocalStorage {
  constructor(data) {
    this.data = data;
  }

  saveData() {
    const stringified = JSON.stringify(this.data);
    localStorage.setItem('data', stringified);
  }

  getData() {
    const parsed = JSON.parse(this.data);
    return parsed;
  }

  removeData() {
    localStorage.removeItem(this.data);
  }
}