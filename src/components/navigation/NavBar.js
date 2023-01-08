import React, { useState, useEffect } from "react";
import style from "./nav.module.scss";
import { BiBullseye } from "react-icons/bi";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const handelScrollNav = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScrollNav);
    return () => window.removeEventListener("scroll", handelScrollNav);
  }, []);
  // nav bars
  // <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  // </button>
  return (
    <nav className={scroll ? style.back : ""}>
      <a href="home" className={style.logo}>
        <BiBullseye className={style.bullseye} />
        <span className={style.brand}>
          <div>Leadership</div> Event
        </span>
      </a>

      <ul className={style.links}>
        <li>
          <a href="#Home">Home</a>
        </li>

        <li>
          <a href="#About">About</a>
        </li>

        <li>
          <a href="#Speakers">Speakers</a>
        </li>

        <li>
          <a href="#Schedules">Schedules</a>
        </li>

        <li>
          <a href="#Pricing">Pricing</a>
        </li>

        <li>
          <a href="#Venue">Venue</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>

        <li>
          <button>
            <a href="#Buy-Tickets">Buy Tickets</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
