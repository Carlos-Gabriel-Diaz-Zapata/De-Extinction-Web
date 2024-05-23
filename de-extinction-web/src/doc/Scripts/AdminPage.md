## AdminPage

The `AdminPage` component allows managing users, including searching, displaying, editing, and deleting users.

## Description

The `AdminPage` component is a functional React component that provides an interface for admin users to manage other users. It includes features for searching users, displaying a list of users, editing user details, and deleting users.

## Class Structure

- **`AdminPage` component**:
  - Main method: `AdminPage`
  - State:
    - `searchTerm`: Stores the search term for filtering users.
    - `users`: Stores the list of users.
  - Methods:
    - `fetchUsers`: Fetches all users from the API and updates the state.
    - `handleSearchChange`: Updates the search term state when the search input changes.
    - `handleDelete`: Confirms deletion, deletes a user via the API, updates the state, and shows a notification.
  - Computed Properties:
    - `filteredUsers`: Filters users based on the search term.

## Main Logic

**Rendering Logic (`AdminPage` component)**:
  - The component initializes states `searchTerm` and `users` to manage the search term and user list, respectively.
  - The `useEffect` hook fetches all users from the API when the component mounts.
  - The `handleSearchChange` function updates the search term state based on the user's input.
  - The `handleDelete` function deletes a user via the API, updates the state to remove the deleted user, and shows a success or error notification.
  - The `filteredUsers` computed property filters the users based on the search term.
  - The component renders the header, a search input, and a table of filtered users, with options to edit or delete each user.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState, useEffect } from "react";`: This import is necessary to use React, `useState`, and `useEffect` hooks.
- **react-router-dom**: The component uses this library for navigation and linking.
  - `import { Link } from "react-router-dom";`: This import is necessary to create links for navigation.
- **ApiService**: This service handles API requests for fetching, editing, and deleting users.
  - `import ApiService from "../services/ApiService";`: This import is necessary to use the `ApiService` for user management.
- **React Toastify**: The component uses this library to show notifications.
  - `import { ToastContainer, toast } from "react-toastify";`: This import is necessary to show toast notifications.
  - `import "react-toastify/dist/ReactToastify.css";`: This import is necessary to apply styles to the toast notifications.
- **CSS**: The component uses an external CSS file for styling the admin page.
  - `import "../Page/Css/AdminPage.css";`: This import is necessary to apply styles to the admin page.
