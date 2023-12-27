const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
    displayLibrary();
}

function displayLibrary() {
    const container = document.getElementById('card-container');
    const removeCards = Array.from(container.children);
    removeCards.forEach(card => {
        if (card.classList.contains('card')) {
            console.log(card);
            card.remove();
        }
    })
    for (let i = 0; i < myLibrary.length; i++) {
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
        let readToggleButton = document.createElement("button");
        readToggleButton.innerText = myLibrary[i].hasRead ? "Not Read" : "Read";
        readToggleButton.classList.add('readToggleButton');
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('delete');
        newCard.append(titleField);
        newCard.append(authorField);
        newCard.append(pageField);
        newCard.append(readStatusField);
        newCard.append(readToggleButton);
        newCard.append(deleteButton);
        newCard.setAttribute("data-index-number", i);
        container.append(newCard);
    }
}

displayLibrary();

document.getElementById('card-container').addEventListener('click', (event) => {
    const target = event.target;

    // Handle readToggleButton clicks
    if (target.classList.contains('readToggleButton')) {
        let prev = target.previousElementSibling;
        prev.innerText = parseInt(prev.innerText) ? 0 : 1;
        target.innerText = parseInt(prev.innerText) ? "Not Read" : "Read";
    }

    // Handle deleteButton clicks
    if (target.classList.contains('delete')) {
        const card = target.closest('.card');
        const index = parseInt(card.dataset.indexNumber);
        myLibrary.splice(index, 1);

        // Update data-index-number for remaining cards
        const cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach((card, i) => {
            if (card.dataset.indexNumber > target.parentElement.dataset.indexNumber) card.dataset.indexNumber--;
        });

        card.remove();
    }
});

let dialogButton = document.getElementById('show-dialog');
const dialogBox = document.getElementById('dialog');
const confirmButton = document.getElementById('confirm');
const form = document.getElementById('form');

dialogButton.addEventListener('click', () => {
    dialogBox.showModal();
});

confirmButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        addBookToLibrary(document.getElementById('title').value,
            document.getElementById('author').value,
            document.getElementById('pages').value,
            document.getElementById('read-status').value,
        );        
        dialogBox.close();
    } 
})