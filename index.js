const title = document.getElementById('title');
const author = document.getElementById('author');
const page = document.getElementById('page');
const readOption = document.getElementById('readOption');
const submit = document.querySelector('#Addbook')
const form = document.querySelector('#books')



let  myLibrary = []



/*
class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
    display() {
      return Object.values(this); // values || keys
      //return JSON.stringify(book) for object litrate
    };
}
*/
class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  display() { return Object.values(this); }
  remove() { return this.pop; }
}

function addBookToLibrary (){

  const content = new book(
  title.value,
  author.value,
  page.value,
  readOption.checked ? "read" : "unread"

)
myLibrary.push(content)
console.log(myLibrary)
let lock = content.display()

    /*dtitle.textContent = lock[0]
    dauthor.textContent = lock[1]
    dpage.textContent = lock[2]
    dread.textContent = lock[3]*/
  let catalog = document.querySelector('#catalog');
  let dtitle = document.createElement("p");
  dtitle.classList.add('dtitle');
  catalog.appendChild(dtitle);
  
  let dauthor = document.createElement("p");
  dauthor.classList.add('dauthor');
  catalog.appendChild(dauthor);
  
  let dpage = document.createElement("p");
  dpage.classList.add('dpage');
  catalog.appendChild(dpage);
  
  let dread= document.createElement("p");
  dread.classList.add('dread');
  catalog.appendChild(dread);
  
  let count = document.createElement("div");
  count.classList.add("count");
  catalog.appendChild(count);

    //toggle textContent of output
  let readToggle = document.createElement("button");
  readToggle.classList.add("readToggle");
  readToggle.setAttribute("type", "button")
  catalog.appendChild(readToggle); 
  readToggle.textContent = "Option"
 

  //remove button
let remove = document.createElement("button");
remove.classList.add("remove");
remove.setAttribute("type", "button")
catalog.appendChild(remove); 
remove.textContent = "Delete";

readToggle.onclick = () => {if (dread.textContent == "unread"){
  dread.textContent = "read"
 }else{ dread.textContent = "unread"} 
 myLibrary[count.getAttribute("data-count")].read = dread.textContent;
 console.log(myLibrary)
};
//remove obj from arr
remove.onclick = () => { myLibrary.splice([count.getAttribute("data-count")], 1);

removeAllInnerText(catalog)
myLibrary.forEach ((element, index)=> {
  dtitle.textContent = element.title
  dauthor.textContent = element.author
  dpage.textContent = element.pages
  dread.textContent = element.read
 // index = (myLibrary.indexOf(element))
 // set counter atttribte for obj
  count.setAttribute("data-count", `${index}`);
})
console.log(myLibrary)
}


 
  myLibrary.forEach ((element, index)=> {
    dtitle.textContent = element.title
    dauthor.textContent = element.author
    dpage.textContent = element.pages
    dread.textContent = element.read
   // index = (myLibrary.indexOf(element))
   // set counter atttribte for obj
    count.setAttribute("data-count", `${index}`);
    //read or unread
  })

}

const removeAllInnerText = (element) => {
  const nodes = element.childNodes;

  nodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE && node.childNodes.length > 0) {
      removeAllInnerText(node);
    } else if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = "";
    }
  });
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
})
/*
myLibrary.forEach(item =>{
  let lib = document.createElement("div").classList.add("lib")
catalog.appendChild(lib);

let dtitle = document.createElement("p").classList.add("dtitle")
lib.appendChild(dtitle)

let dauthor = document.createElement("p").classList.add("dauthor")
dtitle.appendChild(dauthor)

let dpage = document.createElement("p").classList.add("dpage")
dauthor.appendChild(dpage)

let dread = document.createElement("p").classList.add("dread")
dpage.appendChild(dread)
  
})
/*JSON.stringify(book);//turn each element to string
let myLibrary = [(Object.values(book))]; // display all element in an object 

function Book() {
 // the constructor...
 var book= function(author, title, pages, read){
   this.author = author;
   this.title  = title;
   this.pages  = pages;
   this.read   = read;
 }
} 
function removeBook() {
  // do stuff here
 
 }

function addBookToLibrary() {
 // do stuff here
var form= document.getElementById('books') .value; 
document.getElementById('catalog').value= form;
}

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('books');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});*/
/*
let button = document.querySelector("button");
let first = document.querySelector("first");
let second = document.createElement("div");
second.classList.add("second");
first.textContent = "first";
second.textContent = "second"
button.onclick = () => { second.classList.toggle("first")}
*/