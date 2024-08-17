import { Container, Stack } from "@mui/material";

import { Header } from "../Header";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer/Footer";

export const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Container component={"main"} disableGutters>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
