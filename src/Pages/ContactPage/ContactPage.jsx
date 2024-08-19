import { Stack, Typography } from "@mui/material";
import { ContactForm } from "./ContactForm";
import { useTranslation } from "../../Hooks/useTranslation";
import { AppMap } from "../../Components/AppMap";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../Core/constants";

const ContactPage = () => {
  const translation = useTranslation();

  const contactInfo = [
    { label: "משרד:", info: translation.forPageContact.contextOffice },
    { label: "דואר:", info: translation.forPageContact.contextPost },
    { label: "מייל:", info: translation.email, type: "mail" },
    { label: "טלפון:", info: translation.phone, type: "tel" },
  ];
  return (
    <Stack
      gap={{ mobile: "55px", tablet: "" }}
      padding={{ mobile: "80px 0px 0px 0px", tablet: "80px 0px" }}
    >
      <Stack gap={{ mobile: "72px", tablet: "" }}>
        <Stack alignItems={"center"} gap={{ mobile: "56px", tablet: "" }}>
          <Link to={AppRoutes.ROOT}>
            <Stack
              component={"img"}
              src={"/assets/images/Logo/contact-page-logo.svg"}
              alt={"RGB logo"}
              width={{ mobile: "110px", tablet: "390px" }}
            />
          </Link>
          <Stack
            component={"ul"}
            alignItems={"center"}
            margin={"0px"}
            maxWidth={{ mobile: "320px", tablet: "initial" }}
            padding={"0px 50px"}
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
        <Stack
          direction={{ mobile: "column", laptop: "row" }}
          gap={{ mobile: "55px", desktop: "94px" }}
        >
          <ContactForm />
          <Stack
            width={"100%"}
            padding={{ mobile: "30px 20px" }}
            marginLeft={{ mobile: "0px", tablet: "20px", desktop: "50px" }}
            bgcolor={"primary.main"}
          >
            <AppMap />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Label = ({ props }) => (
  <Stack component={"li"} sx={{ listStyle: "none" }}>
    <Typography
      component={props.type ? Link : "p"}
      to={props.type === "mail" ? `mailto:${props.info}` : `tel:${props.info}`}
      fontSize={{ mobile: "18px", tablet: "40px" }}
      color={"primary.main"}
      textAlign={"center"}
    >
      <span style={{ fontWeight: 600 }}>{props.label}</span> {props.info}
    </Typography>
  </Stack>
);

export default ContactPage;
