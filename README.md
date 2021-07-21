# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![Screenshot](./frontend/src/assets/screenshot.png)

### Links

- Live Site URL: [link](https://audiophileapp.herokuapp.com/)

## My process

### Built with

- React (Functional components)
- Redux
- MongoDB
- REST API
- Express
- Styled Components (custom CSS)
  - Flexbox
  - Grid
- Cloudinary to house assets [link to cloud directory](https://cloudinary.com/console/c-6f3289f6bb53bbf2450219c65b4265/media_library/folders/66a467a467bf3db1fef1ebe531bd97a3)
- Desktop-first workflow

### What I learned

This was my first attempt as using Redux for state management and it was the first time I've used the MERN stack to build a single app. I have used elements of the MERN stack to build other apps but this was the first time pulling them all together in one app.

I gained a ton of comfort working with Redux. It was confusing at first but having to right several reducers and actions made me see the bigger picture and how everything is connected. Most importantly, I LOVE that Redux allows me to not have to pass so many things through props. Being able to grab state from any component is so helpful!

Figuring out how to implement the backend with a React frontend was also and interesting challenge, but breaking everything into its parts made seeing the bigger picture easier. For example, from a high level I can see that my backend directory is made up of models, controllers, and routes which all feed into the server file to get everything running. Then utilizing Redux, Redux-thunk and axios to call my own API to pull in the data for the frontend was super easy.

## Author

- Website - [Jeff Jakinovich](http://jeffjakinovich.com/)
- Frontend Mentor - [@jljakin2](https://www.frontendmentor.io/profile/jljakin2)
- LinkedIn - [Jeff Jakinovich](https://www.linkedin.com/in/jeff-jakinovich-b6b14943/)
