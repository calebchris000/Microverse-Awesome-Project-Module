class Books {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.book = []
    }
  
    addBook(item) {
      this.book.push(item)
    }
  
    getTitle() {
      return this.title.value
    }
  
    getAuthor() {
      return this.author.value
    }
  }

  export {Books}