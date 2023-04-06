import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomingLettersArr: [],
  movieDetails: [],
  pauseCount: false,
  count: 0
};


const fetchLettersReducer = createSlice({
  name: "fetchLetters",
  initialState: initialState,
  reducers: {
    addToIncomingLettersArr(state, action) {
      state.incomingLettersArr.push(action.payload);
    },
    addToMovieDetails(state, action) {
      state.movieDetails.push(action.payload);
    },
    //FIX THIS
    compareMovieAndUpdateCount(state,action) {
      const randomMovieGenerator = state.movieDetails.join("").toUpperCase();
      if(!(randomMovieGenerator.includes(action.payload))) {
        state.count += 1;
      }
    }
  },
});

export const fetchLettersReducerActions = fetchLettersReducer.actions;
export default fetchLettersReducer.reducer;




// compareMovieAndUpdateCount(state,action) {
//     if(!action.payload.includes(state.incomingLettersArr)) {
//         state.count += 1;
//     } 
// },