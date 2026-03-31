import React, { useEffect, useState } from "react";

import imgBack from "../../../src/images/im4.jpg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import { toast } from "react-toastify";
import "./ContactMe.css";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../Footer/Footer";
import { Typewriter } from "react-simple-typewriter";

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  // handle inputs
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setBanner("All fields are required!");
      toast.error("All fields are required!");
      return;
    }

    setBool(true);

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (res.ok) {
        setBanner(result.msg);
        toast.success(result.msg);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setBanner(result.msg);
        toast.error(result.msg);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setBool(false);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"Let's Keep In Touch"}
        title={props.screenName ? props.screenName : ""}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {/* ✅ Replaced Typical with Typewriter */}
            <Typewriter
              words={["Get in Touch 🤝"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <a href="https://www.linkedin.com/in/abdullah-al-firoz/">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href="https://github.com/abdullah-al-feroz">
            <i className="fa fa-github" />
          </a>
          <a href="https://stackoverflow.com/users/17848207/abdullah-al-firoz">
            <i className="fa fa-stack-overflow" />
          </a>
          <a href="https://x.com/Engineer_Feroz">
            <i className="fa fa-twitter" />
          </a>
        </div>

        <div className="back-form">
          <div className="img-back">
            <h4>Send your message</h4>
            <img src={imgBack} alt="" />
          </div>
          <form onSubmit={formSubmit}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              name="message"
            />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="load1" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;