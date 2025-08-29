###  Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById is used to get one element by its unique id, getElementsByClassName is used to get many elements that have the same class name, and querySelector / querySelectorAll can use any CSS selector. querySelector gives the first match only, while querySelectorAll gives all matches.

2. How do you create and insert a new element into the DOM?

To add a new element in a webpage, first make it with document.createElement(), then it text or attributes, and  it on the using appendChild(), prepend(), before(), or after().

3. What is Event Bubbling and how does it work?

Event bubbling means when click on a child element, the event also goes up to its parent, then the parent’s parent, and so on. For example, if click a button inside a div, first the button’s event happens, then the div’s event happens, and it keeps moving upward. stop this chain using event.stopPropagation().

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is add a event listener to a parent element instead of each child element. When a child is clicked, the event bubbles up to the parent. This is useful because it makes the code simpler.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser . stopPropagation() stops the event  elements.