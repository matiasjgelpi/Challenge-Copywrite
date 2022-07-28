export const REVERSE_TEXT = "REVERSE_TEXT";

export const reverseText = (text) => {

    // console.log(text);
    return {
      type: REVERSE_TEXT,
      payload: text,
    };
  };