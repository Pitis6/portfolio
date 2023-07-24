import { useLocation } from "react-router-dom";
import { Layout } from "./Layout";
import { useEffect } from "react";

export const LayoutContainer = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout />;
};
