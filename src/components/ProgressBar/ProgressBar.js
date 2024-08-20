/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--border-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--border-radius": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <>
      <ProgressBarBase style={styles} value={value} max={100}>
        {value}
      </ProgressBarBase>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </>
  );
};

const ProgressBarBase = styled.progress`
  width: 370px;
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);

  /* Remove the default appearance in WebKit-based browsers */
  -webkit-appearance: none;
  /* Set the background color for the progress container */
  background-color: ${COLORS.transparentGray35};
  /* Use the accent color for browsers that support it */
  accent-color: ${COLORS.primary};

  &::-webkit-progress-bar {
    /* Style the progress bar container in WebKit-based browsers */
    background-color: ${COLORS.transparentGray35};
    border-radius: var(--border-radius);
    padding: var(--padding);
  }

  &::-webkit-progress-value {
    /* Style the filled portion of the progress bar in WebKit-based browsers */
    background-color: ${COLORS.primary};
    /* The calculation sets the border radius in a linear fashion to 0 to 4 px from values 98 to 100 */
    border-radius: var(--border-radius)
      calc((${(props) => props.value} - 98) * 2px)
      calc((${(props) => props.value} - 98) * 2px) var(--border-radius);
  }

  &::-moz-progress-bar {
    /* Style the filled portion of the progress bar in Firefox */
    background-color: ${COLORS.primary};
    /* The calculation sets the border radius in a linear fashion to 0 to 4 px from values 98 to 100 */
    border-radius: var(--border-radius)
      calc((${(props) => props.value} - 98) * 2px)
      calc((${(props) => props.value} - 98) * 2px) var(--border-radius);
  }
`;

export default ProgressBar;
