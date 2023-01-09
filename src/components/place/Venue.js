import React from "react";
import style from "./venue.module.scss";
import { TiLocation } from "react-icons/ti";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Venue = () => {
  return (
    <div className={style.venueSec} id="Venue">
      <div className={style.heading}>
        <h2>
          <div>
            Here you go <span>Venue</span>
          </div>
        </h2>
      </div>
      <div className={style.venue}>
        <iframe
          className={style.map}
          title="map"
          width="580"
          height="380"
          src="https://maps.google.com/maps?q=cairo&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
        ></iframe>
        <div className={style.cart}>
          <div className={style.head}>
            <h3>Times Square</h3>
          </div>
          <ul>
            <h4>
              <TiLocation className={style.icon} />
              102 South. 7th Street, New York, NY 10036, USA
            </h4>

            <a href="mailto:8abdallahh88@gmail.com">
              <MdOutlineMail className={style.icon} />
              hi@company.com
            </a>

            <a href="tel:+20100200340">
              <MdOutlinePhone className={style.icon} />
              010-020-0340
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Venue;
