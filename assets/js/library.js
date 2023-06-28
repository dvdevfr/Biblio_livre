export default class Library {
  books;
  DOMContainer;
  sortSelectedOption;
  constructor(DOMContainer) {
    this.books = [];
    this.DOMContainer = DOMContainer;
    this.sortOption = "title";
  }
  addBook(book) {
    this.books.push(book);
  }
  deleteBook(book) {
    this.books.splice(this.books.indexOf(book));
    book.DOMElement.remove();
  }
  updateDOM() {
    switch (this.sortSelectedOption) {
      case "title":
        this.sortByTitle();
        break;
      case "author":
        this.sortByAuthor();
    }
    this.DOMContainer.innerHTML = "";
    this.books.forEach((e) => this.DOMContainer.appendChild(e.DOMElement));
  }
  sortByTitle() {
    this.sortSelectedOption = "title";
    this.books.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
  sortByAuthor() {
    this.sortSelectedOption = "author";
    this.books.sort((a, b) => {
      return a.author.localeCompare(b.author);
    });
  }
}
