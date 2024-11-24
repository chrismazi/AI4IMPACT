import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
  href?: string; // Added href for link functionality
} & HTMLAttributes<HTMLButtonElement>;

const classes = cva(
  "inline-flex items-center justify-center text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

export const Button = (props: ButtonProps) => {
  const { className = "", children, href, ...otherProps } = props;

  if (href) {
    // Render as a link if href is provided
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes({ ...otherProps, className })}
      >
        {children}
      </a>
    );
  }

  // Render as a button if href is not provided
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
};
