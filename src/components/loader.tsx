import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => {
  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={300} />
    </Box>
  );
};
