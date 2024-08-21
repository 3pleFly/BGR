import { Stack } from "@mui/material";

export const Image = ({ src, alt, width, height, sx }) => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} sx={{ img: { ...sx } }}>
      <img src={src} alt={alt} width={width} height={height} />
    </Stack>
  );
};
