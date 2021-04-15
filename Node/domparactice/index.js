let element=document.getElementById('btn');
element.addEventListener('click',addtext)

function addtext()
{
    // let txt=document.getElementById('demo')
    // txt.innerHTML+=" Rajendra"
        let img=document.createElement('img')
        img.className="image";
        img.src="./book.png"
        let add=document.getElementById('img');
        add.appendChild(img).style.marginLeft='200px';
        console.log(img);
}

let para=document.createElement('p')
para.className="paragraph";
para.innerText="welcome to dom....."
document.body.appendChild(para)
console.log(para);

// let img=document.createElement('img')
// img.className="image";
// img.src="./book.png"
// let add=document.getElementById('img')
// add.appendChild(img);
// console.log(img);