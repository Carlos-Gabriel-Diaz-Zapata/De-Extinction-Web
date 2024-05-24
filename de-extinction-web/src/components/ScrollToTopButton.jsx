import React, { useState, useEffect } from "react";
import "../components/css/ScrollToTopButton.css";

/**
 * ScrollToTopButton component.
 * Provides a button that, when clicked, scrolls the page to the top.
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage button visibility

  /**
   * Toggles the button visibility based on the scroll position.
   * Shows the button when the page is scrolled more than 300px.
   */
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); // Show button when scrolled more than 300px
    } else {
      setIsVisible(false); // Hide button when scrolled less than 300px
    }
  };

  /**
   * Scrolls the page to the top with a smooth scroll effect.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /**
   * Sets up the scroll event listener to toggle button visibility.
   * Cleans up the event listener on component unmount.
   */
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
