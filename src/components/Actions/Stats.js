import BarGraph from "../Charts/BarGraph";
import classes from "./Stats.module.css";
import Confetti from "react-confetti";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendPlayerData, fetchPlayerData
} from "../../store/movie-actions";
import { useNavigate } from "react-router-dom";
import { fetchPlayerDataReducerActions } from "../../store/updatePlayerDataReducer";

const Stats = () => {
  const playerObj = useSelector((state) => state.playerData.playerData);
  const playerObjArr = useSelector((state) => state.playerData.playerDataArr);
  const dispatch = useDispatch();
  const history = useNavigate();
  let playerDataFromFirebase;

  const playAgainHandler = () => {
    dispatch(fetchPlayerDataReducerActions.toggleResetFillBlanksArr());
    history("/main");
  };

  useEffect(() => {
    dispatch(sendPlayerData(playerObjArr[0]));
    //setIsFetched(true);
  }, [dispatch,playerObjArr]);


  useEffect(() => {
    dispatch(fetchPlayerData())
  },[dispatch]);
  
  playerDataFromFirebase = useSelector(state => state.playerData.retrievePlayerDataFromDatabase);
  console.log(playerDataFromFirebase[1]);


  return (
    <div className={classes.modalContainer}>
      {playerObj.showConfetti && (
        <Confetti
          width="600rem"
          height="150rem"
          numberOfPieces={1200}
          recycle={false}
          friction={1.0}
        />
      )}
      <h1>STATISTICS</h1>
      <div className={classes.statsContainer}>
        <div className={classes.totalPlayed}>
          <p className={classes.stats}>{playerObj.played}</p>
        </div>
        <div className={classes.winP}>
          <p className={classes.stats}>{playerObj.winP}</p>
        </div>
        <div className={classes.currentStreak}>
          <p className={classes.stats}>{playerObj.currentStreak}</p>
        </div>
        <div className={classes.maxStreak}>
          <p className={classes.stats}>{playerObj.maxStreak}</p>
        </div>
      </div>
      <div className={classes.statsHeadersPlayed}>
        <p>Played</p>
      </div>
      <div className={classes.statsHeadersWin}>
        <p>Win %</p>
      </div>
      <div className={classes.statsHeadersStreak}>
        <p>Current</p>
        <p>Streak</p>
      </div>
      <div className={classes.statsHeadersMax}>
        <p>Max Streak</p>
      </div>
      <div className={classes.graphs}>
        <p>GUESS DISTRIBUTION</p>
        <BarGraph />
      </div>
      <div className={classes.playAgainButton}>
        <button onClick={playAgainHandler}>Play Again?</button>
      </div>
    </div>
  );
};

export default Stats;
