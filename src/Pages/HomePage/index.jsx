import { Stack } from "@mui/material";
import { Profile } from "../../Components/Profile";
import LogoComp from "../../Home/LOGO/LogoComp";
import jsonProfile from "./../../Data/Profile.json";
import { Logo } from "./Logo";
import { useRef } from "react";

export const HomePage = () => {
  const profileRefs = useRef([]);

  const handleScroll = () => {
    const element = profileRefs.current[0];
    const yOffset = -100;
    const yPosition =
      element.getBoundingClientRect().top + window.screenY + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  };

  return (
    <Stack>
      <Logo handleScroll={handleScroll} />
      <Stack
        component={"ul"}
        margin={"0px"}
        gap={{ mobile: "12px", tablet: "32px" }}
        bgcolor={{ mobile: "primary.main", desktop: "primary.light" }}
        padding={{
          mobile: "35px 13px 56px 13px",
          desktop: "0px 107px 0px 107px",
        }}
      >
        {jsonProfile.Profile.map((profile, i) => (
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
        padding={"20px 44px 55px 44px"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Stack height={"75vh"} width={"100%"}>
          <Stack
            component={"img"}
            src={"/Images/Profile/MeetingOfficeOutside.png"}
            sx={{
              objectFit: "cover",
              width: "100%",
              maxWidth: "875px",
            }}
          />
        </Stack>
        <Stack height={"75vh"} width={"100%"} alignItems={"flex-end"}>
          <Stack
            component={"img"}
            src={"/Images/Profile/MeetingOffice.png"}
            display={{ mobile: "none", tablet: "flex" }}
            sx={{
              objectFit: "cover",
              width: "100%",
              maxWidth: "875px",
            }}
          />
        </Stack>
        <Stack height={"auto"} width={"100%"} alignItems={"center"}>
          <Stack
            component={"img"}
            src={"/Images/Profile/allWorkers.png"}
            display={{ mobile: "none", tablet: "flex" }}
            sx={{
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
