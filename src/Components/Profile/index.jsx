import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParseRichText } from "../../Hooks/useParseRichText";
import { useTranslation } from "../../Hooks/useTranslation";

export const Profile = ({
  profileId,
  image_Profile,
  imageProfileLogo,
  en_name,
  heb_name,
  typeRule,
  aboutPerson,
  elementRef,
}) => {
  const navigate = useNavigate();

  const moveToSpecificProfile = () => {
    navigate(`/profile/${profileId}`);
  };

  const translation = useTranslation();

  const { parseRichText } = useParseRichText();

  return (
    <Stack
      component={"li"}
      padding={{ mobile: "75px 37px 40px 37px", desktop: "250px 0px 0px 0px" }}
      bgcolor={"primary.light"}
      borderRadius={"27px"}
      sx={{ listStyle: "none" }}
      ref={elementRef}
      minHeight={{
        mobile: "initial",
        desktop: "100vh",
        large: "auto",
      }}
    >
      <Stack
        gap={{ mobile: "20px", desktop: "70px" }}
        alignItems={{ large: "center" }}
      >
        <Stack
          gap={{ mobile: "52px", desktop: "70px" }}
          direction={{ mobile: "column", tablet: "row-reverse" }}
          width={"100%"}
          justifyContent={{
            mobile: "center",
            desktop: "flex-end",
            large: "center",
          }}
        >
          <Stack
            width={"100%"}
            maxWidth={{ mobile: "300px", laptop: "400px", large: "670px" }}
          >
            <Stack
              sx={{
                backgroundImage: `url(${image_Profile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { mobile: "130px", laptop: "180px", desktop: "380px" },
                height: { mobile: "200px", laptop: "300px", desktop: "570px" },
                flexShrink: 0,
                borderRadius: "14px",
                position: "relative",
              }}
            >
              <Stack
                position={"absolute"}
                aria-hidden={true}
                bottom={{ mobile: "20px", desktop: "20px" }}
                left={{
                  mobile: imageProfileLogo ? "-110px" : "-70px",
                  desktop: imageProfileLogo ? "-280px" : "-280px",
                  large: imageProfileLogo ? "-350px" : "-350px",
                }}
                alignItems={"flex-end"}
              >
                {imageProfileLogo && (
                  <Stack
                    component="img"
                    src={imageProfileLogo}
                    alt={en_name}
                    sx={{
                      width: {
                        mobile: "146px",
                        laptop: "180px",
                        desktop: "450px",
                      },
                      height: { mobile: "initial", desktop: "initial" },
                      objectFit: "cover",
                    }}
                  />
                )}
                <Typography
                  textAlign={"left"}
                  color={"primary.main"}
                  letterSpacing={0}
                  lineHeight={1}
                  marginTop={{ mobile: "0px", laptop: "24px", tablet: "36px" }}
                  fontSize={{ mobile: "16px", laptop: "32px", desktop: "56px" }}
                  fontWeight={700}
                >
                  {en_name}
                </Typography>
                <Typography
                  textAlign={"left"}
                  fontSize={{ mobile: "15px", laptop: "24px", desktop: "36px" }}
                  color={"primary.main"}
                  fontWeight={700}
                >
                  {"Adv. (CPA)"}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            gap={{ mobile: "22px", laptop: "40px", desktop: "60px" }}
            width={"100%"}
            maxWidth={{ mobile: "450px", tablet: "500px", large: "670px" }}
          >
            <Stack gap={"5px"}>
              <Typography
                fontSize={{ mobile: "30px", laptop: "40px", desktop: "64px" }}
                lineHeight={1}
                fontWeight={700}
                color={"primary.main"}
              >
                {heb_name}
              </Typography>
              <Typography
                fontSize={{ mobile: "16px", laptop: "20px", desktop: "24px" }}
                fontWeight={600}
                color={"primary.main"}
              >
                {typeRule}
              </Typography>
            </Stack>
            <Typography
              fontSize={{ mobile: "15px", laptop: "24px", desktop: "30px" }}
              color={"primary.main"}
            >
              {parseRichText(aboutPerson)}
            </Typography>
            <Stack
              width={{ mobile: "100px", laptop: "150px", desktop: "200px" }}
              aria-label={"המשך קריאה"}
              alignSelf={"flex-end"}
              onClick={() => moveToSpecificProfile()}
            >
              <img
                src={"/assets/images/Icons/ContinueReading.svg"}
                alt="Icon to continue reading"
                style={{ cursor: "pointer" }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
