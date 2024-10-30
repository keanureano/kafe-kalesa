import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export { Container };
