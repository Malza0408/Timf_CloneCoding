import { ReactNode } from "react";

interface RouteProps {
  path: string;
  children: ReactNode;
}

const Route = ({ path, children }: RouteProps) => {
  return window.location.pathname === path ? <>{children}</> : null;
};

export default Route;
