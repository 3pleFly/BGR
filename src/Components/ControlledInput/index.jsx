import { Typography, Stack, TextField } from "@mui/material";
import { useId } from "react";

export const ControlledInput = ({
  placeholder,
  sx,
  name,
  value,
  onChange,
  error,
  helperText,
}) => {
  const errorId = useId();

  return (
    <Stack spacing={1} position={"relative"}>
      <TextField
        id={name}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-label={placeholder}
        autoComplete={"off"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={{
          position: "relative",
          bgcolor: "primary.light",
          "&&& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid",
            borderColor: error ? "error.main" : "primary.main",
            borderRadius: "14px",
          },

          ":focus-within": {
            "&&& .MuiOutlinedInput-notchedOutline": {
              border: "2px solid",
              borderColor: error ? "error.main" : "primary.main",
              borderRadius: "14px",
            },
          },
          input: {
            padding: { mobile: "7px 11px 10px", tablet: "9px 18px 10px" },
            color: "primary.main",
            fontWeight: 600,
          },
          "input::placeholder": {
            color: "primary.main",
            fontWeight: 600,
            fontSize: { mobile: "16px", tablet: "24px" },
            opacity: 1,
            height: { mobile: "36px", tablet: "42px" },
          },
          ...sx,
        }}
      />
      {error && (
        <Typography
          id={errorId}
          position={"absolute"}
          bottom={"-20px"}
          variant="caption"
          fontWeight={600}
          color="error.main"
          paddingRight={"15px"}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  );
};
