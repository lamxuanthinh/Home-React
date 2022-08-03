import React from "react";
import { useState } from "react";
import VideoBackgroundHome from "../../videos/backgroundHome.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWraper,
  BtnLink,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={VideoBackgroundHome}
            type="video/mp4"
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive @250$ in credit towards
            your next payment.
          </HeroP>
          <HeroBtnWraper onMouseEnter={onHover} onMouseLeave={onHover}>
            <BtnLink
              to="signup"
              smooth={true}
              duration={true}
              spy={true}
              offset={-80}
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </BtnLink>
          </HeroBtnWraper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
