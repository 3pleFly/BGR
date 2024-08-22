import { Button, Drawer, Typography, Stack, Divider } from "@mui/material";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../Core/constants";
import { Image } from "../Image";

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
      padding={{ mobile: "15px 0px 15px 20px", desktop: "10px 14px 10px 34px" }}
      bgcolor={"primary.light"}
      width={"100%"}
      zIndex={1000}
    >
      <Button
        onClick={toggleDrawer}
        aria-label="Open Navbar"
        sx={{ alignSelf: "flex-start", padding: "0px" }}
      >
        <Image
          src={"/assets/images/Icons/OpenNavbar.svg"}
          alt="Open navbar"
          width={60}
          height={60}
          sx={{
            width: { mobile: "40px", desktop: "60px" },
            height: { mobile: "40px", desktop: "60px" },
          }}
        />
      </Button>
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
        <Button
          onClick={toggleDrawer}
          aria-label="Close Navbar"
          sx={{
            padding: "0px",
            alignSelf: "flex-start",
            position: "relative",
            top: "-20px",
            right: "-30px",
            "&:focus": {
              outline: "-webkit-focus-ring-color auto 1px",
            },
          }}
        >
          <Image
            src={"/assets/images/Icons/ClosedNavbar.svg"}
            alt="Open navbar"
            width={51}
            height={16}
            sx={{
              width: { mobile: "40px", desktop: "60px" },
              height: { mobile: "40px", desktop: "60px" },
            }}
          />
        </Button>
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
