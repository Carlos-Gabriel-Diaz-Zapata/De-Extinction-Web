## ScrollToTopButton

The `ScrollToTopButton` component provides a button that, when clicked, scrolls the page to the top.

## Description

The `ScrollToTopButton` component is a functional React component that renders a button to scroll the page back to the top. The button becomes visible when the user scrolls down more than 300 pixels.

## Class Structure

- **`ScrollToTopButton` component**:
  - Main method: `ScrollToTopButton`
  - State:
    - `isVisible`: A boolean state to manage the button's visibility.
  - Methods:
    - `toggleVisibility`: Toggles the button visibility based on the scroll position.
    - `scrollToTop`: Scrolls the page to the top with a smooth scroll effect.
    - `useEffect`: Sets up and cleans up the scroll event listener.

## Main Logic

**Rendering Logic (`ScrollToTopButton` component)**:
  - The component initializes a state `isVisible` to manage the visibility of the button.
  - The `toggleVisibility` function checks the scroll position and updates the `isVisible` state.
  - The `scrollToTop` function scrolls the page to the top smoothly when the button is clicked.
  - The `useEffect` hook sets up an event listener for the `scroll` event to call `toggleVisibility`. It cleans up the event listener when the component unmounts.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState, useEffect } from "react";`: This import is necessary to use React, `useState`, and `useEffect` hooks.
- **CSS**: The component uses an external CSS file for styling the button.
  - `import "../components/css/ScrollToTopButton.css";`: This import is necessary to apply styles to the button.
