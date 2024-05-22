import Header from "../layout/Header";
import React from "react";
import BodyPage from "../Page/BodyPage";
import Footer from "../layout/Footer";
import HowToPlay from "../Page/HowToPlay";
import WeAreDeExtinction from "../Page/WeAreDeExtinction";
import ScrollToTopButton from "./ScrollToTopButton";
// PrincipalPage component serves as the main landing page of the application
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
