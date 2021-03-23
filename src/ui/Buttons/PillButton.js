import React, { useState, useEffect } from "react";
import { WMKLink } from "wmk-lib";
import styles from "./PillButton.module.css";

const PillButton = ({ to, target, children, tracking }) => {
  const [dataLayer, setDataLayer] = useState();
  useEffect(() => {
    const dL = (window && window.dataLayer) || [];
    if (tracking && dL) {
      setDataLayer(dL);
    }
  }, [tracking]);
  return (
    <WMKLink
      to={to}
      target={target}
      onClick={() => {
        const { event, params } = tracking;
        return tracking && dataLayer
          ? dataLayer.push({ event, ...params })
          : undefined;
      }}
      styles={styles.pill}
    >
      {children}
    </WMKLink>
  );
};

export default PillButton;
