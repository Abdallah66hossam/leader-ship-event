import React, { useState, useEffect } from "react";
import style from "./nav.module.scss";
import { BiBullseye } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);
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

  return (
    <nav className={scroll ? style.back : ""}>
      <HiBars3
        className={!nav ? style.bars : `${style.opacity} ${style.bars}`}
        onClick={() => setNav(!nav)}
      />
      <AiOutlineCloseCircle
        className={nav ? style.close : `${style.opacity} ${style.close}`}
        onClick={() => setNav(!nav)}
      />
      <a href="home" className={style.logo}>
        <BiBullseye className={style.bullseye} />
        <span className={style.brand}>
          <div>Leadership</div> Event
        </span>
      </a>

      <ul className={!nav ? style.links : `${style.opacity} ${style.links}`}>
        <li>
          <a href="#Home" onClick={() => setNav(!nav)}>
            Home
          </a>
        </li>

        <li>
          <a href="#About" onClick={() => setNav(!nav)}>
            About
          </a>
        </li>

        <li>
          <a href="#Speakers" onClick={() => setNav(!nav)}>
            Speakers
          </a>
        </li>

        <li>
          <a href="#Schedules" onClick={() => setNav(!nav)}>
            Schedules
          </a>
        </li>

        <li>
          <a href="#Pricing" onClick={() => setNav(!nav)}>
            Pricing
          </a>
        </li>

        <li>
          <a href="#Venue" onClick={() => setNav(!nav)}>
            Venue
          </a>
        </li>

        <li>
          <a href="#Contact" onClick={() => setNav(!nav)}>
            Contact
          </a>
        </li>
      </ul>

      <button className={style.tickets}>
        <a href="#Buy-Tickets">Buy Tickets</a>
      </button>
    </nav>
  );
};

export default NavBar;
