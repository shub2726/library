const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    // this.info = function () {
    //     let str = title + " by " + author + ", " + pages + " pages, ";
    //     str += hasRead ? "done reading" : "not read yet"
    //     return str;
    // }
}

function addBookToLibrary() {
    const book = new Book("Wimpy Kid", "Jeff Kinney", 220, 0);
    myLibrary.push(book);
    const book2 = new Book("Wimp Kid", "Jeff Kinney", 220, 1);
    myLibrary.push(book2);
}

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const container = document.getElementById('card-container');
        let newCard = document.createElement("div");
        newCard.classList.add("card");
        let titleField = document.createElement("div");
        titleField.innerText = myLibrary[i].title;
        let authorField = document.createElement("div");
        authorField.innerText = myLibrary[i].author;
        let pageField = document.createElement("div");
        pageField.innerText = myLibrary[i].pages;
        let readStatusField = document.createElement("div");
        readStatusField.innerText = myLibrary[i].hasRead;
        newCard.append(titleField);
        newCard.append(authorField);
        newCard.append(pageField);
        newCard.append(readStatusField);
        container.append(newCard);
    }
}

addBookToLibrary();
displayLibrary();