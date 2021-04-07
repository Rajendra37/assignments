export class book{
    
    bookid:String;
    bookname:String;
    bookauthor:String;
    bookprice:String;
    bookrating:String;

    constructor(givenid:String,givenname:String,givenauthor:String,givenprice:String,givenrating:String)
    {
        this.bookid=givenid;
        this.bookname=givenname;
        this.bookauthor=givenauthor;
        this.bookprice=givenprice;
        this.bookrating=givenrating;
    }

}



let bookForm = document.getElementById('bookForm');
bookForm?.addEventListener('submit', bookSubmit);

function bookSubmit(e:Event)
{
        console.log("click...");

    let id = (<HTMLInputElement>document.getElementById('Bid')).value;
    let name = (<HTMLInputElement>document.getElementById('Bname')).value;
    let author = (<HTMLInputElement>document.getElementById('Bauthor')).value;
    let price=(<HTMLInputElement>document.getElementById('Bprice')).value;
    let rating=(<HTMLInputElement>document.getElementById('Brating')).value;

    let book={
        bookid:id,
        bookname:name,
        bookauthor:author,
        bookprice:price,
        bookrating:rating

    }
    if(localStorage.getItem('myBooks')==null)
    {
        localStorage.setItem('myBooks','[]');
    }
    let allbooks=JSON.parse(localStorage.getItem('myBooks')||'[]');
    allbooks.push(book);

    localStorage.setItem('myBooks',JSON.stringify(allbooks));



        e.preventDefault();

}