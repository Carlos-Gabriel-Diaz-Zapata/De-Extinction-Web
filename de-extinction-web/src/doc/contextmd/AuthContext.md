## AuthContext

The `AuthContext` component provides authentication-related state and functions to its children using React's context API.

## Description

The `AuthContext` component is a functional React component that manages the authentication state of the application. It provides the current user, login, and logout functionalities to its children components via the `AuthContext`.

## Class Structure

- **`AuthContext` component**:
  - Main method: `AuthContext`
  - State:
    - `user`: Manages the authenticated user's state.
  - Methods:
    - `loginHandler`: Handles user login by authenticating with the provided username and password.
    - `logoutHandler`: Handles user logout by clearing the user state and removing the user from localStorage.
    - `useEffect`: Loads the user from localStorage when the component mounts.

## Main Logic

**Rendering Logic (`AuthContext` component)**:
  - The component initializes a state `user` to manage the authenticated user.
  - The `useEffect` hook loads the user from localStorage if available when the component mounts.
  - The `loginHandler` function authenticates the user with the provided credentials and updates the state and localStorage.
  - The `logoutHandler` function clears the user state and removes the user from localStorage.
  - The component provides the `user`, `loginHandler`, and `logoutHandler` via the `AuthContext.Provider` to its children.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { createContext, useState, useEffect } from "react";`: This import is necessary to use React, `createContext`, `useState`, and `useEffect` hooks.
- **ApiService**: This service is used to handle API requests for user authentication.
  - `import ApiService from "../services/ApiService";`: This import is necessary to use the `ApiService` for login functionality.
