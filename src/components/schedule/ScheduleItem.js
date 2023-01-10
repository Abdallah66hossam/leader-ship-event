import React from "react";

import avatar1 from "../../assets/imgs/avatar1.jpg";
import avatar2 from "../../assets/imgs/avatar2.jpg";
import avatar3 from "../../assets/imgs/avatar3.jpg";
import avatar4 from "../../assets/imgs/avatar4.jpg";
import avatar5 from "../../assets/imgs/avatar5.jpg";

import img1 from "../../assets/imgs/place1.jpg";
import img2 from "../../assets/imgs/place2.jpg";
import img3 from "../../assets/imgs/place3.jpg";
import img4 from "../../assets/imgs/place4.jpg";
import img5 from "../../assets/imgs/place5.jpg";
import img6 from "../../assets/imgs/place6.jpg";

import style from "./item.module.scss";

import { BiTime } from "react-icons/bi";
import { BsLayoutSidebar } from "react-icons/bs";

const ScheduleItem = (props) => {
  const items = [
    {
      title: "Startup Development Ideas",
      description:
        "You are free to download any HTML CSS template from TemplateMo website. You can use any template for business purposes. You are not allowed to redistribute the downloadable ZIP file on any other template website. Thank you.",
      person: "Logan Wilson",
      job: "CEO / FOUNDER",
      avatar: avatar2,
      img: img6,
      time: " 9:00 - 9:45",
      place: " Conference Hall 3",
      day: "d1",
    },
    {
      title: "Introduction to Online Businesses",
      description:
        "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora.",
      person: "Natalie",
      avatar: avatar1,
      img: img1,
      job: "EVENT PLANNER",
      time: " 10:00 - 10:45",
      place: " Conference Hall 1",
      day: "d1",
    },
    {
      title: "Dev Ops life in corporate",
      description:
        "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
      person: "Samantha",
      job: "TOP LEVEL SPEAKER",
      avatar: avatar5,
      img: img2,
      time: " 9:30 - 10:15",
      place: " Conference Hall 2",
      day: "d1",
    },
    {
      title: "Maintaining a successful business",
      description:
        "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu.",
      person: "Isabella",
      job: "EVENT MANAGER",
      avatar: avatar4,
      img: img3,
      time: " 9:00 - 9:45",
      place: " Conference Hall 1",
      day: "d2",
    },
    {
      title: "Working Life in Corporate Environment",
      description:
        "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna.",
      person: "Samantha",
      job: "TOP LEVEL SPEAKER",
      avatar: avatar5,
      img: img4,
      time: " 11:00 - 11:30",
      place: " Conference Hall 2",
      day: "d2",
    },
    {
      title: "Bootstrapping Startup",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat purus posuere tortor efficitur, sit amet dignissim libero aliquam.",
      person: "Thomas",
      job: "STARTUP COACH",
      avatar: avatar3,
      img: img5,
      time: " 8:00 - 9:00",
      place: " Conference Hall 4",
      day: "d3",
    },
    {
      title: "Building a famous company",
      description:
        "Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora torquent per conubia.",
      person: "Isabella",
      job: "EVENT MANAGER",
      avatar: avatar4,
      img: img6,
      time: " 9:00 - 9:30",
      place: " Conference Hall 1",
      day: "d4",
    },
    {
      title: "Bootstrapping Startup",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat purus posuere tortor efficitur, sit amet dignissim libero aliquam.",
      person: "Thomas",
      job: "STARTUP COACH",
      avatar: avatar3,
      img: img2,
      time: " 8:00 - 8:30",
      place: " Conference Hall 4",
      day: "d4",
    },
  ];
  const fileredItems = items.filter((item) => {
    return item.day === props.selected;
  });
  return (
    <>
      {fileredItems.map((item) => (
        <section className={style.tobic} key={Math.random()}>
          <img src={item.img} alt="palce img" className={style.place} />
          <div className={style.text}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <div className={style.details}>
              <div className={style.person}>
                <img
                  src={item.avatar}
                  alt="avatar img"
                  className={style.avatar}
                />
                <div>
                  <h5>{item.person}</h5>
                  <h6>{item.job}</h6>
                </div>
              </div>
              <span>
                <BiTime className={style.icon} />
                {item.time}
              </span>
              <span>
                <BsLayoutSidebar className={style.icon} />
                {item.place}
              </span>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ScheduleItem;
