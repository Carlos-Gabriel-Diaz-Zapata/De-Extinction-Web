## HowToPlay

The `HowToPlay` component displays the instructions on how to play the game. It contains cards with images, titles, and descriptions explaining the game objectives, mechanics, and tips.

## Description

The `HowToPlay` component is a functional React component that provides a visual guide on how to play the game. It includes a series of cards that detail the game's objectives, mechanics, and tips for players.

## Class Structure

- **`HowToPlay` component**:
  - Main method: `HowToPlay`
  - Data:
    - `cards`: An array of objects containing image, title, and description for each card.

## Main Logic

**Rendering Logic (`HowToPlay` component)**:
  - The component initializes an array `cards` that contains objects with the image, title, and description for each card.
  - The component uses a `div` with the class `how-to-play` and an `id` of `como-jugar` to encapsulate the content.
  - The `h2` element with the class `title3` displays the main title "¿Cómo se juega?".
  - The `div` with class `cards-container` contains the card elements.
  - The component maps over the `cards` array to render each card, displaying the image, title, and description.

## External Dependencies

- **React**: The component uses React for building the user interface.
  - `import React from 'react';`: This import is necessary to use React functionalities.
- **CSS**: The component uses an external CSS file for styling the how-to-play section.
  - `import '../Page/Css/HowToPlay.css';`: This import is necessary to apply styles to the how-to-play section.
- **Assets**: The component uses image assets for the cards.
  - `import Consejo from '../assets/Consejos.png';`
  - `import Mecanicas from '../assets/Mecanica.png';`
  - `import Objetivo from '../assets/Objetivo.png';`: These imports are necessary to display the images on the cards.
