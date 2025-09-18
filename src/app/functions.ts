import { useNavigate } from "react-router-dom";

export function preloadNav(to: string, component: string) {
  import(`./${component}`).then(() => useNavigate()(to, { replace: true }));
}