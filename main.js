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

// let headerTitle = document.getElementById('header-title');
// // console.log(headerTitle);
// // console.log(headerTitle.innerHTML);
// // headerTitle.textContent = "Hello

// var items = document.getElementsByClassName('list-group-item');

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4f4';
//     // items[i].style.backgroundColor = 'black'
// }

// get elements by tag name

// Qery Selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// var firstItem = document.querySelector('.list-group-item:first-child');
// firstItem.style.color = "blue";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "green";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "coral";


// // Qery Selector All
// var titles = document.querySelectorAll('.title')
// console.log(titles)

// titles[0].textContent = "Hello"

// Travrsing DOM
// var itemList = document.querySelector('#items');

// parentNode we can chain it as well

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// itemList.parentNode.parentNode.style.backgroundColor = '#A94360'

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// itemList.parentElement.parentElement.style.backgroundColor = '#A94360'

// let body = document.querySelector('body');
// // console.log(body.parentElement); //html
// // console.log(body.parentElement.parentElement); // null


// console.log(body.parentNode); //html
// console.log(body.parentNode.parentNode); // document
// console.log(body.parentNode.parentNode.parentNode); // null

// childNodes 
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]); // access second item
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild); 
// it prints text nodes as op because there was line break and 
// firstChild takes as child.

// firstElementChild
// console.log(itemList.firstElementChild);

//lastChild
//lastElementChild
// console.log(itemList.lastElementChild);

// nextSibling
// nextElementSibling

// previousSibling
// previousElementSibling

//create DOM element and insert

// createElement

// var newDiv = document.createElement('div');

// // add class
//  newDiv.className = 'hello';

// //or

// // newDiv.classList.add('hello');

// // add id 
// newDiv.id = 'hello1';

// // Add attribute
// newDiv.setAttribute('title','Hello Div');

// // createTextNode -- for adding text to div 
// var newDivText = document.createTextNode("Hello World");

// // add text to div
// newDiv.appendChild(newDivText);

// // Insert div to DOM
// var container = document.querySelector('header .container');
// var titleH1 = document.querySelector('#header-title');

// newDiv.style.fontSize = '30px';

// console.log(newDiv);
// container.insertBefore(newDiv,titleH1);

// Events

// var buttonClick = document.getElementById('clickhere');
// buttonClick.addEventListener('click',btnClick);

// function btnClick(e){
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     console.log(e.type);
//     console.log(e.clientX); // x pos from client/window
//     console.log(e.clientY); // Y pos from client/window

//     console.log(e.offsetX); // x pos from actual element
//     console.log(e.offsetY); // Y pos from actual element

//     console.log(e.altKey) // returns true if we hold alt key
//     console.log(e.shiftKey) // returns true if we hold shift key
//     console.log(e.ctrlKey) // returns true if we hold ctrl key
// 

var buttonClick = document.getElementById('clickhere');
var form = document.querySelector('form');
var box = document.getElementById('box');
var itemInput = document.querySelector('input[type="text"');
var select = document.querySelector('select');

// buttonClick.addEventListener('click',runEvent);
// buttonClick.addEventListener('dblclick',runEvent);
// buttonClick.addEventListener('mousedown',runEvent);
// buttonClick.addEventListener('mouseup',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);

// box.addEventListener('mousemove',runEvent);

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);


itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('copy',runEvent);
itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('input',runEvent);
// select.addEventListener('change',runEvent);
// form.addEventListener('submit',runEvent);

function runEvent(e){
    // e.preventDefault();
    // console.log(e.type + " is disabled for this.");
    // return false
    
    // console.log('Event Type: ' + e.type);
    // console.log(e.target.value);
    
    
    // document.body.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ",50)";
    // console.log(e.target.value);
    
    // document.querySelector('#op').innerHTML = '<h3>' + e.target.value + '</h3>';
}