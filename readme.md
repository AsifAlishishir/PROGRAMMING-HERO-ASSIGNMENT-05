# <u>Q&A</u>

### <u>Question 01.</u> What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<u>Answer:</u> First of all these are called DOM(Document Object Model) Selection Methods in JavaScript. These methods help us to find and grab elements from our HTML file so we can work with them in JS.

<u>getElementById:</u> It only selects a single element by it's ID. It return's a single element object.

<u>getElementsByClassName:</u> It finds all the elements with the same class.It returns something like an array(called HTMLCollection).

<u>querySelector:</u> It finds the first element that matches a CSS selector.It returns a single element object.

<u>querySelectorAll:</u> It finds all elements that matches a CSS selector.It returns a NodeList.

### <u>Question 02.</u> How do you create and insert a new element into the DOM?

<u>Answer:</u> If you want to create and insert a new element in DOM you can do it in three steps.

1st Step: First we need to create an element using document.createElement().

```js
const div = document.createElement("div");
```

2nd Step: We can add text, classes, styles on the div.

```js
newDiv.textContent = "Hello, DOM!";

newDiv.classList.add("greeting");

newDiv.style.color = "blue";
```

3rd Step: Now we have to insert the Element into the DOM using appendchild() method in a desired location.

```js
document.body.appendChild(newDiv);
```

### <u>Question 3.</u> What is Event Bubbling and how does it work?

<u>Answer:</u> Event bubbling means when you click (or trigger an event) on an element, the event starts from the innermost element (where it happened) and then **bubbles up** (moves upward) through its parent elements, all the way up to the `document`.

#### How it works (step by step):

HTML:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

And JavaScript:

```js
document.getElementById("child").addEventListener("click", () => {
  console.log("Child button clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent div clicked");
});

document.body.addEventListener("click", () => {
  console.log("Body clicked");
});
```

#### What happens when you click the button?

You can see in the console:

1. First → `"Child button clicked"` (event starts here).
2. Then → `"Parent div clicked"` (bubbles up).
3. Then → `"Body clicked"` (bubbles up again).

The event keeps moving upward until it reaches `document`.

#### Why does this happen?

Because in the DOM, events have a **propagation phase**:

1. **Capturing phase** → event goes _down_ from `document` to the target.
2. **Target phase** → event happens on the clicked element.
3. **Bubbling phase** → event goes _up_ from target to `document`.

By default, most event listeners in JS work in the **bubbling phase**.

### <u>Question 04.</u> What is Event Delegation in JavaScript? Why is it useful?

<u>Answer:</u> Event Delegation is a method where we put one event listener on a parent element instead of adding event listeners to each child. The parent then checks which child was clicked using event.target and do the work.

#### Why Event Delegation is Useful:

1. There are fewer event listeners so the performance is faster and better.
2. When adding new elements dynamically no need to add event listeners again.
3. By using Event Delegation we can write shorter and cleaner code that is easier to manage.

### <u>Question 05.</u> What is the difference between preventDefault() and stopPropagation() methods?

<u>Answer:</u> preventDefault() Example:
The preventDefault() method is used to stop the browser’s default action. For instance, when you click on a button inside a form, the browser normally submits the form and reloads the page so you can't see the console output you have taken from input. Because default action of the button in a form is to submit the form as you click on the button. But using preventDefault() method you can stop that default action.

```js
const btn = document.querySelector("button");

link.addEventListener("click", function (event) {
  event.preventDefault(); // stops the button from submitting

  alert("Button clicked, but page did not open!");
});
```

stopPropagation() Example:
The stopPropagation() method is used to stop an event from moving up (like bubbling) or down (capturing) the DOM tree. For example, if you have a button inside a div and both have click handlers, then clicking the button would also trigger the div’s click handler. By using stopPropagation() on the button’s click event, you can prevent the event from reaching the div, so only the button’s handler runs.

```js
const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", () => alert("Div clicked!"));
button.addEventListener("click", (event) => {
  event.stopPropagation(); // stops the click from reaching the div
  alert("Button clicked!");
});
```
