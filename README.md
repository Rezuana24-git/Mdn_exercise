# Shopping List

A simple shopping list app built with HTML and vanilla JavaScript. It is my solution to the MDN "Creating a dynamic shopping list" DOM scripting exercise.

## Features

- Add items to the list by typing in the input and clicking **Add item** (or pressing Enter)
- Delete any item with its **Delete** button
- The input is cleared and focused after each item is added, so you can keep typing
- Styling is applied with JavaScript

## Live demo

[View the live demo](https://rezuana24-git.github.io/Mdn_exercise/)

## Project structure

```
.
├── index.html     # page structure
├── shopping.js    # logic and styling
└── README.md
```

## What I practiced

- Selecting elements with `document.querySelector()`
- Creating elements with `document.createElement()` and adding them with `append()` and `appendChild()`
- Handling events with `addEventListener()` and the event object (`e.preventDefault()`, `e.target`)
- Reading and clearing an input with `input.value`
- Removing elements from the DOM with `remove()`
- Setting styles with `element.style` and `Object.assign()`

## Built with

- HTML
- JavaScript (no libraries or frameworks)

## Credits

The exercise comes from MDN Web Docs: [DOM scripting introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting).