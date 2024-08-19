import { Typography, Stack } from "@mui/material";
import { useId } from "react";

export const ControlledTextarea = ({
  placeholder,
  sx,
  name,
  value,
  onChange,
  error,
  helperText,
  inputRef,
}) => {
  const errorId = useId();

  return (
    <Stack
      spacing={1}
      position={"relative"}
      sx={{
        textarea: {
          border: "1px solid",
          borderColor: error ? "error.main" : "primary.main",
          borderRadius: "14px",
          bgcolor: "primary.light",
          padding: { mobile: "7px 11px 10px", tablet: "9px 18px 10px" },
          color: "primary.main",
          fontWeight: 600,
          height: { mobile: "103px", tablet: "119px" },
          "::placeholder": {
            color: "primary.main",
            fontWeight: 600,
            fontSize: { mobile: "16px", tablet: "24px" },
            opacity: 1,
            height: { mobile: "36px", tablet: "42px" },
          },
          ":focus": {
            outline: "1px solid",
            outlineColor: error ? "error.main" : "primary.main",
          },
          ...sx,
        },
      }}
    >
      <textarea
        id={name}
        ref={inputRef}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-label={placeholder}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        variant="standard"
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
