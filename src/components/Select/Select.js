import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <div>
      <SelectDropdown value={value} onChange={onChange}>
        {children}
      </SelectDropdown>
      <Icon id="chevron-down" />
    </div>
  );
};

const SelectDropdown = styled.select`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
`;

export default Select;
