import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              Giới thiệu
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Đăng kí tạm trú
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Điều khoản
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Đăng kí tạm vắng
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtn>
            <SidebarBtnLink to="signin">Quản lí</SidebarBtnLink>
          </SidebarBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
