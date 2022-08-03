import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  Column1,
  TextWrapper,
  InfoRow,
  TopLine,
  Heading,
  SubTitle,
  BtnWrapper,
  BtnLink,
  Column2,
  ImgWrap,
  Img,
} from "./InfoSectionElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLable,
  img,
  alt
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrapper>
                  <BtnLink to="home">{buttonLable}</BtnLink>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
