import jsonProfile from "./../../Data/Profile.json";
import { Stack, Typography } from "@mui/material";
import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  const contactInfo = [
    { label: "משרד:", info: jsonProfile.forPageContact.contextOffice },
    { label: "דואר:", info: jsonProfile.forPageContact.contextPost },
    { label: "מייל:", info: jsonProfile.forPageContact.contextEmail },
    { label: "טלפון:", info: jsonProfile.forPageContact.contextPhone },
  ];
  return (
    <Stack gap={{ mobile: "72px", tablet: "" }}>
      <Stack
        padding={{ mobile: "80px 0px", tablet: "80px 0px" }}
        alignItems={"center"}
        gap={{ mobile: "56px", tablet: "" }}
      >
        <Stack
          component={"img"}
          src={"/Images/Logo/contact-page-logo.svg"}
          alt={"RGB logo"}
          width={{ mobile: "110px", tablet: "390px" }}
        />
        <Stack
          component={"ul"}
          alignItems={"center"}
          margin={"0px"}
          maxWidth={{ mobile: "320px", tablet: "initial" }}
          padding={"0px"}
          sx={{
            "li:nth-of-type(3)": {
              textDecoration: "underline",
              textDecorationColor: "#765330",
            },
            "li:nth-of-type(4)": {
              textDecoration: "underline",
              textDecorationColor: "#765330",
            },
          }}
        >
          {contactInfo.map((c) => (
            <Label key={c.label} props={c} />
          ))}
        </Stack>
      </Stack>
      <ContactForm />
    </Stack>
  );
};

const Label = ({ props }) => (
  <Stack component={"li"} sx={{ listStyle: "none" }}>
    <Typography
      fontSize={{ mobile: "18px", tablet: "40px" }}
      color={"primary.main"}
      textAlign={"center"}
    >
      <span style={{ fontWeight: 600 }}>{props.label}</span> {props.info}
    </Typography>
  </Stack>
);

export default ContactPage;
