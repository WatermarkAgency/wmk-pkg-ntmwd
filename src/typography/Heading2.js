import React from "react";

export const Heading2 = ({ children, din }) => {
  return <h2 className={din ? "din" : undefined}>{children}</h2>;
};
