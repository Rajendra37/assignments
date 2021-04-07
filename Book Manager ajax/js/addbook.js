
const form = document.getElementById('bookForm');


const addBook=async(e)=>{
    e.preventDefault();
    
    
    console.log("...")
    let bookT=document.getElementById('Bname').value;
    let bookA=document.getElementById('Bauthor').value;
    let bookP=document.getElementById('Bprice').value;
    let bookR=document.getElementById('Brating').value;

    const book={
        title:bookT,
        auther:bookA,
        price:bookP,
        rating:bookR
    }
        //console.log(book)
    await fetch('http://localhost:3000/BookDataBase',{
        method: 'POST',
        body: JSON.stringify(book),
        headers:{'Content-Type':'application/json'}
    });
    window.location.replace('/bookList.html');

}
form.addEventListener('submit',addBook);

