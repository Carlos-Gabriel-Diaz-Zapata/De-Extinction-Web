## Footer

The `Footer` component is designed to display the footer section of the page. It contains social media icons with links, a company logo, a community join message, and a copyright message.

## Description

The `Footer` component is a functional React component that renders the footer section of the webpage. It includes social media icons that link to various social platforms, a company logo, a message inviting users to join the community, and a copyright statement.

## Class Structure

- **`Footer` component**:
  - Main method: `Footer`
  - Returns: `JSX.Element` representing the structured footer layout.

## Main Logic

**Rendering Logic (`Footer` component)**:
  - The component uses a `footer` element with the class `footer-container` to encapsulate the footer content.
  - The `div` with class `footer-content` contains:
    - **Social Media Icons**: Links to social media platforms with respective icons.
    - **Company Logo**: Displays the company logo.
    - **Community Join Message**: Displays a message inviting users to join the community.
    - **Copyright Message**: Displays a copyright statement.

## External Dependencies

- **React**: The component uses React for building the user interface.
  - `import React from 'react';`: This import is necessary to use React functionalities.
- **CSS**: The component uses an external CSS file for styling the footer.
  - `import '../layout/Css/Footer.css';`: This import is necessary to apply styles to the footer.
- **Assets**: The component uses various image assets for the company logo and social media icons.
  - `import logo from '../assets/LogoDino.png';`
  - `import logoX from '../assets/icons8-twitter-50.png';`
  - `import insta from '../assets/icons8-instagram-50.png';`
  - `import youtube from '../assets/icons8-youtube-play-50.png';`
  - `import facebook from '../assets/icons8-facebook-nuevo-50.png';`
  - `import tiktok from '../assets/icons8-tik-tok-50.png';`
  - `import discord from '../assets/icons8-logotipo-de-la-discordia-50.png';`
