import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerData: {
    playerId: 1,
    played: 0,
    wins: 0,
    loss: 0,
    currentStreak: 0,
    maxStreak: 0,
    isStreakBroken: false,
    currentGameWon: false,
    currentGameLost: false,
    winP: 0,
    gameComplete: false,
    showConfetti: false
  },
  guessData: {
    playerId: 1,
    guesses: {
        
    }
  },
  playerDataArr: [],
  retrievePlayerDataFromDatabase: [],
  resetFillBlanksArr: false,
  fillBlanksArr: [],
}; 

const updatePlayerDataReducer = createSlice({
  name: "fetchPlayerData",
  initialState: initialState,
  reducers: {
    incrementPlayedCounter(state) {
      state.playerData.played += 1;
    //   state.values.played += 1;
    },
    incrementWinsCounter(state) {
      state.playerData.wins += 1;
      //state.values.wins += 1;
    },
    incrementLossesCounter(state) {
      state.playerData.loss += 1;
      //state.values.loss += 1;
    },
    incrementCurrentStreak(state) {
      state.playerData.currentStreak += 1;
      //state.values.currentStreak += 1;
    },
    resetCurrentStreak(state) {
       // state.playerData.currentStreak = 0;
        state.playerData.currentStreak = 0;
    },
    incrementMaxStreak(state) {
        if (!state.playerData.isStreakBroken) {
          state.playerData.maxStreak = state.playerData.currentStreak;
        } else {
          //store the current streak
          const storeCurrentStreak = state.playerData.currentStreak;
          //update it to max streak on the event where streak is broken
          state.playerData.maxStreak = storeCurrentStreak;
        }
    },
    calculateWinPercentage(state) {
      //calculate win percentage
        const winP = Math.round(
          (state.playerData.wins / state.playerData.played) * 100
        );
        state.playerData.winP = winP;
    },
    toggleIsStreakBroken(state) {
      state.playerData.isStreakBroken = !state.playerData.isStreakBroken;
    },
    toggleCurrentGameWonOrLost(state, action) {
        if (action.payload === "loss") {
          state.playerData.currentGameLost = !state.playerData.currentGameLost;
        } else if (action.payload === "won") {
          state.playerData.currentGameWon = !state.playerData.currentGameWon;
        }
    },
    toggleGameComplete(state) {
      state.playerData.gameComplete = !state.playerData.gameComplete;
    },
    addToPlayerDataArr(state) {
        //console.log("I am being executed.");
        state.playerDataArr.push(state.playerData);
    },
    toggleShowConfetti(state) {
        state.playerData.showConfetti = !state.playerData.showConfetti;
    },
    addToRetrievePlayerDataFromDatabase(state,action) {
        state.retrievePlayerDataFromDatabase.push(action.payload);
        //state.playerDataArr.push(action.payload);
    },
    toggleResetFillBlanksArr(state) {
        state.resetFillBlanksArr = !state.resetFillBlanksArr;
    },
    fillFillBlanksArr(state,action) {
        console.log(action.payload);
        state.fillBlanksArr.push(action.payload);
    },
    resetFillBlanksArr(state) {
        state.fillBlanksArr.splice(0);
    }
  },
});

export const fetchPlayerDataReducerActions = updatePlayerDataReducer.actions;
export default updatePlayerDataReducer.reducer;
