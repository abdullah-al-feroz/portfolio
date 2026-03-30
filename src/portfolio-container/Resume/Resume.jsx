import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
      return;

    Animations.animations.fadeInScreen(props.id);
  };
  
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="heading-link"
            >
              {props.heading ? props.heading : ""}
            </a>
          ) : (
            <span>{props.heading ? props.heading : ""}</span>
          )}
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 85 },
    { skill: "ASP.NET Core", ratingPercentage: 90 },
    { skill: "Entity Framework", ratingPercentage: 88 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Next.js", ratingPercentage: 82 },
    { skill: "TypeScript", ratingPercentage: 80 },
    { skill: "SQL Server", ratingPercentage: 85 },
    { skill: "MySQL", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS3 / Tailwind / Bootstrap", ratingPercentage: 80 },
    { skill: "Git & GitHub", ratingPercentage: 85 },
  ];

  const softSkillsDetails = [
    { skill: "Problem Solving", ratingPercentage: 88 },
    { skill: "Team Collaboration", ratingPercentage: 90 },
    { skill: "Communication", ratingPercentage: 85 },
    { skill: "Time Management", ratingPercentage: 83 },
    { skill: "Adaptability", ratingPercentage: 87 },
    { skill: "Critical Thinking", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "Limtech ERP",
      link: "https://limtecherp.com/",
      duration: { fromDate: "2025", toDate: "2026" },
      description:
        "A secure ERP system built to manage supply chain and HR operations. It supports real-time inventory tracking, vendor management, payroll, and performance monitoring. Using microservices, Kafka, and gRPC, the system ensures scalability, fast communication, and smooth workflows for businesses",
      subHeading: "Technologies Used: .NET Core, React JS, Bootstrap, Kafka, gRPC",
    },
    {
      title: "PocketX (POS System)",
      link: "https://dev.pocketx.app/",
      duration: { fromDate: "2024", toDate: "2025" },
      description:
        "A modern POS solution built to simplify sales and inventory management for both online and in-store operations. It features a responsive UI with Next.js, seamless backend integration using .NET Core, and core modules for sales, purchase, inventory, and customer loyalty programs. Designed to improve efficiency and enhance customer experience with smooth data flow and scalable architecture",
      subHeading: "Technologies Used: .NET Core, Next.js, GraphQL",
    },
    {
      title: "ERPX",
      link: "https://erp-dev.xeonsoftware.com/",
      duration: { fromDate: "2020", toDate: "2024" },
      description:
        "An ERP solution built to automate HR and business processes. It includes modules for employee management, leave tracking, movement, asset, and contact book. The system integrates backend services with .NET Core and GraphQL for smooth data flow, while React.js ensures a responsive and user-friendly interface. Designed to improve workflow efficiency and coordination across departments.",
      subHeading: "Technologies Used: .NET Core, React.js, GraphQL.",
    },
  ];

  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bangladesh University of Business & Technology"}
        subHeading={"B.Sc. In Computer Science & Engineering"}
        fromDate={"2015"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Kushtia Polytechnic Institute"}
        subHeading={"Diploma in Engineering"}
        fromDate={"2009"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"High School "}
        subHeading={"Bheramara pilot high school"}
        fromDate={"2007"}
        toDate={"2009"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="work-experience-scroll">
        <div className="experience-container">
          <ResumeHeading
            heading={"Xeon Technology Ltd"}
            subHeading={"FULL STACK SOFTWARE ENGINEER"}
            fromDate={"2021"}
            toDate={"2024"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Previously worked as a Software Engineer at Xeon Technology Ltd.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Developed ERP web applications with .NET Core and React.js to improve scalability.
            </span>
            <br />
            <span className="resume-description-text">
              - Built and integrated REST and GraphQL APIs for smooth data flow across modules.{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - Collaborated with cross-functional teams to deliver new features and enhance workflows.{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - Debugged and resolved application issues, enhancing performance and user experience.
            </span>
            <br />
          </div>
        </div>

        <div className="experience-container">
          <ResumeHeading
            heading={"Limerick Resources Ltd"}
            subHeading={"FULL STACK SOFTWARE ENGINEER"}
            fromDate={"2024"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              Currently working as a Software Engineer at Limerick Resources Ltd.
            </span>
          </div>
          <div className="experience-description">
            <span className="resume-description-text">
              - Designed and developed a secure ERP system using .NET Core and microservices.
            </span>
            <br />
            <span className="resume-description-text">
              - Enhanced API performance, reducing response time by 30% through caching and query optimization.{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - Collaborated with cross-functional teams to deliver new features and enhance workflows.{" "}
            </span>
            <br />
            <span className="resume-description-text">
              - Delivered high-performance enterprise solutions leveraging Kafka and gRPC for seamless communication.
            </span>
            <br />
          </div>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      <div className="skills-section-full">
        <div className="skills-section-label">Skills</div>
        <div className="skills-grid">
          {programmingSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-section-label soft-skills-label">Soft Skills</div>
        <div className="skills-grid">
          {softSkillsDetails.map((skill, index) => (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container projects-scroll-container" key="projects">
      {projectsDetails.map((proj, index) => (
        <ResumeHeading
          key={index}
          heading={proj.title}
          link={proj.link}
          subHeading={proj.subHeading}
          description={proj.description}
          fromDate={proj.duration.fromDate}
          toDate={proj.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching ICT & Mathematics"
        description="I enjoy teaching ICT and Mathematics, sharing knowledge with students, and helping them build problem-solving skills."
      />
      <ResumeHeading
        heading="Music"
        description="I love listening to soothing music as a way to relax and recharge. Exploring Spotify playlists and skimming through pop charts often gives me the best stress relief and keeps me refreshed."
      />
      <ResumeHeading
        heading="Programming Blogs"
        description="I like reading programming blogs to learn new technologies, best practices, and real-world developer experiences. It helps me stay updated and improve my skills."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={new URL(`../../assets/Resume/${bullet.logoSrc}`, import.meta.url).href}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    }
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
