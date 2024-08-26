import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <InputWrapper>
      <Icon id={icon}></Icon>
      <Input placeholder={placeholder}></Input>
    </InputWrapper>
  );
};

const InputWrapper = styled.div``;

const Input = styled.input``;

export default IconInput;
