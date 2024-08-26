import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <DisplayWrapper>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" />
        </IconWrapper>
      </DisplayWrapper>
      <SelectDropdown value={value} onChange={onChange}>
        {children}
      </SelectDropdown>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectDropdown = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  appearance: none;
  border-radius: 8px;
`;

const DisplayWrapper = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  height: 43px;
  border-radius: 8px;
  display: flex;
  margin-right: auto;
  padding: 12px 16px 0 16px;
`;

const IconWrapper = styled.div`
  padding-left: 20px;
`;

export default Select;
