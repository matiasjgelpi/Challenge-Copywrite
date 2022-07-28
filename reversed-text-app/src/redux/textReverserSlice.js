import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


const textReverseSlice = createSlice({
    name: 'textReverse',
    initialState: [],
    reducers: {
        async reversedTextAdded (state, action) {
            // console.log(state[0]);
            
            let response = await axios(`http://localhost:4000/iecho?text=${action.payload}`)
            
        
            console.log(response.data)
            // const text = response.data
            state.push(response.data.text)
        }
        
    }
})
  

  export const {reversedTextAdded} = textReverseSlice.actions;
  export default textReverseSlice.reducer;