## CreateUserPage

The `CreateUserPage` component allows an admin to create a new user by filling out a form and submitting it.

## Description

The `CreateUserPage` component is a functional React component that provides a form for admin users to create new users. It includes fields for the user's name, email, password, and admin status, and handles form submission to create the user through an API.

## Class Structure

- **`CreateUserPage` component**:
  - Main method: `CreateUserPage`
  - State:
    - `name`: Stores the user's name.
    - `email`: Stores the user's email.
    - `password`: Stores the user's password.
    - `isAdmin`: Stores the user's admin status.
  - Methods:
    - `handleSubmit`: Handles the form submission to create a new user.

## Main Logic

**Rendering Logic (`CreateUserPage` component)**:
  - The component initializes states `name`, `email`, `password`, and `isAdmin` to manage the form inputs.
  - The `handleSubmit` function handles form submission, calls the API service to create a new user, and navigates to the admin page upon success or shows error notifications.
  - The component renders the header, a form to create a new user, and a toast container for notifications.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState } from 'react';`: This import is necessary to use React and the `useState` hook.
- **react-router-dom**: The component uses this library for navigation.
  - `import { useNavigate } from 'react-router-dom';`: This import is necessary to handle navigation.
- **ApiService**: This service handles API requests for creating users.
  - `import ApiService from '../services/ApiService';`: This import is necessary to use the `ApiService` for user creation.
- **React Toastify**: The component uses this library to show notifications.
  - `import { ToastContainer, toast } from 'react-toastify';`: This import is necessary to show toast notifications.
  - `import 'react-toastify/dist/ReactToastify.css';`: This import is necessary to apply styles to the toast notifications.
- **CSS**: The component uses an external CSS file for styling the create user page.
  - `import '../Page/Css/CreateUserPage.css';`: This import is necessary to apply styles to the create user page.
