import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { useParseRichText } from "../../Hooks/useParseRichText";
import { useTranslation } from "../../Hooks/useTranslation";
import { Helmet } from "react-helmet-async";

export const ProfilePage = () => {
  const { pathname } = useLocation();

  const profileId = pathname.split("/")[2];

  const navigate = useNavigate();
  const translation = useTranslation();

  const client = translation.Profile.find((p) => p.id === profileId);

  if (!client) navigate("/");

  const {
    image_FullProfile,
    imageProfileLogo,
    en_name,
    heb_name,
    typeRule,
    aboutPersonFullProfile,
  } = client;

  const { parseRichText } = useParseRichText();

  return (
    <Stack
      alignItems={"center"}
      padding={{
        mobile: "100px 38px 36px 38px",
        tablet: "100px 140px 40px 147px",
      }}
    >
      <Helmet>
        <title>{heb_name}</title>
        <meta property="og:title" content={heb_name} />
        <meta name="twitter:title" content={heb_name} />
      </Helmet>
      <Stack
        gap={{ mobile: "20px", tablet: "77px" }}
        maxWidth={{ mobile: "400px", tablet: "initial" }}
        width={"100%"}
      >
        <Stack
          gap={{ mobile: "20px", tablet: "70px" }}
          direction={{ mobile: "column-reverse", tablet: "row" }}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"flex-end"}
        >
          <Stack
            gap={{ mobile: "22px", desktop: "60px" }}
            maxWidth={{ mobile: "404px", tablet: "600px" }}
            width={{ mobile: "auto", tablet: "50%" }}
          >
            <Stack gap={"5px"}>
              <Typography
                fontSize={{ mobile: "30px", desktop: "64px" }}
                lineHeight={1}
                fontWeight={700}
                color={"primary.main"}
              >
                {heb_name}
              </Typography>
              <Typography
                fontSize={{ mobile: "16px", desktop: "24px" }}
                fontWeight={600}
                color={"primary.main"}
              >
                {typeRule}
              </Typography>
            </Stack>
            <Typography
              fontSize={{ mobile: "15px", desktop: "30px" }}
              color={"primary.main"}
            >
              {parseRichText(aboutPersonFullProfile)}
            </Typography>
          </Stack>
          <Stack
            width={{ mobile: "auto", tablet: "50%" }}
            sx={{
              alignSelf: { mobile: "flex-end", tablet: "flex-start" },
            }}
          >
            <Stack
              sx={{
                backgroundImage: `url(${image_FullProfile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { mobile: "175px", tablet: "360px", laptop: "460px" },
                height: { mobile: "264px", tablet: "570px", laptop: "670px" },
                position: "relative",
                left: { mobile: "0px", tablet: "initial" },
              }}
            >
              {imageProfileLogo && (
                <Stack
                  component="img"
                  src={imageProfileLogo}
                  aria-hidden={true}
                  alt={en_name}
                  sx={{
                    position: "absolute",
                    display: { mobile: "flex", tablet: "none" },
                    bottom: { mobile: "0px", tablet: "0px" },
                    right: { mobile: "-100px", tablet: "0px" },
                    width: { mobile: "150px", desktop: "500px" },
                    objectFit: "cover",
                  }}
                />
              )}
            </Stack>
          </Stack>
        </Stack>
        <Button
          width={{ mobile: "100px", desktop: "200px" }}
          onClick={() => navigate(window.history.length < 3 ? "/" : -1)}
          sx={{
            alignSelf: "flex-start",
            backgroundImage: `url('/assets/images/Icons/Back.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { mobile: "50px", desktop: "97px" },
            height: { mobile: "18px", desktop: "36px" },
          }}
        ></Button>
      </Stack>
    </Stack>
  );
};
