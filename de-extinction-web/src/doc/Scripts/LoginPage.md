## LoginPage

The `LoginPage` component allows users to log in. It displays a form where users can enter their username and password to log in.

## Description

The `LoginPage` component is a functional React component that provides a login form for users. It includes fields for the username and password and handles form submission to authenticate the user through the `AuthContext`.

## Class Structure

- **`LoginPage` component**:
  - Main method: `LoginPage`
  - State:
    - `username`: Stores the username.
    - `password`: Stores the password.
  - Methods:
    - `handleSubmit`: Handles the submission of the login form.

## Main Logic

**Rendering Logic (`LoginPage` component)**:
  - The component initializes states `username` and `password` to manage the form inputs.
  - The `handleSubmit` function handles form submission, calls the `login` function from the `AuthContext` to authenticate the user, and navigates to the home page upon success or shows error notifications.
  - The component renders the background image, the login form, and a toast container for notifications.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState, useContext } from "react";`: This import is necessary to use React, `useState`, and `useContext` hooks.
- **react-router-dom**: The component uses this library for navigation and linking.
  - `import { Link, useNavigate } from "react-router-dom";`: This import is necessary to create links and handle navigation.
- **AuthContext**: This context provides the `login` function for user authentication.
  - `import { AuthContext } from "../context/AuthContext";`: This import is necessary to access the authentication context.
- **React Toastify**: The component uses this library to show notifications.
  - `import { ToastContainer, toast } from "react-toastify";`: This import is necessary to show toast notifications.
  - `import "react-toastify/dist/ReactToastify.css";`: This import is necessary to apply styles to the toast notifications.
- **CSS**: The component uses an external CSS file for styling the login page.
  - `import "../Page/Css/LoginPage.css";`: This import is necessary to apply styles to the login page.
- **Assets**: The component uses an image asset for the background image.
  - `import fondoDino from "../assets/fondoDino.jpg";`: This import is necessary to display the background image.
