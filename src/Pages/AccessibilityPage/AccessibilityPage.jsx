import { Stack, Typography } from "@mui/material";
import { useTranslation } from "../../Hooks/useTranslation";
import { useParseRichText } from "../../Hooks/useParseRichText";
import { useReplacePhonePrefix } from "../../Hooks/useReplacePhonePrefix";
import { Link } from "react-router-dom";

const AccessibilityPage = () => {
  const translation = useTranslation();

  const { replace } = useReplacePhonePrefix();
  const { parseRichText } = useParseRichText();
  return (
    <Stack
      padding={{ mobile: "80px 54px", tablet: "80px 93px 80px 90px" }}
      gap={{ mobile: "52px", tablet: "56px" }}
    >
      <Stack
        component={"img"}
        src={"/assets/images/Logo/contact-page-logo.webp"}
        alt={"RGB logo"}
        width={{ mobile: "110px", tablet: "390px" }}
        alignSelf={"center"}
      />
      <Stack gap={{ mobile: "36px", tablet: "56px" }}>
        <Typography
          fontSize={{ mobile: "32px", tablet: "40px" }}
          fontWeight={700}
          color={"primary.main"}
        >
          הצהרת נגישות
        </Typography>
        <Stack
          display={"block"}
          fontSize={{ mobile: "15px", tablet: "30px" }}
          maxWidth={"1000px"}
          color={"primary.main"}
          sx={{
            ul: {
              padding: "0px",
              margin: "0px",
              marginRight: "25px",
            },
          }}
        >
          {parseRichText(
            translation.forAccessibilityPage.accessibilityStatement
          )}
          <br />
          <br />
          <Stack>
            <Typography
              component={Link}
              to={`mailto:${translation.email}`}
              color={"primary.main"}
              fontSize={{ mobile: "16px", tablet: "30px" }}
            >
              <strong>דואר:</strong> {translation.email}
            </Typography>
            <Typography
              component={Link}
              to={`tel:${translation.phone}`}
              color={"primary.main"}
              fontSize={{ mobile: "16px", tablet: "30px" }}
            >
              <strong>טלפון:</strong> {replace(translation.phone)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AccessibilityPage;
