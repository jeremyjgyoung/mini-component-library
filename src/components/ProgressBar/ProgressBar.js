/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--box-shadow": "none",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--box-shadow": "none",
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
  border-radius: 8px;

  /* Remove the default appearance in WebKit-based browsers */
  -webkit-appearance: none;
  /* Set the background color for the progress container */
  background-color: ${COLORS.transparentGray35};
  /* Use the accent color for browsers that support it */
  accent-color: ${COLORS.primary};

  &::-webkit-progress-bar {
    /* Style the progress bar container in WebKit-based browsers */
    background-color: ${COLORS.transparentGray35};
    border-radius: 8px;
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    /* Style the filled portion of the progress bar in WebKit-based browsers */
    background-color: ${COLORS.primary};
    border-radius: 8px 0px 0px 8px;
  }

  &::-moz-progress-bar {
    /* Style the filled portion of the progress bar in Firefox */
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
