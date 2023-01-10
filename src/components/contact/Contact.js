import React, { useState } from "react";
import style from "./contact.module.scss";

const Contact = () => {
  // get user inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // handeling errors
  const [nameIsValid, setNameisValid] = useState(false);
  const [emailIsValid, setEmailisValid] = useState(false);
  const [subjectIsValid, setSubjectisValid] = useState(false);
  const [meassageIsValid, setMessageisValid] = useState(false);

  const [err, setErr] = useState(false);

  const handelSubmition = (event) => {
    event.preventDefault();
    if (name.length >= 8) {
      setNameisValid(true);
    } else {
      setNameisValid(false);
    }
    if (email.includes("@")) {
      setEmailisValid(true);
    } else {
      setEmailisValid(false);
    }
    if (subject.length !== 0) {
      setSubjectisValid(true);
    } else {
      setSubjectisValid(false);
    }
    if (message.length !== 0) {
      setMessageisValid(true);
    } else {
      setMessageisValid(false);
    }
    if (nameIsValid && emailIsValid && subjectIsValid && meassageIsValid) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErr(false);
    } else {
      setErr(true);
    }
  };
  return (
    <div className={style.background} id="Contact">
      <div className={style.contact}>
        <h4>Pleasse Say Hi!</h4>
        <form onSubmit={handelSubmition}>
          <section className={style.form}>
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={!nameIsValid && err ? style.invalid : ""}
              />
              <small className={!nameIsValid & err ? style.opacity1 : ""}>
                name must contains 8 character.
              </small>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={!emailIsValid && err ? style.invalid : ""}
              />
              <small className={!emailIsValid && err ? style.opacity1 : ""}>
                write a valid email.
              </small>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={!subjectIsValid & err ? style.invalid : ""}
              />
              <small className={!subjectIsValid && err ? style.opacity1 : ""}>
                Please write a subject.
              </small>
            </div>
          </section>
          <textarea
            name="Message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={!meassageIsValid & err ? style.invalid : ""}
          ></textarea>
          <small className={!meassageIsValid && err ? style.opacity1 : ""}>
            Please write a message.
          </small>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
