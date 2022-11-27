// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    console.log(document.getElementById(elmnt.id + "header"));
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const page = document.getElementById("page");
const readOption = document.getElementById("readOption");
const submit = document.querySelector("#Addbook");
const form = document.querySelector("#books");

let myLibrary = [];

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
  display() {
    return Object.values(this);
  }
  remove() {
    return this.pop;
  }
}

function addBookToLibrary() {
  const content = new book(
    title.value,
    author.value,
    page.value,
    readOption.checked ? "read" : "unread"
  );
  myLibrary.push(content);
  let lock = content.display();

  /*dtitle.textContent = lock[0]
    dauthor.textContent = lock[1]
    dpage.textContent = lock[2]
    dread.textContent = lock[3]*/
  let catalog = document.querySelector("#catalog");

  let hold = document.createElement("div");
  hold.classList.add("hold");
  catalog.appendChild(hold);

  let dtitle = document.createElement("p");
  dtitle.classList.add("dtitle");
  hold.appendChild(dtitle);

  let dauthor = document.createElement("p");
  dauthor.classList.add("dauthor");
  hold.appendChild(dauthor);

  let dpage = document.createElement("p");
  dpage.classList.add("dpage");
  hold.appendChild(dpage);

  let dread = document.createElement("p");
  dread.classList.add("dread");
  hold.appendChild(dread);

  let count = document.createElement("div");
  count.classList.add("count");
  hold.appendChild(count);

  //toggle textContent of output
  let readToggle = document.createElement("button");
  readToggle.classList.add("readToggle");
  readToggle.setAttribute("type", "button");
  hold.appendChild(readToggle);
  readToggle.textContent = "Option";

  //remove button
  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.setAttribute("type", "button");
  hold.appendChild(remove);
  remove.textContent = "Delete";

  readToggle.onclick = () => {
    if (dread.textContent == "unread") {
      dread.textContent = "read";
    } else {
      dread.textContent = "unread";
    }
    myLibrary[count.getAttribute("data-count")].read = dread.textContent;
    console.log(myLibrary);
  };
  //remove obj from arr
  remove.onclick = (e) => {
    myLibrary.splice([count.getAttribute("data-count")], 1);
    e.target.parentElement.remove();
    e.target.parentElement.style.display = "none";
  };
  function set() {
    myLibrary.forEach((element, index) => {
      dtitle.textContent = element.title;
      dauthor.textContent = element.author;
      dpage.textContent = element.pages;
      dread.textContent = element.read;
      // set counter atttribte for obj
      count.setAttribute("data-count", `${index}`);
    });
  }
  set();
  form.reset();
}

form.addEventListener("input", (e) => {
  e.preventDefault();
});

/*JSON.stringify(book);//turn each element to string
let myLibrary = [(Object.values(book))]; // display all element in an object 
*/
