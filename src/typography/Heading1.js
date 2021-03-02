import React from "react";

export const Heading1 = ({ children, din, style }) => {
  return (
    <h1 style={style} className={din ? "din" : undefined}>
      {children}
    </h1>
  );
};
