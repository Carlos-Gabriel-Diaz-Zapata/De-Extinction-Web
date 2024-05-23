## Scores

The `Scores` component displays the top scores. It fetches the top scores from the API and displays them with corresponding trophy images.

## Description

The `Scores` component is a functional React component that retrieves and displays the top player scores. It includes logic to show different trophy images for the top three players and random images for other players.

## Class Structure

- **`Scores` component**:
  - Main method: `Scores`
  - State:
    - `scores`: Stores the list of top scores.
  - Methods:
    - `fetchScores`: Fetches the top scores from the API and updates the state.
    - `getTrophyImage`: Returns the appropriate trophy image based on the player's rank.
    - `getRandomImage`: Returns a random image for players ranked beyond the top three.

## Main Logic

**Rendering Logic (`Scores` component)**:
  - The component initializes a state `scores` to store the fetched scores.
  - The `useEffect` hook fetches the top scores from the API when the component mounts and updates the state.
  - The `getTrophyImage` function returns the appropriate trophy image for the top three players.
  - The `getRandomImage` function returns a random image for players ranked beyond the top three.
  - The component renders the header, a title, and a table of scores with corresponding images.

## External Dependencies

- **React**: The component uses React for building the user interface and managing state.
  - `import React, { useState, useEffect } from "react";`: This import is necessary to use React, `useState`, and `useEffect` hooks.
- **ApiService**: This service handles API requests for fetching top scores.
  - `import ApiService from "../services/ApiService";`: This import is necessary to use the `ApiService` for fetching scores.
- **CSS**: The component uses an external CSS file for styling the scores page.
  - `import "../Page/Css/Scores.css";`: This import is necessary to apply styles to the scores page.
- **Assets**: The component uses various image assets for trophies and player images.
  - `import goldTrophy from "../assets/Copa1.png";`
  - `import silverTrophy from "../assets/Copa2.png";`
  - `import bronzeTrophy from "../assets/Copa3.png";`
  - `import image1 from "../assets/Dino1G.png";`
  - `import image2 from "../assets/Dino2G.png";`
  - `import image3 from "../assets/Dino3G.png";`
  - `import image4 from "../assets/Dino4G.png";`: These imports are necessary to display the trophy and player images.
