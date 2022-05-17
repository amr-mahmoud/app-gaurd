import styled from "styled-components";
import Switch from "antd/lib/switch/index";
import { CheckBoxProps, CardWrapperProps } from "./model";

export const CardWrapper = styled.div<CardWrapperProps>`
  border: 3px solid #2d2d2d30;
  display: flex;
  flex-direction:column
  width: 375px;
  height: 180px;
  border-radius: 25px;
  padding: 15px;
  opacity:${(props) => (props.disabled ? 0.6 : 1)}

`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const CardTitle = styled.label`
  margin-right: auto;
  font-size: 18px;
  font-weight: 500;
`;

export const CardCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
`;

export const CardDescription = styled.div`
  font-size: 16px;
  max-width: 240px;
`;

export const StyledSwitch = styled(Switch)<CheckBoxProps>`
  &.ant-switch {
    background: #ff1818;
  }
  &.ant-switch.ant-switch-checked {
    background: green;
  }
`;

export const CheckBoxLabel = styled.label<CheckBoxProps>`
  color: ${(props) => (props.active ? "green" : "#ff1818")};
  font-size: 12px;
  font-weight: 600;
`;
