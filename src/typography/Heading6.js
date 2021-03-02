import React from "react";

export const Heading6 = ({ children, din, style }) => {
  return (
    <h6 style={style} className={din ? "din" : undefined}>
      {children}
    </h6>
  );
};
