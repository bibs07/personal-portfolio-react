import React, { useState, useEffect } from "react";

export const Nav = () => {
  //Hamburger Animation
  const [hamburger, setHamburger] = useState(false);
  const [handle, handleShow] = useState(false);

  //   nav bar animation on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  function toggleOpen() {
    setHamburger((hamburger) => !hamburger);
  }

  return (
    <section className={`bg-nav ${handle && "setBackground"}`} id="nav">
      <nav className="">
        <div className={`hamburger`} onClick={toggleOpen}>
          <div className={`line ${hamburger ? "firstLine" : ""}`}></div>
          <div className={`line ${hamburger ? "secondLine" : ""}`}></div>
          <div className={`line ${hamburger ? "thirdLine" : ""}`}></div>
        </div>
        <ul
          className={`flex justify-around font-medium ${
            hamburger ? "open" : ""
          }`}
          id="nav-links"
        >
          <li>
            <a href="#about" onClick={toggleOpen}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleOpen}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleOpen}>
              Projects
            </a>
          </li>
          {/* <li><a href="#contact" onClick={toggleOpen}>Contact</a></li> */}
        </ul>
      </nav>
    </section>
  );
};
