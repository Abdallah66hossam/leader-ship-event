import React from "react";
import style from "./speakers.module.scss";
import img1 from "../../assets/imgs/avatar1.jpg";
import img2 from "../../assets/imgs/avatar2.jpg";
import img3 from "../../assets/imgs/avatar3.jpg";
import img4 from "../../assets/imgs/avatar4.jpg";
import img5 from "../../assets/imgs/avatar5.jpg";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Speakers = () => {
  return (
    <div className={style.speakers}>
      <div className={style.heading}>
        <h2>
          <div>
            Our <span>Speakers</span>
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore
        </p>
      </div>
      <div className={style.human1} style={{ backgroundImage: `url(${img2})` }}>
        <div className={style.text}>
          <div className={style.title}>
            <h3>Logan Wilson</h3>
            <h4>CEO / FOUNDER</h4>
          </div>
          <div className={style.links}>
            <div className={style.icon}>
              <BsFacebook />
            </div>
            <div className={style.icon}>
              <BsInstagram />
            </div>
            <div className={style.icon}>
              <BsWhatsapp />
            </div>
          </div>
        </div>
      </div>
      <div className={style.people}>
        <div
          className={style.human}
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className={style.text}>
            <div className={style.title}>
              <h3>Natalie</h3>
              <h4>Event Planner</h4>
            </div>
            <div className={style.links}>
              <div className={style.icon}>
                <BsFacebook />
              </div>
              <div className={style.icon}>
                <BsInstagram />
              </div>
              <div className={style.icon}>
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.human}
          style={{ backgroundImage: `url(${img3})` }}
        >
          <div className={style.text}>
            <div className={style.title}>
              <h3>Thomas</h3>
              <h4>STARTUP COACH</h4>
            </div>
            <div className={style.links}>
              <div className={style.icon}>
                <BsFacebook />
              </div>
              <div className={style.icon}>
                <BsInstagram />
              </div>
              <div className={style.icon}>
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.human}
          style={{ backgroundImage: `url(${img4})` }}
        >
          <div className={style.text}>
            <div className={style.title}>
              <h3>Isabella</h3>
              <h4>Event Manager</h4>
            </div>
            <div className={style.links}>
              <div className={style.icon}>
                <BsFacebook />
              </div>
              <div className={style.icon}>
                <BsInstagram />
              </div>
              <div className={style.icon}>
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
        <div
          className={style.human}
          style={{ backgroundImage: `url(${img5})` }}
        >
          <div className={style.text}>
            <div className={style.title}>
              <h3>Samantha</h3>
              <h4>Top Level Speaker</h4>
            </div>
            <div className={style.links}>
              <div className={style.icon}>
                <BsFacebook />
              </div>
              <div className={style.icon}>
                <BsInstagram />
              </div>
              <div className={style.icon}>
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
