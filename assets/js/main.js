import Library from "./library";
import Book from "./book";

const cardContainer = document.querySelector(".cardsContainer");
const form = document.getElementById("addBookForm");
const sortByTitleBtn = document.getElementById("sortByTitle");
const sortByAuthorBtn = document.getElementById("sortByAuthor");

const library = new Library(cardContainer);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const book = new Book(
    formData.get("title"),
    formData.get("imgSrc"),
    formData.get("author"),
    library
  );
  library.addBook(book);
  library.updateDOM();
  e.target.reset();
});
sortByTitleBtn.addEventListener("click", (e) => {
  library.sortByTitle();
  library.updateDOM();
});
sortByAuthorBtn.addEventListener("click", (e) => {
  library.sortByAuthor();
  library.updateDOM();
});
