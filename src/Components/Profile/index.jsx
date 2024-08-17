import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import jsonProfile from "./../../Data/Profile.json";
import { useCreateMarkup } from "../../Hooks/useCreateMarkup";

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

  const { createMarkup } = useCreateMarkup();

  return (
    <Stack
      component={"li"}
      padding={{ mobile: "75px 56px 40px 37px", desktop: "250px 0px 0px 0px" }}
      bgcolor={"primary.light"}
      borderRadius={"27px"}
      sx={{ listStyle: "none" }}
      ref={elementRef}
      minHeight={{ mobile: "initial", desktop: "100vh", large: "auto" }}
    >
      <Stack
        gap={{ mobile: "20px", desktop: "40px" }}
        alignItems={{ large: "center" }}
        marginLeft={{ large: "400px" }}
      >
        <Stack
          gap={{ mobile: "52px", desktop: "70px" }}
          direction={{ mobile: "column", desktop: "row-reverse" }}
          justifyContent={"flex-end"}
        >
          <Stack
            sx={{
              backgroundImage: `url(${image_Profile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { mobile: "130px", desktop: "380px" },
              height: { mobile: "200px", desktop: "570px" },
              flexShrink:0,
              position: "relative",
            }}
          >
            <Stack
              position={"absolute"}
              bottom={{ mobile: "20px", desktop: "20px" }}
              left={{
                mobile: imageProfileLogo ? "-110px" : "-70px",
                desktop: imageProfileLogo ? "-420px" : "-280px",
              }}
              alignItems={"flex-end"}
            >
              {imageProfileLogo && (
                <Stack
                  component="img"
                  src={imageProfileLogo}
                  alt={en_name}
                  sx={{
                    width: { mobile: "146px", desktop: "500px" },
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
                marginTop={{ mobile: "0px", tablet: "36px" }}
                fontSize={{ mobile: "16px", desktop: "56px" }}
                fontWeight={700}
              >
                {en_name}
              </Typography>
              <Typography
                textAlign={"left"}
                fontSize={{ mobile: "15px", desktop: "36px" }}
                color={"primary.main"}
                fontWeight={700}
              >
                {"Adv. (CPA)"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={{ mobile: "22px", desktop: "60px" }}
            maxWidth={{ mobile: "404px", large: "670px" }}
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
              dangerouslySetInnerHTML={createMarkup(aboutPerson)}
            />
          </Stack>
        </Stack>
        <Stack
          width={{ mobile: "100px", desktop: "200px" }}
          alignSelf={{
            mobile: "flex-end",
            desktop: "flex-start",
            large: "center",
          }}
          onClick={() => moveToSpecificProfile()}
        >
          <img
            src={jsonProfile.Icon_Continue_Reading}
            alt="Icon to continue reading"
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
