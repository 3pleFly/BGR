import { ButtonBase, Stack, Typography } from "@mui/material";
import { useState } from "react";
import jsonProfile from "./../../../Data/Profile.json";
import { ControlledInput } from "../../../Components/ControlledInput";
import { ControlledTextarea } from "../../../Components/ControlledTextarea";

export const ContactForm = () => {
  const translation = jsonProfile.forPageContact.form;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    reason: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      reason: formData.reason.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  return (
    <Stack
      component="form"
      padding={{ mobile: "0px 18px 55px 30px", tablet: "" }}
      gap={{ mobile: "18px", tablet: "24px" }}
      onSubmit={handleSubmit}
    >
      <Typography
        fontSize={{ mobile: "24px", tablet: "32px" }}
        fontWeight={600}
        color="primary.main"
        textAlign="center"
      >
        {translation.title}
      </Typography>
      <Stack gap={{ mobile: "28px", tablet: "32px" }}>
        <Stack gap={{ mobile: "32px", tablet: "40px" }}>
          <ControlledInput
            placeholder={translation.name}
            sx={{ borderColor: errors.name ? "error.main" : "primary.main" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={translation.required}
          />
          <ControlledInput
            placeholder={translation.phone}
            sx={{ borderColor: errors.phone ? "error.main" : "primary.main" }}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={translation.required}
          />
          <ControlledTextarea
            placeholder={translation.reason}
            sx={{ borderColor: errors.reason ? "error.main" : "primary.main" }}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            error={errors.reason}
            helperText={translation.required}
          />
        </Stack>
        <ButtonBase
          type="submit"
          sx={{
            alignSelf: "flex-end",
            bgcolor: "primary.main",
            color: "primary.light",
            borderRadius: "15px",
            fontWeight: 600,
            alignItems: "center",
            justifyContent: "center",
            width: "78px",
            height: { mobile: "29px", tablet: "48px" },
          }}
        >
          {translation.send}
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
