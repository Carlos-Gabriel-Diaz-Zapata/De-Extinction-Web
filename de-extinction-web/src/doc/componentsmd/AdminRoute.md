## AdminRoute

The `AdminRoute` component is designed to protect admin-specific routes by verifying if the user is logged in and has admin privileges.

## Description

The `AdminRoute` component leverages React's context and routing features to ensure that only authenticated admin users can access certain routes. If a user is not logged in or is not an admin, they are redirected to the home page.

## Class Structure

- **`AdminRoute` component**:
  - Main method: `AdminRoute`
  - Props:
    - `children`: The child components to render if the user is an admin.
  - Context:
    - `AuthContext`: Provides the current user's authentication status and details.

## Main Logic

**Rendering Logic (`AdminRoute` component)**:
  - The component checks if a user is logged in using the `AuthContext`.
  - If no user is logged in, it redirects to the home page using `Navigate`.
  - If a logged-in user is not an admin, it redirects to the home page.
  - If the user is an admin, it renders the child components.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useContext } from "react";`: This import is necessary to use React and its `useContext` hook.
- **react-router-dom**: The component uses this library for routing and navigation.
  - `import { Navigate } from "react-router-dom";`: This import is necessary to handle redirection.
- **AuthContext**: This context provides information about the current user's authentication status and details.
  - `import { AuthContext } from "../context/AuthContext";`: This import is necessary to access the authentication context.
