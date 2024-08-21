import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "../../Hooks/useTranslation";
import { Link } from "react-router-dom";
import { useReplacePhonePrefix } from "../../Hooks/useReplacePhonePrefix";

const Footer = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("tablet"));

  const translation = useTranslation();

  const contactDetails = [
    { label: "מייל", info: translation.email, type: "mail" },
    { label: "טלפון", info: translation.phone, type: "tel" },
    { label: "פקס", info: translation.fax, type: "fax" },
    {
      label: "משרד",
      info: " מגדל הכשרת-היישוב. קומה 27. רח' ז'בוטינסקי 9 בני ברק",
    },
    { label: "דואר", info: "ת.ד 2163, בני ברק, ישראל, 5112101" },
  ];

  return (
    <Stack
      bgcolor={"primary.main"}
      overflow={"hidden"}
      padding={{ mobile: "0px 13px 50px 13px" }}
      paddingTop={{ mobile: "24px", tablet: "48px" }}
      gap={{ mobile: "20px" }}
      alignItems={"center"}
    >
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        gap={{ mobile: "12px" }}
      >
        <Stack
          component={"img"}
          src={"/assets/images/Profile/BGRLogoSmall.png"}
          alt="BGR logo"
          sx={{
            marginTop: "5px",
            width: { mobile: "150px", tablet: "300px", laptop: "auto" },
            height: { mobile: "64px", tablet: "145px", laptop: "185px" },
            objectFit: "contain",
          }}
        />
        <Stack fontSize={{ mobile: "18px", laptop: "26px" }} fontWeight={500}>
          {contactDetails.map((c, i) => (
            <ContactLabel props={c} key={i} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

const ContactLabel = ({ props }) => {
  const { replace } = useReplacePhonePrefix();

  const getProps = (type) => {
    switch (type) {
      case "mail":
        return "mailto:";
      case "tel":
        return "tel:";
      case "fax":
        return "fax:";

      default:
        return "";
    }
  };

  const isPhoneOrFax = props.type === "tel" || props.type === "fax";

  return (
    <Typography
      component={props.type ? Link : "p"}
      to={`${getProps(props.type)}${props.info.replaceAll("-", "")}`}
      fontSize={"inherit"}
      fontWeight={"inherit"}
      color={"primary.light"}
      sx={{ textDecoration: "none" }}
    >
      <span style={{ fontWeight: 700 }}>{props.label}:</span>{" "}
      {isPhoneOrFax ? replace(props.info) : props.info}
    </Typography>
  );
};
export default Footer;
