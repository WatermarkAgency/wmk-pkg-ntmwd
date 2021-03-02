import React, { useState, useEffect } from "react";
import { WMKLink } from "wmk-lib";
import styled from "styled-components";
import { colors } from "../../vars/palette";

const Btn = styled(WMKLink)`
  color: ${colors.hex("white")};
  padding: 0.25rem 0.35rem;
  border: 1px solid ${colors.hex("white")};
  border-radius: 5px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  //font-weight: bold;
  font-size: 14px;
  line-height: 1.2;
  :hover {
    text-decoration: none;
    color: ${colors.hex("primary")};
    background: ${colors.rgba("white", 0.9)};
    transition: all 0.3s ease;
    box-shadow: 0px 3px 5px ${colors.rgba("black", 0.25)};
  }
`;

const PillButton = ({ to, target, children, tracking }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const dL = (window && window.dataLayer) || [];
    if (tracking && window && window.dataLayer) {
      setData(dL);
    }
  }, [tracking]);
  return (
    <Btn
      to={to}
      target={target}
      onClick={() => {
        const { event, params } = tracking;
        return tracking && data ? data.push({ event, ...params }) : undefined;
      }}
    >
      {children}
    </Btn>
  );
};

export default PillButton;
