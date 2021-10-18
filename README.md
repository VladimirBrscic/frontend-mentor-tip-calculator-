# Frontend Mentor - Tip calculator app with Sass and debounce function

Hi, thanks for checking out this front-end coding challenge.
this is simple calculator type app that I did as a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

Frontend Mentor challenges are very helpful in improving coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

App was built according to designs given in jpg format.

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I started with learning Sass ,definitely there is a lot more to be learned here and I'm looking forward to gain experience in using it in the best possible way.

Also I have found out how some layouts become really easy with grid use.

For multiple buttons where only one is supposed to give some functionality at any given time I used radio buttons.

Input event handlers are passed as a parameters to debounce function.

Example:

```js
let assignValue = () => {
  billAmountVariable = Number(billAmountInput.value);
  totalAmountPersonCalculate();
};
billAmountInput.addEventListener("keyup", debounce(assignValue, 500));
```

### Continued development

I plan to update this challenge by using React. Which is currently my main focus in programming studies.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
