import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP
} from "./ServicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Điều Khoản</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_01.png')} />
            <ServicesH2>Điều 1</ServicesH2>
            <ServicesP>
            coming soon
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_02.jpg')} />
            <ServicesH2>Điều 2</ServicesH2>
            <ServicesP>
            coming soon
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_03.jpg')} />
            <ServicesH2>Điều 3</ServicesH2>
            <ServicesP>
            coming soon
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
