import { Box } from "@mui/system";

export default function Results() {
  return (
    <Box
      margin={2}
      height="85vh"
      width="90vw"
      borderRadius="5px"
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "0.5px outset grey",
        boxShadow: "10px 10px 10px grey",
      }}
    >
      Results
    </Box>
  );
}
