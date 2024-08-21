import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../Core/constants";
import { Image } from "../../../Components/Image";

export const Logo = ({ handleScroll }) => {
  return (
    <Stack
      bgcolor={"primary.light"}
      minHeight={"100vh"}
      justifyContent={"space-between"}
    >
      <Stack margin={"auto"}>
        <Stack
          component={Link}
          to={AppRoutes.ROOT}
          gap={{ mobile: "23px" }}
          alignItems={"center"}
        >
          <Image
            src={"/assets/images/Logo/logo.webp"}
            alt="BGR Logo"
            width={"312px"}
            height={"130px"}
            sx={{
              width: {
                mobile: "312px",
                tablet: "30%",
                laptop: "30%",
                desktop: "60%",
              },
              height: "auto",
            }}
          />
          <Image
            src={"/assets/images/Logo/sub-logo.svg"}
            alt="Law Office, Berger.Gabai.Rechtschaffen"
            width={"312px"}
            height={"130px"}
            sx={{
              width: {
                mobile: "312px",
                tablet: "30%",
                laptop: "30%",
                desktop: "60%",
              },
              height: "auto",
            }}
          />
        </Stack>
        <Typography
          textAlign={"center"}
          color={"primary.main"}
          fontSize={{ mobile: "14px", desktop: "36px" }}
        >
          מיסוי מקרקעין מסים עקיפים ומס הכנסה
        </Typography>
      </Stack>
      <Button
        tabIndex={0}
        onClick={handleScroll}
        sx={{
          minWidth: "0px",
          width: {
            mobile: "22px",
            tablet: "24px",
            laptop: "24px",
            large: "30px",
          },
          position: "relative",
          bottom: { mobile: "32px", tablet: "60px" },
          alignSelf: "center",
          padding: 0,
        }}
      >
        <Image
          src={"/assets/images/Logo/arrow.svg"}
          alt="Scroll button"
          sx={{ width: "100%", height: "auto" }}
          width={50}
          height={50}
        />
      </Button>
    </Stack>
  );
};
