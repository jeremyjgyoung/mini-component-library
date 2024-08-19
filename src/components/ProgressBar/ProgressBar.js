/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "16px",
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
  height: var(--height);
`;

export default ProgressBar;
