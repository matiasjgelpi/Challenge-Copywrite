import axios from "axios";

export const REVERSE_TEXT = "REVERSE_TEXT";

export const reverseText = (text) => {
  // const response = await axios(`http://localhost:4000/iecho?text=${text}`);
  return {
    type: REVERSE_TEXT,
    payload: text,
  };
};
