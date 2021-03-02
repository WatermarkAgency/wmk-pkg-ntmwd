import React from "react";

export const Heading4 = ({ children, din, style }) => {
  return <h4 style={style} className={din ? "din" : undefined}>{children}</h4>;
};
