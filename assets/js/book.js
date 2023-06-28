export default class Book {
  library;
  title;
  imgSrc;
  author;
  DOMElement;
  constructor(title, imgSrc, author, library) {
    this.title = title;
    this.library = library;
    this.imgSrc = imgSrc;
    this.author = author;
    this.generateTemplate();
  }
  generateTemplate() {
    const container = document.createElement("div");
    const textContainer = document.createElement("div");
    const img = new Image(250);
    img.src = this.imgSrc;
    const title = document.createElement("h5");
    title.textContent = this.title;
    const author = document.createElement("p");
    author.textContent = this.author;
    const removeBook = document.createElement("button");
    removeBook.textContent = "Retirer le livre";
    removeBook.addEventListener("click", () => {
      this.library.deleteBook(this);
    });
    container.appendChild(img);
    textContainer.appendChild(title);
    textContainer.appendChild(author);
    container.appendChild(textContainer);
    container.appendChild(removeBook);

    this.DOMElement = container;
  }
}
