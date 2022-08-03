import React from "react";
import { animateScroll as scroll } from "react-scroll/modules";
import {FaFacebook , FaGithub, FaYoutube , FaInstagram}  from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrapper,
  FooterLinkContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink
} from "./FooterElements";


const Footer = () => {
  const backHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinkContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signup">How it Word</FooterLink>
                <FooterLink to="/signup">Testimonials</FooterLink>
                <FooterLink to="/signup">Careers</FooterLink>
                <FooterLink to="/signup">Investors</FooterLink>
                <FooterLink to="/signup">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signup">Submit Video</FooterLink>
                <FooterLink to="/signup">Ambassandors</FooterLink>
                <FooterLink to="/signup">Agency</FooterLink>
                <FooterLink to="/signup">Infuencer</FooterLink>
                <FooterLink to="/signup">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signup">Contact</FooterLink>
                <FooterLink to="/signup">Support</FooterLink>
                <FooterLink to="/signup">Destinations</FooterLink>
                <FooterLink to="/signup">Sponsorships</FooterLink>
                <FooterLink to="/signup">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signup">Intagram</FooterLink>
                <FooterLink to="/signup">Facebook</FooterLink>
                <FooterLink to="/signup">Youtube</FooterLink>
                <FooterLink to="/signup">Twitter</FooterLink>
                <FooterLink to="/signup">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={backHome}>TC-Covid</SocialLogo>
              <WebsiteRights>
                TC-Covid {new Date().getFullYear()}
                All right reserved
              </WebsiteRights>
              <SocialIcon>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="https://github.com/lamxuanthinh" target="_blank" >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
