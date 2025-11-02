import React from "react";
import { DocuCatButton } from "./DocuCatButton";

interface TextButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconAlt?: string;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * A text-styled button component that looks like a clickable text link.
 * Perfect for subtle actions, inline links, or when you need a button that doesn't stand out.
 *
 * TODO: A better implementation is to use the DocuCatButton component as a base and set the variant to "text". But here we leave it as a future improvement.
 *
 * @param props - TextButton component props
 * @returns A button component styled as text
 */
export function TextButton({
  children,
  href,
  onClick,
  icon,
  iconAlt = "",
  className = "",
  target,
  rel,
}: TextButtonProps) {
  const classes = `inline-flex cursor-pointer transition-all ${className}`;

  return (
    <DocuCatButton
      variant="text"
      href={href}
      onClick={onClick}
      icon={icon}
      iconAlt={iconAlt}
      className={classes}
      target={target}
      rel={rel}
    >
      {children}
    </DocuCatButton>
  );
}
