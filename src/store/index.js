import { configureStore } from "@reduxjs/toolkit";
import  fetchLettersReducer  from "../store/fetchLettersReducer";
import updatePlayerDataReducer from "./updatePlayerDataReducer";


const store = configureStore({
    reducer: {letters: fetchLettersReducer, playerData: updatePlayerDataReducer}
});

export default store;