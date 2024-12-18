import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: string;
}

const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={twMerge(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={twMerge(
        "scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={twMerge(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({ className, children }) => {
  return (
    <h4
      className={twMerge(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
};

const P: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={twMerge("leading-7 [&:not(:first-child)]:mt-4", className)}>
      {children}
    </p>
  );
};

const Blockquote: React.FC<Props> = ({ className, children }) => {
  return (
    <blockquote className={twMerge("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
};

const InlineCode: React.FC<Props> = ({ className, children }) => {
  return (
    <code
      className={twMerge(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  );
};

const Lead: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={twMerge("text-xl text-muted-foreground", className)}>
      {children}
    </p>
  );
};

const Large: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={twMerge("text-lg font-semibold", className)}>
      {children}
    </div>
  );
};

const Muted: React.FC<Props> = ({ className, children }) => {
  return (
    <p className={twMerge("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  );
};

export { H1, H2, H3, H4, P, Lead, Large, Muted, Blockquote, InlineCode };
