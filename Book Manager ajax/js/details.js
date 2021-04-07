let id=new URLSearchParams(window.location.search).get('id');
let container=document.getElementById('container');
let remove=document.getElementById('delete');


let seeBookDetails=async()=>{

    let res=await fetch('http://localhost:3000/BookDataBase/'+id);
    let data=await res.json();

    console.log(data);
    let seeDetails=`
                    Book Title:- ${data.title}<br>                      
                    Book Auther:- ${data.auther}<br> 
                    Book Id:- ${data.id}<br> 
                    Book Price:- ${data.price}<br>
                    Book Rating:- ${data.rating}<br>`
                   
                    container.innerHTML=seeDetails
}

remove.addEventListener('click',async(e)=>{
    const del=await fetch('http://localhost:3000/BookDataBase/'+id,{
    method:'DELETE'
    })
    
    window.location.replace('/bookList.html');
})

window.addEventListener('DOMContentLoaded',()=>seeBookDetails());