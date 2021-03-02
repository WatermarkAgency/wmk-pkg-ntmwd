import React from "react";

export const Heading5 = ({ children, din, style }) => {
  return (
    <h5 style={style} className={din ? "din" : undefined}>
      {children}
    </h5>
  );
};
