import {Box, TextField, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function TextInputBar() {
  return (
    <AppBar position="static"
    sx={{
        backgroundColor: "pink",
    }}
    color="transparent" >
 
        <Box component="form"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={1}
        >
          <TextField
          type="text"
          color="info"
          label="Enter text to reverse"
          variant="outlined"
          sx={{width: "80%", marginRight: "1rem"}}
          ></TextField>
          <Button color="info" variant="contained">Send</Button>
        </Box>

    </AppBar>
  );
}
