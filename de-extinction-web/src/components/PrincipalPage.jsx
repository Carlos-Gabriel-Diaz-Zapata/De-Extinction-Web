import Header from "../layout/Header";
import React from "react";
import BodyPage from "../Page/BodyPage";
import Footer from "../layout/Footer";
import HowToPlay from "../Page/HowToPlay";
import WeAreDeExtinction from "../Page/WeAreDeExtinction";
import ScrollToTopButton from "./ScrollToTopButton";

/**
 * PrincipalPage component serves as the main landing page of the application.
 * It includes the header, body content, additional informational sections, 
 * footer, and a button to scroll back to the top of the page.
 * 
 * @returns {JSX.Element} The rendered PrincipalPage component.
 */
const PrincipalPage = () => {
  return (
    <div className="container">
      <Header />
      <BodyPage />
      <HowToPlay />
      <WeAreDeExtinction />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default PrincipalPage;
