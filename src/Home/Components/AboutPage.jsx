import { Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "../../Hooks/useTranslation";

const AboutPage = () => {
  const translation = useTranslation();
  
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          <div>
            <img
              src={"/assets/images/AboutPage/logoAndNames.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/logoAndNames.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              src={"/assets/images/AboutPage/project1.png"}
              alt="Image of the logo and names"
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid black",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <text style={{ fontSize: "80px", color: "#765330" }}>אודות</text>{" "}
            <br />
            <text>Here will be the text</text>
            <br />
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={translation.Icon_Back} alt="Icon Back" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
