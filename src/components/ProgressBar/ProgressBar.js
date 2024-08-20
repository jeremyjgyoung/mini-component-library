/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--border-radius": "8px",
    "--box-shadow": `inset 0px 2px 4px ${COLORS.transparentGray35}`,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <ProgressBarBase style={styles} value={value} max={100}>
      {value}
    </ProgressBarBase>
  );
};

const ProgressBarBase = styled.progress`
  width: 370px;
  height: var(--height);
  box-shadow: var(--box-shadow);
`;

export default ProgressBar;
