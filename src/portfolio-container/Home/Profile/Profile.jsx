import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
import { Typewriter } from "react-simple-typewriter";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/abdullah-al-firoz/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://github.com/abdullah-al-feroz">
                <i className="fa fa-github" />
              </a>
              <a href="">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://x.com/Engineer_Feroz">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Abdullah-Al Firoz</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {/* ✅ Replaced Typical with Typewriter */}
                <Typewriter
                  words={[
                    "Full Stack Developer!💻",
                    ".NET Developer",
                    "Cross Platform Dev📱",
                    "React.js / Next.js Developer📱",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Firozcv.pdf" download="Abdullah-Al Firoz Resume.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;