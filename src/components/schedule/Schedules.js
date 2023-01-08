import React, { useState, useEffect } from "react";
import style from "./schedules.module.scss";
import ScheduleItem from "./ScheduleItem";

const Schedules = () => {
  const [filterItems, setFilteredItems] = useState(null);
  const handelFiltering = (event) => {
    setFilteredItems(event.target.attributes[0].value);
  };
  useEffect(() => {
    setFilteredItems("d1");
  }, []);

  return (
    <>
      <div className={style.schedules}>
        <div className={style.heading}>
          <h2>
            <div>
              Next <span>Schedules</span>
            </div>
          </h2>
        </div>
        <div className={style.days}>
          <button
            id="d1"
            onClick={handelFiltering}
            className={filterItems === "d1" ? style.active : ""}
          >
            <h3>Day 1</h3>
            <small>July 12, 2022</small>
          </button>
          <button
            id="d2"
            onClick={handelFiltering}
            className={filterItems === "d2" ? style.active : ""}
          >
            <h3>Day 2</h3>
            <small>July 14, 2022</small>
          </button>
          <button
            id="d3"
            onClick={handelFiltering}
            className={filterItems === "d3" ? style.active : ""}
          >
            <h3>Day 3</h3>
            <small>July 16, 2022</small>
          </button>
          <button
            id="d4"
            ion
            onClick={handelFiltering}
            className={filterItems === "d4" ? style.active : ""}
          >
            <h3>Day 4</h3>
            <small>July 18, 2022</small>
          </button>
        </div>
        <ScheduleItem selected={filterItems} />
      </div>
    </>
  );
};

export default Schedules;
