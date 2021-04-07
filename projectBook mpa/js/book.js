export class book {
    constructor(givenid, givenname, givenauthor, givenprice, givenrating) {
        this.bookid = givenid;
        this.bookname = givenname;
        this.bookauthor = givenauthor;
        this.bookprice = givenprice;
        this.bookrating = givenrating;
    }
}
let bookForm = document.getElementById('bookForm');
bookForm === null || bookForm === void 0 ? void 0 : bookForm.addEventListener('submit', bookSubmit);
function bookSubmit(e) {
    console.log("click...");
    let id = document.getElementById('Bid').value;
    let name = document.getElementById('Bname').value;
    let author = document.getElementById('Bauthor').value;
    let price = document.getElementById('Bprice').value;
    let rating = document.getElementById('Brating').value;
    let book = {
        bookid: id,
        bookname: name,
        bookauthor: author,
        bookprice: price,
        bookrating: rating
    };
    if (localStorage.getItem('myBooks') == null) {
        localStorage.setItem('myBooks', '[]');
    }
    let allbooks = JSON.parse(localStorage.getItem('myBooks') || '[]');
    allbooks.push(book);
    localStorage.setItem('myBooks', JSON.stringify(allbooks));
    e.preventDefault();
}
