## PrincipalPage

The `PrincipalPage` component serves as the main landing page of the application. It includes the header, body content, additional informational sections, footer, and a button to scroll back to the top of the page.

## Description

The `PrincipalPage` component is a functional React component that renders the primary structure of the main landing page. It incorporates various sections including a header, body content, informational sections, a footer, and a scroll-to-top button to enhance the user experience.

## Class Structure

- **`PrincipalPage` component**:
  - Main method: `PrincipalPage`
  - Returns: `JSX.Element` representing the structured layout of the landing page.

## Main Logic

**Rendering Logic (`PrincipalPage` component)**:
  - The component uses a `div` with the class `container` to encapsulate all the child components.
  - It includes the `Header` component for the top section of the page.
  - The `BodyPage` component is used to render the main body content of the page.
  - The `HowToPlay` component provides additional informational content about how to play the game.
  - The `WeAreDeExtinction` component includes more details about the organization or theme.
  - The `Footer` component is rendered at the bottom of the page.
  - The `ScrollToTopButton` component is included to allow users to easily scroll back to the top of the page.

## External Dependencies

- **React**: The component uses React for building the user interface.
  - `import React from "react";`: This import is necessary to use React functionalities.
- **Header**: This component is imported to display the header section of the page.
  - `import Header from "../layout/Header";`
- **BodyPage**: This component is imported to display the main content of the page.
  - `import BodyPage from "../Page/BodyPage";`
- **Footer**: This component is imported to display the footer section of the page.
  - `import Footer from "../layout/Footer";`
- **HowToPlay**: This component is imported to provide information on how to play the game.
  - `import HowToPlay from "../Page/HowToPlay";`
- **WeAreDeExtinction**: This component is imported to provide information about the organization or theme.
  - `import WeAreDeExtinction from "../Page/WeAreDeExtinction";`
- **ScrollToTopButton**: This component is imported to provide a button for scrolling back to the top of the page.
  - `import ScrollToTopButton from "./ScrollToTopButton";`
