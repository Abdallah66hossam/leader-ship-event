import React from "react";
import style from "./about.scss.module.scss";
import avatar1 from "../../assets/imgs/avatar1.jpg";
import avatar2 from "../../assets/imgs/avatar2.jpg";
import avatar3 from "../../assets/imgs/avatar3.jpg";
import avatar4 from "../../assets/imgs/avatar4.jpg";

const About = () => {
  return (
    <div className={style.about} id="About">
      <div className={style.story}>
        <h2>
          <div>
            our <span>story</span>
          </div>
          <div>The importance of Leadership Conference in 2022</div>
        </h2>
        <p>
          Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your
          website. Thank you for choosing TemplateMo website where you can
          instantly download free CSS templates at no cost.
        </p>
        <div className={style.btns}>
          <button>Meet Speakers</button>
          <button>Check our Schedule</button>
        </div>
      </div>
      <div className={style.people}>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore
        </h2>
        <div className={style.avatar}>
          <span>
            <img src={avatar1} alt="avatar1" />
            <img src={avatar2} alt="avatar2" />
            <img src={avatar3} alt="avatar3" />
            <img src={avatar4} alt="avatar4" />
          </span>
          <p>120+ People are attending with us</p>
        </div>
      </div>
    </div>
  );
};

export default About;
