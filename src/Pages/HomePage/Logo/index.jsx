import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

export const Logo = ({ handleScroll }) => {
  const scrollButtonRef = useRef(null);

  return (
    <Stack
      bgcolor={"primary.light"}
      minHeight={"100vh"}
      justifyContent={"space-between"}
    >
      <Stack margin={"auto"}>
        <Stack gap={{ mobile: "23px" }} alignItems={"center"}>
          <Stack
            component={"img"}
            src={"/assets/images/Logo/logo.svg"}
            alt="BGR Logo"
            width={{ mobile: "312px", tablet: "50%", laptop: "80%" }}
          />
          <Stack
            component={"img"}
            src={"/assets/images/Logo/sub-logo.svg"}
            alt="Law Office, Berger.Gabai.Rechtschaffen"
            width={{ mobile: "312px", tablet: "50%", laptop: "50%" }}
          />
        </Stack>
        <Typography
          textAlign={"center"}
          color={"primary.main"}
          fontSize={{ mobile: "14px", tablet: "36px" }}
        >
          מיסוי מקרקעין מסים עקיפים ומס הכנסה
        </Typography>
      </Stack>
      <ButtonBase
        onClick={handleScroll}
        sx={{
          width: { mobile: "22px", tablet: "32px", laptop: "48px" },
          position: "relative",
          bottom: { mobile: "32px", tablet: "60px" },
          alignSelf: "center",
          padding: 0,
        }}
      >
        <Stack
          component={"img"}
          src={"/assets/images/Logo/arrow.svg"}
          alt="Scroll"
          sx={{ width: "100%", height: "auto" }}
        />
      </ButtonBase>
    </Stack>
  );
};
