import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Results() {

  const results = useSelector((state) => state.textReversed);

  
  console.log(results);
  // useEffect(() => {
    
  // },[Results]);

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
      {
        results.length > 0 && results.map((result) => {
          return <p>{result}</p>
        })
      }
    </Box>
  );
}
