## RegisterPage

The `RegisterPage` component allows users to create a new account by providing an email, username, and password.

## Description

The `RegisterPage` component is a functional React component that provides a registration form for users to create a new account. It includes fields for the user's email, username, and password, and handles form submission to register the user through an API.

## Class Structure

- **`RegisterPage` component**:
  - Main method: `RegisterPage`
  - State:
    - `email`: Stores the email input.
    - `name`: Stores the username input.
    - `password`: Stores the password input.
  - Methods:
    - `handleSubmit`: Handles the form submission to register a new user.

## Main Logic

**Rendering Logic (`RegisterPage` component)**:
  - The component initializes states `email`, `name`, and `password` to manage the form inputs.
  - The `handleSubmit` function handles form submission, calls the API service to create a new user, shows a success alert, and navigates to the login page upon success or shows error notifications.
  - The component renders the background image, the registration form, and a toast container for notifications.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState } from "react";`: This import is necessary to use React and the `useState` hook.
- **react-router-dom**: The component uses this library for navigation and linking.
  - `import { Link, useNavigate } from "react-router-dom";`: This import is necessary to create links and handle navigation.
- **ApiService**: This service handles API requests for user registration.
  - `import ApiService from "../services/ApiService";`: This import is necessary to use the `ApiService` for user registration.
- **React Toastify**: The component uses this library to show notifications.
  - `import { ToastContainer, toast } from "react-toastify";`: This import is necessary to show toast notifications.
  - `import "react-toastify/dist/ReactToastify.css";`: This import is necessary to apply styles to the toast notifications.
- **CSS**: The component uses an external CSS file for styling the registration page.
  - `import "../Page/Css/RegisterPage.css";`: This import is necessary to apply styles to the registration page.
- **Assets**: The component uses an image asset for the background image.
  - `import fondoDino from "../assets/fondoDino.jpg";`: This import is necessary to display the background image.
