# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I did](#what-i-did)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![OOwLzNH4EK](https://user-images.githubusercontent.com/35031228/140218049-11e0e663-c1a4-4fae-b3d6-fcc5dc02f3e2.gif)

### Links

- [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/responsive-faq-page-built-with-js-and-scss-Ht2bqyed2)
- [Github Live Page](https://victoriacheng15.github.io/frontend-mentor-challenges/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- SCSS
- Flexbox
- JavaScript

### What I did

This project made me rethink how to name class in ways that I can utilize "&" for nested elements, see example below. I aso decided to use JavaScript to store questions and asnwers in array and then create FAQ section instead of type them into html. Suppose, if I need to update FAQ in the future, I would only need to edit or update FAQs and JavaScript would do the rest of work. If interested to see, please head to js folder.

```css
.image {
  position: relative;
  width: 300px;
  transform: translateY(100px);
  z-index: 1;

  &-front {
    $width: 95%;
    position: absolute;
    width: $width;
    top: -130px;
    left: calc(50% - ($width/2));

    @include breakpoint(1000px) {
      transform: translate(0, 50px);
    }
  }
}
```

## Author

- Frontend Mentor - [@victoriacheng15](https://www.frontendmentor.io/profile/victoriacheng15)
- Github - [@victoriacheng15](https://github.com/victoriacheng15)

## Acknowledgments

As always, thanks to people at Frontend Mentor for offering the oportunity to allow me practice my skills.
