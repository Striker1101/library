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

  let hold = document.createElement('div');
  hold.classList.add('hold')
  catalog.appendChild(hold)

  let dtitle = document.createElement("p");
  dtitle.classList.add('dtitle');
  hold.appendChild(dtitle);
  
  let dauthor = document.createElement("p");
  dauthor.classList.add('dauthor');
  hold.appendChild(dauthor);
  
  let dpage = document.createElement("p");
  dpage.classList.add('dpage');
  hold.appendChild(dpage);
  
  let dread= document.createElement("p");
  dread.classList.add('dread');
  hold.appendChild(dread);
  
  let count = document.createElement("div");
  count.classList.add("count");
  hold.appendChild(count);

    //toggle textContent of output
  let readToggle = document.createElement("button");
  readToggle.classList.add("readToggle");
  readToggle.setAttribute("type", "button")
  hold.appendChild(readToggle); 
  readToggle.textContent = "Option"
 

  //remove button
let remove = document.createElement("button");
remove.classList.add("remove");
remove.setAttribute("type", "button")
hold.appendChild(remove); 
remove.textContent = "Delete";

readToggle.onclick = () => {if (dread.textContent == "unread"){
  dread.textContent = "read"
 }else{ dread.textContent = "unread"} 
 myLibrary[count.getAttribute("data-count")].read = dread.textContent;
 console.log(myLibrary)
};
//remove obj from arr
remove.onclick = (e) => { 
  myLibrary.splice([count.getAttribute("data-count")], 1);
  e.target.parentElement.remove();
  e.target.parentElement.style.display ="none"
}
 function set(){
  myLibrary.forEach ((element, index)=> {
    dtitle.textContent = element.title
    dauthor.textContent = element.author
    dpage.textContent = element.pages
    dread.textContent = element.read
   // set counter atttribte for obj
    count.setAttribute("data-count", `${index}`);
  })
 }
 set()

}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
})

/*JSON.stringify(book);//turn each element to string
let myLibrary = [(Object.values(book))]; // display all element in an object 
*/