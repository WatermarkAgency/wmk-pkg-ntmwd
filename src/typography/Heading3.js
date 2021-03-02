import React from "react";

export const Heading3 = ({ children, din, upper, style }) => {
  const _style = { ...style };
  if (upper) _style.textTransform = "uppercase";
  return (
    <h3 style={_style} className={din ? "din" : undefined}>
      {children}
    </h3>
  );
};
