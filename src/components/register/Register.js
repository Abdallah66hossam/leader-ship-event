import React from "react";
import style from "./register.module.scss";

const Register = () => {
  return (
    <div className={style.register}>
      <div className={style.heading}>
        <h2>
          <div>
            Become an <span>event speaker?</span>
          </div>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore
        </p>
      </div>
      <button>Register Now!</button>
    </div>
  );
};

export default Register;
