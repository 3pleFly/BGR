import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { Profile } from "../../Components/Profile";
import { Logo } from "./Logo";
import { useRef } from "react";
import { useTranslation } from "../../Hooks/useTranslation";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const profileRefs = useRef([]);
  const translation = useTranslation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  const handleScroll = () => {
    const element = profileRefs.current[0];
    if (!element) return;

    const yOffset = isMobile ? -100 : -10;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });

    console.log(element);
    element.focus();
  };

  return (
    <Stack>
      <Helmet>
        <title>{translation.Seo.title}</title>
        <meta property="og:title" content={translation.Seo.title} />
        <meta name="twitter:title" content={translation.Seo.title} />
      </Helmet>
      <Logo handleScroll={handleScroll} />
      <Stack
        component={"ul"}
        margin={"0px"}
        gap={{ mobile: "12px", tablet: "32px", desktop: "300px" }}
        bgcolor={{ mobile: "primary.main", tablet: "primary.light" }}
        padding={{
          mobile: "35px 13px 56px 13px",
          desktop: "0px 50px 0px 90px",
        }}
      >
        {translation.Profile.map((profile, i) => (
          <Profile
            key={profile.id}
            profileId={profile.id}
            image_Profile={profile.image_Profile}
            imageProfileLogo={profile.imageProfileLogo}
            en_name={profile.en_name}
            heb_name={profile.heb_name}
            typeRule={profile.typeRule}
            aboutPerson={profile.aboutPerson}
            elementRef={(el) => (profileRefs.current[i] = el)}
          />
        ))}
      </Stack>
      <Stack
        display={{ mobile: "none", tablet: "flex" }}
        padding={"400px 44px 55px 44px"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Stack height={"75vh"} width={"100%"}>
          <Stack
            component={"img"}
            src={"/assets/images/Profile/MeetingOfficeOutside.webp"}
            alt={"Meeting Office Outside"}
            sx={{
              borderRadius: "14px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "875px",
            }}
          />
        </Stack>
        <Stack height={"75vh"} width={"100%"} alignItems={"flex-end"}>
          <Stack
            component={"img"}
            src={"/assets/images/Profile/MeetingOffice.webp"}
            alt={"Meeting In Office"}
            display={{ mobile: "none", tablet: "flex" }}
            sx={{
              borderRadius: "14px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "875px",
            }}
          />
        </Stack>
        <Stack height={"auto"} width={"100%"} alignItems={"center"}>
          <Stack
            component={"img"}
            src={"/assets/images/Profile/allWorkers.webp"}
            alt={"All Workers"}
            display={{ mobile: "none", tablet: "flex" }}
            sx={{
              borderRadius: "14px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "875px",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
