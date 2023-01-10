import React, { useState, useEffect, useRef } from "react";
import style from "./nav.module.scss";
import { BiBullseye } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [nav, setNav] = useState(false);
  const link = useRef();
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
      <a href="home" className={style.logo} ref={link}>
        <BiBullseye className={style.bullseye} />
        <span className={style.brand}>
          <div>Leadership</div> Event
        </span>
      </a>

      <ul className={!nav ? style.links : `${style.opacity} ${style.links}`}>
        <li>
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="Speakers"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            Speakers
          </Link>
        </li>

        <li>
          <Link
            spy={true}
            to="Schedules"
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            Schedules
          </Link>
        </li>

        <li>
          <Link
            to="Pricing"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
            className={style.active}
            onClick={() => setNav(!nav)}
          >
            Pricing
          </Link>
        </li>

        <li>
          <Link
            to="Venue"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            Venue
          </Link>
        </li>

        <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            delay={0}
            onClick={() => setNav(!nav)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <button className={style.tickets}>
        <a href="#Buy-Tickets">Buy Tickets</a>
      </button>
    </nav>
  );
};

export default NavBar;
