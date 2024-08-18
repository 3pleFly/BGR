import { InputBase, Typography, Stack } from "@mui/material";

export const ControlledInput = ({
  placeholder,
  sx,
  name,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <Stack spacing={1} position={"relative"}>
      <InputBase
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        variant="standard"
        sx={{
          border: "1px solid",
          borderColor: error ? "error.main" : "primary.main",
          borderRadius: "14px",
          bgcolor: "primary.light",
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
