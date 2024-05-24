## BodyPage

The `BodyPage` component displays the main content of the page. It contains a background video, a title, a subtitle, and a download button.

## Description

The `BodyPage` component is a functional React component that renders the primary content of the main page. It includes a background video, a title, a subtitle, and a button for downloading the game.

## Class Structure

- **`BodyPage` component**:
  - Main method: `BodyPage`
  - Returns: `JSX.Element` representing the structured content of the main page.

## Main Logic

**Rendering Logic (`BodyPage` component)**:
  - The component uses a `div` with the class `main-page` and an `id` of `menu` to encapsulate the main content.
  - The `video` element displays a background video on the main page.
  - The `div` with class `content` contains:
    - **Title**: An `h1` element with the class `title` to display the main title of the page.
    - **Subtitle**: An `h3` element with the class `subtitle` to display the subtitle of the page.
    - **Download Button**: A `button` element with the class `button1` to allow the user to download the game.

## External Dependencies

- **React**: The component uses React for building the user interface.
  - `import React from "react";`: This import is necessary to use React functionalities.
- **CSS**: The component uses an external CSS file for styling the main page.
  - `import "../Page/Css/BodyPage.css";`: This import is necessary to apply styles to the main page.
- **Assets**: The component uses a video asset for the background video.
  - `import trailer3 from "../assets/Trailer3.mp4";`: This import is necessary to display the background video.
