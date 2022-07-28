import { REVERSE_TEXT } from "../actions";

const initialState = {
    textReversed: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REVERSE_TEXT:
        return {
          ...state,
          textReversed: [...state.textReversed,action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;