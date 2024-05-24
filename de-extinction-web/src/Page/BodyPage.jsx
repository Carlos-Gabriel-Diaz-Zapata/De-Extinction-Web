import React, { useEffect, useState } from "react";
import trailer3 from "../assets/Trailer3.mp4";
import "../Page/Css/BodyPage.css";

/**
 * BodyPage component to display the main content of the page.
 * Contains a background video, a title, a subtitle, and a download button.
 * 
 * @returns {JSX.Element} The rendered BodyPage component.
 */
const BodyPage = () => {
  const [downloadLink, setDownloadLink] = useState("");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.indexOf("Windows") !== -1) {
        return "windows";
      } else if (userAgent.indexOf("Linux") !== -1) {
        return "linux";
      } else {
        return "other";
      }
    };

    // Set the appropriate download link based on the detected OS
    const os = detectOS();
    if (os === "windows") {
      setDownloadLink("/assets/De-Extinction-Windows.zip");
    } else if (os === "linux") {
      setDownloadLink("/assets/De-Extinction-Linux.zip");
    }
  }, []);

  return (
    <div>
      <div className="main-page" id="menu">
        {/* Video element to display a background video on the main page */}
        <video autoPlay loop muted className="background-video">
          <source src={trailer3} type="video/mp4" />
        </video>
        {/* Div containing the content of the main page */}
        <div className="content">
          {/* h1 element to display the title of the page */}
          <h1 className="title" data-text="De-Extinction"></h1>
          {/* h3 element to display a subtitle of the page */}
          <h3 className="subtitle">
            ¡Corre sin límites en un mundo donde la aventura nunca termina!
          </h3>
          {/* Button element to allow the user to download the game */}
          <a href={downloadLink} className="button1" download>Descargar</a>
        </div>
      </div>
    </div>
  );
};

export default BodyPage;