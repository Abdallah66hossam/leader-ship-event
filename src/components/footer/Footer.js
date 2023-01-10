import React from "react";
import style from "./footer.module.scss";
import { BiBullseye } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className={style.contact}>
        <a href="home" className={style.logo}>
          <BiBullseye className={style.bullseye} />
          <span className={style.brand}>
            <div>Leadership</div> Event
          </span>
        </a>
        <div className={style.social}>
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
          <AiFillYoutube style={{ fontSize: "2.6rem" }} />
        </div>
      </div>
      <ul className={style.links}>
        <li>
          <a href="#1">Our Story</a>
        </li>
        <li>
          <a href="#2">Code od Condut</a>
        </li>
        <li>
          <a href="#3">Privacy and Terms</a>
        </li>
        <li>
          <a href="#4">Contact</a>
        </li>
      </ul>
      <p>Developed By: Abdallah Hossam</p>
    </footer>
  );
};

export default Footer;
