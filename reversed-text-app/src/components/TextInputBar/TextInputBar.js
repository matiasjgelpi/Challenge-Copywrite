import { useState } from "react";
import {useDispatch} from "react-redux";
import { reverseText } from "../../redux/actions/index";
import { Box, TextField, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export default function TextInputBar() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setError("")
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 1) {
      setError("Write some text before send please");
    } else {
      dispatch(reverseText(input));
      setInput("");
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "pink",
      }}
      color="transparent"
    >
      <Box
        component="form"
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
          sx={{ width: "80%", marginRight: "1rem" }}
          value={input}
          onChange={handleChange}
          error={error !== ""}
          helperText={error}
        ></TextField>
        <Button color="info" variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </Box>
    </AppBar>
  );
}
