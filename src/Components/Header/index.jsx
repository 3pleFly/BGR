import { ButtonBase, Drawer, Typography, Stack, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../Core/constants";

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((o) => !o);
  };

  const links = [
    { to: AppRoutes.ROOT, label: "דף הבית" },
    { to: AppRoutes.CONTACT, label: "צור קשר" },
    { to: AppRoutes.ACCESSIBILITY, label: "הצהרת נגישות" },
  ];

  return (
    <Stack
      position={"fixed"}
      padding={{ mobile: "15px 20px 15px 20px", tablet: "10px 34px 10px 34px" }}
      bgcolor={"primary.light"}
      width={"100%"}
      zIndex={1000}
    >
      <ButtonBase onClick={toggleDrawer} aria-label="Open Navbar" sx={{ alignSelf: "flex-start" }}>
        <Stack
          component={"img"}
          src={"/assets/images/Icons/OpenNavbar.svg"}
          alt="Open navbar"
        />
      </ButtonBase>
      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={toggleDrawer}
        sx={{
          ".MuiPaper-root": {
            width: { mobile: "100%", tablet: "400px" },
            bgcolor: "primary.main",
            padding: "39px",
            height: "100vh",
          },
        }}
      >
        <ButtonBase
          onClick={toggleDrawer}
          aria-label="Close Navbar"
          sx={{
            alignSelf: "flex-start",
            position: "relative",
            right: "-30px",
          }}
        >
          <Stack
            component={"img"}
            src={"/assets/images/Icons/ClosedNavbar.svg"}
            alt="Open navbar"
          />
        </ButtonBase>
        <Stack
          component={"ul"}
          padding={"0px"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          gap={"66px"}
        >
          {links.map((link, i) => (
            <Fragment key={link.to}>
              <DrawerButton
                to={link.to}
                label={link.label}
                toggleDrawer={toggleDrawer}
              />
              {i !== links.length - 1 && (
                <Divider
                  aria-hidden={true}
                  sx={{
                    bgcolor: "#fff",
                    width: "100%",
                    height: "2px",
                  }}
                />
              )}
            </Fragment>
          ))}
        </Stack>
      </Drawer>
    </Stack>
  );
};

const DrawerButton = ({ to, label, toggleDrawer }) => (
  <Stack component={"li"} sx={{ listStyle: "none" }}>
    <Link to={to} style={{ textDecoration: "none" }} onClick={toggleDrawer}>
      <Typography
        fontSize={{ mobile: "30px", tablet: "40px" }}
        color={"primary.light"}
      >
        {label}
      </Typography>
    </Link>
  </Stack>
);
