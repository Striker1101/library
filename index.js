var title = document.getElementById('title');
const author = document.getElementById('author');
const page = document.getElementById('page');
const readOption = document.getElementById('readOption');
var dtitle = document.getElementById('dtitle');
const dauthor = document.getElementById('dauthor');
const dpage = document.getElementById('dpage');
const dreadOption = document.getElementById('dreadOption');
function addBookToLibrary(){
  let dtitle = title.value;
  console.log(dtitle);
}



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