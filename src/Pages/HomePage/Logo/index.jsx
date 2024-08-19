import { Button, Stack, Typography } from "@mui/material";

export const Logo = ({ handleScroll }) => {

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
            width={{
              mobile: "312px",
              tablet: "30%",
              laptop: "30%",
              desktop: "60%",
            }}
          />
          <Stack
            component={"img"}
            src={"/assets/images/Logo/sub-logo.svg"}
            alt="Law Office, Berger.Gabai.Rechtschaffen"
            width={{
              mobile: "312px",
              tablet: "30%",
              laptop: "30%",
              desktop: "60%",
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
        <Stack
          component={"img"}
          src={"/assets/images/Logo/arrow.svg"}
          alt="Scroll"
          sx={{ width: "100%", height: "auto" }}
        />
      </Button>
    </Stack>
  );
};
