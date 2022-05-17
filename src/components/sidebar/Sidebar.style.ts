import styled, { css } from "styled-components";
import { TitleProps, SidebarItemProps, CheckBoxProps } from "./model";
import Switch from "antd/lib/switch/index";

export const SidebarWrapper = styled.div`
  background: #f1f1f1;
  height: 100%;
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;

`;

export const SidebarTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
`;

export const Title = styled.label<TitleProps>`
  font-size: 28px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
`;

export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 500px;
  list-style: none;
  padding-inline-start: 0px;
`;

export const SidebarItem = styled.li<SidebarItemProps>`
  cursor: pointer;
  background: ${(props) => (props.active ? "white" : " #f1f1f1")};
  border-left: ${(props) => (props.active ? "4px solid red" : "none")};
  padding: ${(props) => (props.active ? " 22px 36px;" : " 22px 40px;")};
  font-size: 16px;
  font-weight: 500;
`;

export const SidebarFooter = styled.div`
  margin-top: auto;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 45px;
`;

export const SidebarText = styled.label<CheckBoxProps>`
  color: ${(props) => (props.active ? "green" : "#ff1818")};
  font-size: 12px;
  font-weight: 600;
  margin: auto;
  margin-right: 0;
`;

export const StyledSwitch = styled(Switch)<CheckBoxProps>`
  &.ant-switch.ant-switch {
    background: #ff1818;
    height: 30px;
    margin: auto;
    .ant-switch-handle.ant-switch-handle {
      left: 7%;
      width: 21px;
      height: 21px;
      top: 4px;
    }
  }
  &.ant-switch.ant-switch-checked {
    background: green;
    .ant-switch-handle.ant-switch-handle {
      left: 44%;
    }
  }
`;

export const ShadowCoverElement = styled.div<CheckBoxProps>`
  position: absolute;
  height: 80px;
  width: inherit;
  bottom: 0;

  ${(props) =>
    props.active
      ? css`
          background: linear-gradient(
            180deg,
            rgba(242, 242, 246, 0) 18%,
            rgba(170, 236, 160, 0.9528186274509804) 98%
          );
        `
      : css`
          background: linear-gradient(
            180deg,
            rgba(242, 242, 246, 0) 18%,
            rgba(247, 59, 50, 0.9528186274509804) 98%
          );
        `}

  pointer-events: none;
`;
