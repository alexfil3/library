// three colors 1. 0c1618 2. 004643 3.faf4d3

const addBook = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");
const submit = dialog.querySelector(".submit");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {}

addBook.addEventListener("click", openModal);

function openModal() {
  dialog.showModal();
}

submit.addEventListener("click", addBookToLibrary);
