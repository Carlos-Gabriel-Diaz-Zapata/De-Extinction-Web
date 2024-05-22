import React from "react";
import trailer3 from "../assets/Trailer3.mp4";
import "../Page/Css/BodyPage.css";

// This is a functional component that represents the BodyPage
const BodyPage = () => {
  return (
    <div>
      <div className="main-page" id="menu">
        {/* This video element displays a background video on the main page */}
        <video autoPlay loop muted className="background-video">
          <source src={trailer3} type="video/mp4" />
        </video>
        {/* This div contains the content of the main page */}
        <div className="content">
          {/* This h1 element displays the title of the page */}
          <h1 className="title" data-text="De-Extinction"></h1>
          {/* This h3 element displays a subtitle of the page */}
          <h3 className="subtitle">
            ¡Corre sin límites en un mundo donde la aventura nunca termina!
          </h3>
          {/* This button element allows the user to download the game */}
          <button className="button1">Descargar</button>
        </div>
      </div>
    </div>
  );
};

// Export the BodyPage component as the default export of the module
export default BodyPage;
