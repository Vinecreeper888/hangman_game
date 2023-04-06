import classes from "./Blanks.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPlayerDataReducerActions } from "../../store/updatePlayerDataReducer";

const Blanks = (props) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  //RETRIEVE DATA
  const movieName = props.generatedMovie.join("").toUpperCase();
  const movieToBeBrokenDown = props.generatedMovie.map((element) =>
    element.replace(/\w/gi, "_")
  );
  const movieLength = props.generatedMovie.join("").length;
  const resetFillBlanksArr = useSelector((state) => state.playerData.resetFillBlanksArr);
  let fillBlanksArr;
  //let new_movie = useMemo(() => movieToBeBrokenDown.join(""),[movieToBeBrokenDown]);
  // let fillBlanksArr;
  // if(resetFillBlanksArr) {
  //   fillBlanksArr.splice(0);
  // } else {
  //   fillBlanksArr =  [...movieToBeBrokenDown.join("")];
  // }

  //let fillBlanksArr = useSelector(state => state.playerData.fillBlanksArr);
  //let fillBlanksArr2 = [...fillBlanksArr];
  console.log(fillBlanksArr);
  console.log("Movie to be broken down: ", movieToBeBrokenDown);
  console.log(movieName);
  const lettersTyped = useSelector((state) => state.letters.incomingLettersArr);
  const reduxCount = useSelector((state) => state.letters.count);
  let wrongLettersArray = [];
  console.log(lettersTyped);

  //returns array with indices containing the same letter
  const getIndexes = (movie, letterTyped) => {
    let index = [];
    for (let i = 0; i < movieLength; i++) {
      if (movie[i] === letterTyped) {
        index.push(i);
      }
    }
    return index;
  };

  //all incorrect letters are pushed into wrongLettersArray
  const populateWrongLettersArray = (letter) => {
    if (!movieName.includes(letter) && !wrongLettersArray.includes(letter)) {
      wrongLettersArray.push(letter);
    }
    if (wrongLettersArray.length > 7) {
      console.log("I print cuz many tries!");
    }
  };

  //TODO
  //3) Blend all phases and commit to repo -> PENDING
  //4) Host it (primary game features are on priority)

  //NEW TODO
  //1. Sporadic non population of letters (caused by the for loop conditions) -> fixed for now
  //2. Every refresh should reset the fillBlanksArr -> DONE WITH TEMPORARY FIX 
  //5. Authentication -> LAST
  try {
    if (!resetFillBlanksArr) {
      fillBlanksArr = [...movieToBeBrokenDown.join("")];
      if (reduxCount < 8) {
        console.log("redux count is now", reduxCount);
        for (let i = 0; i < movieName.length * 2; i++) {
          populateWrongLettersArray(lettersTyped[i]);
          if (movieName.includes(lettersTyped[i])) {
            let index = getIndexes(movieName, lettersTyped[i]);
            for (let idx of index) {
              fillBlanksArr[idx] = lettersTyped[i];
            }
          }
        }
      }
    } else {
      window.location.reload();
    }
  } catch (error) {
    console.log(error);
  }

  useEffect(() => {
    if (reduxCount >= 8) {
      console.log("STOP PLAYING SINCE YOU REACHED THE END");
      dispatch(fetchPlayerDataReducerActions.incrementPlayedCounter());
      dispatch(fetchPlayerDataReducerActions.incrementLossesCounter());
      dispatch(fetchPlayerDataReducerActions.calculateWinPercentage());
      dispatch(fetchPlayerDataReducerActions.toggleIsStreakBroken());
      dispatch(fetchPlayerDataReducerActions.incrementMaxStreak());
      dispatch(fetchPlayerDataReducerActions.resetCurrentStreak());
      dispatch(
        fetchPlayerDataReducerActions.toggleCurrentGameWonOrLost("loss")
      );
      dispatch(fetchPlayerDataReducerActions.toggleGameComplete());
      dispatch(fetchPlayerDataReducerActions.addToPlayerDataArr());
      history("/stats");
    } else if (movieName !== "" && movieName === fillBlanksArr.join("")) {
      console.log("YOU WIN!!");
      dispatch(fetchPlayerDataReducerActions.incrementWinsCounter());
      dispatch(fetchPlayerDataReducerActions.incrementCurrentStreak());
      dispatch(fetchPlayerDataReducerActions.incrementMaxStreak());
      dispatch(fetchPlayerDataReducerActions.incrementPlayedCounter());
      dispatch(fetchPlayerDataReducerActions.calculateWinPercentage());
      dispatch(fetchPlayerDataReducerActions.toggleCurrentGameWonOrLost("won"));
      dispatch(fetchPlayerDataReducerActions.toggleGameComplete());
      dispatch(fetchPlayerDataReducerActions.toggleShowConfetti());
      dispatch(fetchPlayerDataReducerActions.addToPlayerDataArr());
      history("/stats");
    }
  }, [reduxCount, fillBlanksArr, dispatch, history, movieName]);

  console.log(fillBlanksArr);
  console.log("wrong letters array:", wrongLettersArray);
  console.log("Redux count", reduxCount);
  return (
    <div className={classes.blankMovie}>
      <span className={classes.blanks}>{fillBlanksArr}</span>
      <br />
    </div>
  );
};

export default Blanks;
