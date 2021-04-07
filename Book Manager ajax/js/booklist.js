let search=document.getElementById('searchform');

const getBookData=async(searchText)=>{


    let uri='http://localhost:3000/BookDataBase?';

    if(searchText)
    {
        uri+=`&q=${searchText}`;
    }


    const response=await fetch(uri);
    const myBooks=await response.json();


    let displayIntable="";
    myBooks.forEach(bookdata => {

        displayIntable+=`<tr>
                        <td>${bookdata.id}</td>
                        <td>${bookdata.title}</td>
                        <td>${bookdata.auther}</td>
                        <td>${bookdata.price}</td>
                        <td>${bookdata.rating}</td>
                        <td><a href="./details.html?id=${bookdata.id}">See Details</a></td>
                        </tr>`
        
    });

    let table=document.getElementById('tableBody');
    table.innerHTML=displayIntable;

}

search.addEventListener('submit', async(e)=>{

        e.preventDefault();
        getBookData(search.searchText.value.trim());  // trim is to remove white space
})


window.addEventListener('DOMContentLoaded',()=>getBookData());
