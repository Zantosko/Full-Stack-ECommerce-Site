# Full Stack E-Commerce Site

## Description

This is a demo shopping site that uses the Fake Store API to load products for purchase. Key features include user authentication with JWT and a shopping cart where the user can add or delete products to purchase. The front end framework selected for this project was React and the Redux library was used for state management. PostgreSQL was the database mangament tool used for user and cart storage. Node.js was the runtime used and was paired with the Express.js framework.

## Screenshots

<p align='center'>
  <img src='client/src/assets/screenshots/HomePage.png' height='300' width='300'/>
</p>
<p align='center'>
  <img src='client/src/assets/screenshots/ProductsPage.png' height='300' width='300'/>
</p>
<p align='center'>
  <img src='client/src/assets/screenshots/ProductDetails.png' height='300' width='300'/>
</p>
<p align='center'>
  <img src='client/src/assets/screenshots/Cart.png' height='300' width='300'/>
</p>
<p align='center'>
  <img src='client/src/assets/screenshots/ConfirmationPage.png' height='300' width='300'/>
</p>

## Key Features

- **JWT Authentication** - This feature allows a user to create an account and login accordingly. Once a new user registers and account, it will hit a registration route that runs the request body it through custom middleware that validates if all input fields are filled and formatted correctly. Once validated the password is then "hashed" with Bcrypt and mapped to the database with Sequelize which results with the client being returned a JWT. This JWT is then saved in local storage. For logging in whenever a user makes a request Bcrypt will compare the entered password to the hashed password and then once again return a JWT, where it is then saved to local storage.

- **Shopping Cart** - This feature allows the user to add or delete items that they wish to purchase. Whenever the cart is updated it will immediately be reflected in the database as well as updating the red item counter on the top-right corner of the screen. The current items that a user has in their cart will persist through logouts. If the user logs out the cart counter will be set to 0 and they will be unable to access the cart route until they log back in. Once the user logs back in an endpoint will be called to return their cart back to its previous state. If a user proceeds to checkout then their cart will be cleared and they will then be redirected to the confirmation page which details their order summary.

## Technologies Used

**Client Side**

- React/Redux
- React Router
- Styled Components
- React Toastify
- React Bootstrap

**Server Side**:

- Node.js
- Express.js
- JSON Web Token (JWT)
- PostgreSQL
- Sequelize
- Bcrypt

**NPM Packages**:

`Client`:

- “react-redux”: “^7.2.4”
- “react-router-dom”: “^5.2.0”
- “react-scripts”: “4.0.3”
- “react-toastify”: “^7.0.4”
- “redux”: “^4.1.0”
- “redux-logger”: “^3.0.6”
- “styled-components”: “^5.3.0”
- "bootstrap": "^5.0.2",
- "react-bootstrap": "^1.6.1",

`Server`:

- “bcrypt”: “^5.0.1”
- “cors”: “^2.8.5”
- “dotenv”: “^10.0.0”
- “express”: “^4.17.1”
- “jsonwebtoken”: “^8.5.1”
- “sequelize”: “^6.6.2”
- “sequelize-cli”: “^6.2.0”
- “pg”: “^8.6.0”
