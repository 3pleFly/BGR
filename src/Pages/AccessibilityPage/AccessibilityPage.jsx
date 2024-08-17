import { Stack, Typography } from "@mui/material";
import { useTranslation } from "../../Hooks/useTranslation";

const AccessibilityPage = () => {

  const translation = useTranslation();
  return (
    <Stack padding={{ mobile: "80px 0px", tablet: "80px 0px" }}>
      <Typography className="customAccessibilityStatementTitle">
        {"הצהרת נגישות"}
      </Typography>
      <Typography className="customAccessibilityStatement">
        {translation.forAccessibilityPage.accessibilityStatement}
      </Typography>
    </Stack>
  );
};

export default AccessibilityPage;
