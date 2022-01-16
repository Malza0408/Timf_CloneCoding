import React, { MouseEvent, ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  className: string;
}

const Link = ({ href, children, className }: LinkProps) => {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");

    window.dispatchEvent(navEvent);

    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
};

export default Link;
