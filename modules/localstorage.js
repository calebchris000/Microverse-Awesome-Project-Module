
class LocalStorage {
  constructor(data) {
    this.data = data
  }

  saveData(data) {
    let stringified = JSON.stringify(data)
    localStorage.setItem('data', stringified);
  }

  getData(data) {
    let parsed = JSON.parse(data);
    return parsed;
  }

  removeData() {
    localStorage.removeItem(this.data)
  }
}

export {LocalStorage}