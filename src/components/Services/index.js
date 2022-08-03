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
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_01.png')} />
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>
              we help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_02.jpg')} />
            <ServicesH2>Virtual offices</ServicesH2>
            <ServicesP>
              You can access uor plaform online anyWhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={require('../../images/docter_03.jpg')} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special memberShip Card that return 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
