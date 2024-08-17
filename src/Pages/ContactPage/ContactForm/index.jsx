import { ButtonBase, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ControlledInput } from "../../../Components/ControlledInput";
import { ControlledTextarea } from "../../../Components/ControlledTextarea";
import { useTranslation } from "../../../Hooks/useTranslation";

export const ContactForm = () => {
  const translation = useTranslation();
  const formTranslation = translation.forPageContact.form;
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
      padding={{ mobile: "0px 18px 0px 30px", tablet: "0px 50px 0px 0px" }}
      gap={{ mobile: "18px", tablet: "24px" }}
      alignItems={"center"}
      onSubmit={handleSubmit}
      width={"100%"}
    >
      <Typography
        fontSize={{ mobile: "24px", tablet: "32px" }}
        fontWeight={600}
        color="primary.main"
        textAlign="center"
      >
        {formTranslation.title}
      </Typography>
      <Stack
        gap={{ mobile: "28px", tablet: "32px" }}
        maxWidth={"500px"}
        width={"100%"}
      >
        <Stack gap={{ mobile: "32px", tablet: "40px" }}>
          <ControlledInput
            placeholder={formTranslation.name}
            sx={{ borderColor: errors.name ? "error.main" : "primary.main" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={formTranslation.required}
          />
          <ControlledInput
            placeholder={formTranslation.phone}
            sx={{ borderColor: errors.phone ? "error.main" : "primary.main" }}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={formTranslation.required}
          />
          <ControlledTextarea
            placeholder={formTranslation.reason}
            sx={{ borderColor: errors.reason ? "error.main" : "primary.main" }}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            error={errors.reason}
            helperText={formTranslation.required}
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
          {formTranslation.send}
        </ButtonBase>
      </Stack>
    </Stack>
  );
};
