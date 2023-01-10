/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import style from "./banner.module.scss";
import { AiFillYoutube } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import video from "../../assets/videos/video.mp4";
import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import img3 from "../../assets/imgs/img3.jpg";
import LightSpeed from "react-reveal/LightSpeed";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <section id="Home">
      <video autoPlay loop muted>
        eslint-disable-next-line react/jsx-no-comment-textnodes
        <source src={video} type="video/mp4"></source>
        your browser doesn't support video tag
      </video>
      <div className={style.banner}>
        <main>
          <LightSpeed left cascade>
            <h1>
              <div>
                <span>leadership</span> comfference
              </div>
              2022
            </h1>
          </LightSpeed>
          <div className={style.time}>
            <span>July 12 to 18, 2022</span>
            <span>Times Square, NY</span>
          </div>
          <BsArrowDown className={style.arrow} />
          <Fade bottom cascade>
            <section className={style.cards}>
              <article>
                <div
                  className={style.conffernce}
                  style={{ backgroundImage: `url(${img1})` }}
                >
                  <h2>2019 highlights</h2>

                  <AiFillYoutube className={style.youtube} />
                </div>
              </article>
              <article>
                <div
                  className={style.conffernce}
                  style={{ backgroundImage: `url(${img2})` }}
                >
                  <h2>2020 highlights</h2>

                  <AiFillYoutube className={style.youtube} />
                </div>
              </article>
              <article>
                <div
                  className={style.conffernce}
                  style={{ backgroundImage: `url(${img3})` }}
                >
                  <h2>2021 highlights</h2>

                  <AiFillYoutube className={style.youtube} />
                </div>
              </article>
            </section>
          </Fade>
        </main>
      </div>
    </section>
  );
};

export default Banner;
