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