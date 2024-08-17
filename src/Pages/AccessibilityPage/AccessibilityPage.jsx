import React from "react";
import { Stack, Typography } from "@mui/material";
import jsonProfile from "./../../Data/Profile.json";
import DrawerComp from "../../Home/Components/DrawerComp/DrawerComp";

const AccessibilityPage = () => {
  return (
    <Stack padding={{ mobile: "80px 0px", tablet: "80px 0px" }}>
      <Typography className="customAccessibilityStatementTitle">
        {"הצהרת נגישות"}
      </Typography>
      <Typography className="customAccessibilityStatement">
        {jsonProfile.forAccessibilityPage.accessibilityStatement}
      </Typography>
    </Stack>
  );
};

export default AccessibilityPage;
