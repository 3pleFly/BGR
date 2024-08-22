import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { ControlledInput } from "../../../Components/ControlledInput";
import { ControlledTextarea } from "../../../Components/ControlledTextarea";
import { useTranslation } from "../../../Hooks/useTranslation";
import emailjs from "@emailjs/browser";
import { Environment } from "../../../Core/constants";

emailjs.init(Environment.EMAILJS_KEY);

const RESPONSE_MESSAGE_TIME = 15000;

const formInitialState = {
  name: "",
  phone: "",
  reason: "",
};

export const ContactForm = () => {
  const translation = useTranslation();
  const formTranslation = translation.forPageContact.form;

  const [response, setResponse] = useState(null);

  const inputRefs = useRef([]);

  const [formData, setFormData] = useState(formInitialState);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      reason: formData.reason.trim() === "",
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      const serviceId = Environment.EMAILJS_SERVICE_ID;
      const templateId = Environment.EMAILJS_TEMPLATE_ID;

      try {
        await emailjs.send(serviceId, templateId, {
          name: formData.name,
          reason: formData.reason,
          phone: formData.phone,
          date: new Date().toLocaleDateString(),
        });

        setResponse({ success: true });
        setFormData(formInitialState);
      } catch (error) {
        setResponse({ error: true });
        console.log(error);
      }
    } else {
      if (newErrors.name) inputRefs.current[0]?.focus();
      else if (newErrors.phone) inputRefs.current[1]?.focus();
      else newErrors.reason && inputRefs.current[2]?.focus();
    }
  };

  useEffect(() => {
    if (response)
      setTimeout(() => {
        setResponse(null);
      }, RESPONSE_MESSAGE_TIME);
  }, [response]);

  return (
    <Stack
      component="form"
      padding={{ mobile: "0px 18px 0px 30px", tablet: "0px 50px 0px 0px" }}
      gap={{ mobile: "24px", tablet: "30px" }}
      alignItems={"center"}
      onSubmit={handleSubmit}
      width={"100%"}
    >
      <Stack position={"relative"}>
        <Typography
          fontSize={{ mobile: "24px", tablet: "32px" }}
          fontWeight={600}
          color="primary.main"
          textAlign="center"
        >
          {formTranslation.title}
        </Typography>
        {response?.success && (
          <Typography
            role={"alert"}
            aria-live="assertive"
            position={"absolute"}
            bottom={"-30px"}
            right={"50%"}
            margin={"0 auto"}
            variant="caption"
            fontSize={{ mobile: "15px", tablet: "20px" }}
            whiteSpace={"nowrap"}
            fontWeight={600}
            color="primary.main"
            sx={{ transform: "translateX(50%)" }}
          >
            הפניה נשלחה!
          </Typography>
        )}
        {response?.error && (
          <Typography
            role={"alert"}
            aria-live="assertive"
            position={"absolute"}
            bottom={"-30px"}
            right={"50%"}
            fontSize={{ mobile: "15px", tablet: "20px" }}
            variant="caption"
            fontWeight={600}
            whiteSpace={"nowrap"}
            color="error.main"
            paddingRight={"15px"}
            sx={{ transform: "translateX(50%)" }}
          >
            קרתה תקלה, אנא נסו מאוחר יותר
          </Typography>
        )}
      </Stack>
      <Stack
        gap={{ mobile: "28px", tablet: "32px" }}
        maxWidth={"500px"}
        width={"100%"}
      >
        <Stack gap={{ mobile: "32px", tablet: "40px" }}>
          <ControlledInput
            placeholder={formTranslation.name}
            inputRef={(ref) => (inputRefs.current[0] = ref)}
            sx={{ borderColor: errors.name ? "error.main" : "primary.main" }}
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            helperText={formTranslation.required}
          />
          <ControlledInput
            placeholder={formTranslation.phone}
            inputRef={(ref) => (inputRefs.current[1] = ref)}
            sx={{ borderColor: errors.phone ? "error.main" : "primary.main" }}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            helperText={formTranslation.required}
          />
          <ControlledTextarea
            inputRef={(ref) => (inputRefs.current[2] = ref)}
            placeholder={formTranslation.reason}
            sx={{ borderColor: errors.reason ? "error.main" : "primary.main" }}
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            error={errors.reason}
            helperText={formTranslation.required}
          />
        </Stack>
        <Button
          type="submit"
          variant={"primary"}
          sx={{
            alignSelf: "flex-end",
            width: "78px",
            height: { mobile: "29px", tablet: "48px" },
            fontSize: { mobile: "16px", tablet: "24px" },
            fontWeight: 600,
          }}
        >
          {formTranslation.send}
        </Button>
      </Stack>
    </Stack>
  );
};
