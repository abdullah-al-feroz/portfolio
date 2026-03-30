import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';

import './AboutMe.css';

const AboutMe = (props) => {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id);
    } 
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = { 
        description: "Software engineer with 4+ years of experience in building scalable web applications using .NET Core and React.js. Skilled in designing ERP and POS systems with microservices, Kafka, and gRPC for high-performance enterprise solutions. Strong background in API development, database optimization, and modern frontend frameworks like Next.js and TypeScript. Passionate about delivering secure, efficient, and user-friendly applications that solve real-world business challenges. Dedicated professional with a B.Sc. in Computer Science, eager to contribute expertise and innovation to forward-thinking organizations.",
        highlights: {
            bullets: [
                "Software engineer skilled in .NET Core and React.js",
                "Experienced in ERP and POS system development",
                "Strong in API design and database optimization",
                "Frontend expertise with Next.js and TypeScript",
                "Focused on building secure, scalable applications"
           ],
           heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((value,i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{ value }</span>
                </div>
            ))
        )
    }

    useEffect(() => {
        return () => {
            /* UNSUBSCRIBE THE SUBSCRIPTIONS */
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    return (
        <div className="about-me-container screen-container fade-in" id={ props.id || ''}>
            <div className="about-me-parent">
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
            <div className="about-me-card">
                <div className="about-me-profile"></div>
                <div className="about-me-details">
                    <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{ SCREEN_CONSTANTS.highlights.heading }</span>
                        </div>
                        { renderHighlights() }
                    </div>
                    <div className="about-me-options">
                         <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
                         <a href="Firozcv.pdf" download="Abdullah-Al Firoz Resume.pdf">
                            <button className="btn highlighted-btn"> Get Resume </button>
                         </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
