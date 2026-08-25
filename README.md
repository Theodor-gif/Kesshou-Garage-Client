# Kesshou Garage - E-Commerce Drift car parts shop App

A simple full-stack E-Commerce shop application built with React, Express, MongoDB Atlas (via Mongoose).

## Features

- View all Drift car products
- Add a product at the cart
- Add a product at favorite list
- Create a User
- Create a comment for a product
- Delete a product from the cart
- Delete a product from the favorite list

## Tech Stack

- React, CSS Modules, JavaScript
- [react-router-dom](https://reactrouter.com/) — client-side routing
- [axios](https://axios-http.com/) — API communication with the backend
- [MUI](https://mui.com/) (`@mui/material`, `@mui/icons-material`) — UI components and icons
- [Motion](https://motion.dev/) — animations

## Project Structure

```
Client-project/
|
|-- public/
|   |
|   |-- brand-companies/
|   |-- cars/
|   |__ parts/
|
|-- src/
    |
    |-- assets/
    |   |-- Category-images/
    |   |__ brands/
    |
    |-- components/
    |   |-- Footer.jsx/
    |   |-- HomeHero.jsx/
    |   |-- Login.jsx/
    |   |-- ModelHero.jsx/
    |   |-- Navbar.jsx/
    |   |-- NavbarPopup.jsx/
    |   |-- Registration.jsx/
    |   |__ ScrollToTop.jsx/
    |
    |-- context/
    |   |__ ContextApi.jsx/
    |
    |-- css/
    |   |-- about.module.css/
    |   |-- cart.module.css/
    |   |-- contact.module.css/
    |   |-- favorite.module.css/
    |   |-- footer.module.css/
    |   |-- home.module.css/
    |   |-- homehero.module.css/
    |   |-- login.module.css/
    |   |-- model.module.css/
    |   |-- navbar.module.css/
    |   |-- navbarPopup.module.css/
    |   |-- parts.module.css/
    |   |-- partsdetail.module.css/
    |   |-- registerlogin.module.css/
    |   |__ registration.module.css/
    |
    |-- pages/
    |   |-- About.jsx/
    |   |-- Cart.jsx/
    |   |-- Contact.jsx/
    |   |-- Favorites.jsx/
    |   |-- Home.jsx/
    |   |-- Model.jsx
    |   |-- Parts.jsx/
    |   |-- PartsDetail.jsx/
    |   |__ RegisterLogin.jsx/
    |
    |-- App.css/
    |-- App.jsx/
    |__ main.jsx/
```

## Environment Variables

| Variable       | Description                         |
| -------------- | ----------------------------------- |
| `VITE_API_URL` | Base URL of the backend Express API |

> For backend setup and its environment variables, see the [Server README](https://github.com/Theodor-gif/Kesshou-Garage-Server).
