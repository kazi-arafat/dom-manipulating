# DOM Manipulation Using Vanilla JavaScript
--------------------------------------------

* Documnet object model, a structured representation of web page.
* Tree of nodes/elements created by the browser.
* Object oriented reprsentation. Each node has its own properties and methods.

   ![dom_image](images/dom.png)

* Browser provides top level object named **window** object, which is the browser itself.

   Then within **window**, we have **Documnet**(basically core of the DOM) object which provides **Root element.**

   Within **Root element** we have two children/nodes named **head** and **body**.

   and these element have all the other tags as the child 
--------------------------------------------------------------------

* ```javascript
  console.dir(document) 
  /* Prints all the relevant info about document in consle */
  ```
* With querySelector() we can use css query selector.
* parentNode Vs parentElement:
  Both these properties gives the parent of particular node or element. 
  Basic difference comes when parent node of a node is not an element, then parentElement gives null where as parentNode gives that node.
  Example
  ```javascript
      let body = document.querySelector('body');
      console.log(body.parentElement); //html
      console.log(body.parentElement.parentElement); //gives null

      console.log(body.parentNode); //html
      console.log(body.parentNode.parentNode); // document
      console.log(body.parentNode.parentNode.parentNode); // gives null
  ```
* **className Vs classList:**
  Both the property gives the class names of an element.
  For assigning if we use className property the existing class names wiped out and newly class is only added.
  And if we use classList then new class is added with existing classes to that element.

* **clientX clientY Vs offsetX offsetY:**
  **clientX clientY** Gives x and y position of mouse click from actual window or client.
  **offsetX offsetY** Gives x and y position of mouse click from actual element.

* **mousedown Vs mouseup Vs click:**
  A mousedown event is fired when the mouse button is pressed but before it is released.

  The click event is fired after the mousedown and mouseup events, means when you press mouse button and then release it.

  A mouseup event is fired when the pressed mouse button is released.

* **mouseover/out Vs mouseenter/leave:**
  **mouseover** is for any inner element and element as well.
  **mouseenter** is fired while mouse enters to the parent element. does not fires for child element.