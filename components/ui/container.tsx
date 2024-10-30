import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="container px-4 py-8 mx-auto">{children}</div>
    </div>
  );
};

export { Container };
