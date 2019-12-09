// DOM Manipulation using JS
// console.dir(document) 
/* Prints all the relevant info properties and methods
 about document in consle */

// Examine the documnet object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);  // prints HTMLAllCollection
// console.log(document.forms)
// collection of all the forms in document

// Single Selector

let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// console.log(headerTitle.innerHTML);
// headerTitle.textContent = "Hello

var items = document.getElementsByClassName('list-group-item');

for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4f4';
    // items[i].style.backgroundColor = 'black'
}

// get elements by tag name

// Qery Selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px #ccc';

var input = document.querySelector('input');
input.value = 'hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

var firstItem = document.querySelector('.list-group-item:first-child');
firstItem.style.color = "blue";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "green";

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "coral";


// Qery Selector All
var titles = document.querySelectorAll('.title')
console.log(titles)

titles[0].textContent = "Hello"
