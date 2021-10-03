# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

- Mobile version

  ![loopstudios-landing-page-mobile](https://user-images.githubusercontent.com/35031228/135768872-9a7082f5-3a80-4143-92b4-a457c3d1852a.png)

- Desktop version

  ![loopstudios-landing-page](https://user-images.githubusercontent.com/35031228/135768871-324a3385-65b9-4721-bf6c-570fe8ecddad.png)

### Links

- [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/mobile-first-approach-site-with-flex-jXvJcFqlp)
- [Github Live Page](https://victoriacheng15.github.io/frontend-mentor-challenges/loopstudios-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this project, I decided to trying something different with mobile and desk navigation by using JavaScript to remove the "mobile-nav" class, so that way I can use **one** nav tag in index.html instead of having two nav tags for mobile and desktop layouts.

```JS
const removeMobileNav = () => {
  body.clientWidth > 800
    ? mobileNav.classList.remove('mobile-nav')
    : mobileNav.classList.add('mobile-nav')
}
```

## Author

- Frontend Mentor - [@victoriacheng15](https://www.frontendmentor.io/profile/victoriacheng15)
- Github - [@victoriacheng15](https://github.com/victoriacheng15)

## Acknowledgments

As always, thanks to people at Frontend Mentor for offering the oportunity to allow me practice my skills.
