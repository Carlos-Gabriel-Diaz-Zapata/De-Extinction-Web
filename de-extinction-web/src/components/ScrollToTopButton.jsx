import React, { useState, useEffect } from "react";
import "../components/css/ScrollToTopButton.css";

// ScrollToTopButton component to provide a button that scrolls the page to the top
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage button visibility

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true); // Show button when scrolled more than 300px
    } else {
      setIsVisible(false); // Hide button when scrolled less than 300px
    }
  };

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Set up event listener for scroll event to toggle button visibility
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
