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
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles}>
      <ProgressBarBase style={styles} value={value} max={100}>
        {value}
      </ProgressBarBase>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;

const ProgressBarBase = styled.progress`
  width: 100%;
  height: var(--height);
`;

export default ProgressBar;
