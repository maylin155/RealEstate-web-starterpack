import React from "react";
import './Header.css';


const Header = () => {
  const handleContactClick = () => {
    window.location.href = "/contact";
  };
  
  return (
    <>
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./logo.png" alt="logo" width={180} />

          <div className="h-menu">
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Get Started</a>
            <button className="button" onClick={handleContactClick}>
              <a href="/">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
