import { useNavigate } from "react-router-dom";
import { MouseEventHandler, ReactNode } from "react";

export function PreloadLink(props: { to: string, component: string, className: string, children: ReactNode }) {
  const navigate = useNavigate();
  const { to, component, className, children } = props;

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    import(`../app/${component}`).then(() => navigate(to));
  };

  return <a href={to} onClick={handleClick} className={className}>{children}</a>;
}