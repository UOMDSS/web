import React, { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};

export default Section;
