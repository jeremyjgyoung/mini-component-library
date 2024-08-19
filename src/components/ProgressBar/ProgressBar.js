/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarBase value={value} max={100}>
      {value}
    </ProgressBarBase>
  );
};

const ProgressBarBase = styled.progress`
  height: 8px;
`;

export default ProgressBar;
