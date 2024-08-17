import React from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("tablet"));

  const contactDetails = [
    { label: "מייל", info: "BGR@gmail.com" },
    { label: "טלפון", info: "972.3.6544.303+" },
    { label: "פקס", info: "972.3.6544.307+" },
    {
      label: "משרד",
      info: " מגדל הכשרת-היישוב. קומה 27. רח' ז'בוטינסקי 9 בני ברק",
    },
    { label: "דואר", info: "ת.ד 2163, בני ברק, ישראל, 5112101" },
  ];

  return (
    <Stack
      bgcolor={"primary.main"}
      overflow={"hidden"}
      padding={{ mobile: "0px 13px 50px 13px" }}
      paddingTop={{ mobile: "24px", tablet: "48px" }}
      gap={{ mobile: "20px" }}
      alignItems={"center"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={{ mobile: "12px" }}>
        <Stack
          component={"img"}
          src={"/Images/Profile/BGRLogoSmall.png"}
          alt="BGR logo"
          sx={{
            width: { mobile: "150px", tablet: "300px", laptop: "auto" },
            height: { mobile: "64px", tablet: "145px", laptop: "185px" },
            objectFit: "contain",
          }}
        />
        <Stack fontSize={{ mobile: "18px", laptop: "26px" }} fontWeight={500}>
          {contactDetails
            .slice(0, isDesktop ? contactDetails.length : 3)
            .map((c, i) => (
              <ContactLabel info={c.info} label={c.label} key={i} />
            ))}
        </Stack>
      </Stack>
      {!isDesktop && (
        <Stack fontSize={"15px"} fontWeight={500}>
          {contactDetails.slice(3, contactDetails.length).map((c, i) => (
            <ContactLabel info={c.info} label={c.label} key={i} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

const ContactLabel = ({ label, info }) => (
  <Typography
    fontSize={"inherit"}
    fontWeight={"inherit"}
    color={"primary.light"}
  >
    <span style={{ fontWeight: 700 }}>{label}:</span> {info}
  </Typography>
);
export default Footer;
