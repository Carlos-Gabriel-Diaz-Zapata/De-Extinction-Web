## Header

The `Header` component displays the top navigation bar. It contains navigation buttons, a logo, and options for user interactions based on authentication status.

## Description

The `Header` component is a functional React component that renders the navigation bar at the top of the page. It includes buttons to navigate to different sections of the page, a logo, and user-specific options such as profile access, scores, admin access (if applicable), and login/logout functionality.

## Class Structure

- **`Header` component**:
  - Main method: `Header`
  - Methods:
    - `handleProfile`: Navigates to the profile page.
    - `handleScores`: Navigates to the scores page.
    - `handleAdmin`: Navigates to the admin page.
    - `handleLoginButtonClick`: Navigates to the login page.
    - `handleLogout`: Logs out the user and navigates to the home page.
    - `scrollToSection`: Smoothly scrolls to a section of the page.
  - Context:
    - `AuthContext`: Provides the current user's authentication status and functions like `logout`.

## Main Logic

**Rendering Logic (`Header` component)**:
  - The component accesses the `user` and `logout` function from the `AuthContext`.
  - The component uses a `header` element with the class `header-container` to encapsulate the header content.
  - The `div` with class `header-left` contains buttons to scroll to specific sections of the page.
  - The `div` with class `header-center` contains buttons for the profile, scores, and admin page (if the user is an admin), which are only visible if the user is logged in.
  - The `div` with class `header-right` contains the login/logout button based on the user's authentication status and the company logo.

## External Dependencies

- **React**: The component uses React for building the user interface.
  - `import React, { useContext } from "react";`: This import is necessary to use React and the `useContext` hook.
- **react-router-dom**: The component uses this library for navigation.
  - `import { useNavigate } from "react-router-dom";`: This import is necessary to handle navigation.
- **AuthContext**: This context provides information about the current user's authentication status and functions.
  - `import { AuthContext } from "../context/AuthContext";`: This import is necessary to access the authentication context.
- **CSS**: The component uses an external CSS file for styling the header.
  - `import "../layout/Css/Header.css";`: This import is necessary to apply styles to the header.
- **Assets**: The component uses an image asset for the company logo.
  - `import logo from "../assets/LogoDino.png";`: This import is necessary to display the company logo.
