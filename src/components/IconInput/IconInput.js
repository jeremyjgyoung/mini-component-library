import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputWrapper>
      <IconComponent id={icon}></IconComponent>
      <Input placeholder={placeholder}></Input>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  padding-left: 32px;
  pointer-events: none;
`;

const IconComponent = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export default IconInput;
