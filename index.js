/* Class implementation */
const addBook = document.querySelector(".add-book");
const dialog = document.querySelector("dialog");
const submit = document.querySelector(".submit");
const close = document.querySelector(".cancel");
const booksList = document.querySelector(".books-list");
const form = document.querySelector(".form");

class Library {
  myLibrary = [];
  id = 1;

  addBookToLibrary = () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    if (form.checkValidity()) {
      const book = new Book(title, author, pages, read, this.id);
      console.log(book);
      console.log(this);
      this.myLibrary.push(book);
      this.id++;
    }

    this.renderLibrary();
  };

  deleteBook = (e) => {
    const elemToDelete = e.currentTarget.id;

    if (e.target.className === "delete-btn") {
      const filteredArray = this.myLibrary.filter(
        ({ id }) => id !== Number(elemToDelete)
      );

      this.myLibrary = [...filteredArray];

      this.renderLibrary();
    }
  };

  renderLibrary() {
    booksList.textContent = "";

    this.myLibrary.forEach((book) => {
      const li = document.createElement("li");
      li.classList.add("book");

      const title = document.createElement("h2");
      title.textContent = `Title: ${book.title}`;
      li.appendChild(title);

      const author = document.createElement("h3");
      author.textContent = `Author: ${book.author}`;
      li.appendChild(author);

      const pages = document.createElement("p");
      pages.textContent = `Pages: ${book.pages}`;
      li.appendChild(pages);

      const read = document.createElement("p");
      read.textContent = `Read: ${book.read}`;
      li.appendChild(read);

      const div = document.createElement("div");
      div.classList.add("book-buttons-wrapper");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
      div.appendChild(deleteBtn);

      const readBtn = document.createElement("button");
      readBtn.textContent = book.read ? "Undo" : "Done";
      readBtn.classList.add("read-btn");
      readBtn.addEventListener("click", function () {
        read.textContent =
          read.textContent === "Read: true" ? "Read: false" : "Read: true";
        readBtn.textContent =
          read.textContent === "Read: true" ? "Undo" : "Done";
      });
      div.appendChild(readBtn);
      li.appendChild(div);

      li.addEventListener("click", this.deleteBook);
      li.setAttribute("id", `${book.id}`);
      booksList.appendChild(li);
    });
  }
}

class Book {
  constructor(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
  }
}

class Modal {
  openModal() {
    const form = document.querySelector(".form");
    form.reset();
    dialog.showModal();
    dialog.addEventListener("click", this.closeDialog);
  }

  closeDialogByCancel() {
    dialog.close();
  }

  closeDialog(e) {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialog.close();
    }
  }
}

const library = new Library();
const modal = new Modal();

addBook.addEventListener("click", modal.openModal);
close.addEventListener("click", modal.closeDialogByCancel);
submit.addEventListener("click", library.addBookToLibrary);

/* Function implementation */
// const addBook = document.querySelector(".add-book");
// const dialog = document.querySelector("dialog");
// const submit = document.querySelector(".submit");
// const close = document.querySelector(".cancel");
// const booksList = document.querySelector(".books-list");

// let myLibrary = [];
// let id = 1;

// function Book(title, author, pages, read, id) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.id = id;
// }

// // adding a book to the library
// submit.addEventListener("click", addBookToLibrary);

// function addBookToLibrary() {
//   const form = document.querySelector(".form");
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#pages").value;
//   const read = document.querySelector("#read").checked;

//   if (form.checkValidity()) {
//     const book = new Book(title, author, pages, read, id);
//     myLibrary.push(book);
//   }

//   renderLibrary();
// }

// function deleteBook(e) {
//   const elemToDelete = e.currentTarget.id;

//   if (e.target.className === "delete-btn") {
//     const filteredArray = myLibrary.filter(
//       ({ id }) => id !== Number(elemToDelete)
//     );
//     myLibrary = [...filteredArray];
//     renderLibrary();
//   }
// }

// function renderLibrary() {
//   booksList.textContent = "";

//   myLibrary.forEach((book) => {
//     const li = document.createElement("li");
//     li.classList.add("book");
//     const title = document.createElement("h2");
//     title.textContent = `Title: ${book.title}`;
//     li.appendChild(title);
//     const author = document.createElement("h3");
//     author.textContent = `Author: ${book.author}`;
//     li.appendChild(author);
//     const pages = document.createElement("p");
//     pages.textContent = `Pages: ${book.pages}`;
//     li.appendChild(pages);
//     const read = document.createElement("p");
//     read.textContent = `Read: ${book.read}`;
//     li.appendChild(read);
//     const div = document.createElement("div");
//     div.classList.add("book-buttons-wrapper");
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");
//     div.appendChild(deleteBtn);
//     const readBtn = document.createElement("button");
//     readBtn.textContent = book.read ? "Undo" : "Done";
//     readBtn.classList.add("read-btn");
//     readBtn.addEventListener("click", function () {
//       read.textContent =
//         read.textContent === "Read: true" ? "Read: false" : "Read: true";
//       readBtn.textContent = read.textContent === "Read: true" ? "Undo" : "Done";
//     });
//     div.appendChild(readBtn);
//     li.appendChild(div);
//     li.addEventListener("click", deleteBook);
//     li.setAttribute("id", `${book.id}`);
//     booksList.appendChild(li);

//     id += 1;
//   });
// }

// // working with dialog
// addBook.addEventListener("click", openModal);

// function openModal() {
//   const form = document.querySelector(".form");
//   form.reset();
//   dialog.showModal();
//   dialog.addEventListener("click", closeDialog);
// }

// close.addEventListener("click", closeDialogByCancel);

// function closeDialogByCancel() {
//   dialog.close();
// }

// function closeDialog(e) {
//   const rect = dialog.getBoundingClientRect();
//   const isInDialog =
//     rect.top <= e.clientY &&
//     e.clientY <= rect.top + rect.height &&
//     rect.left <= e.clientX &&
//     e.clientX <= rect.left + rect.width;
//   if (!isInDialog) {
//     dialog.close();
//   }
// }
