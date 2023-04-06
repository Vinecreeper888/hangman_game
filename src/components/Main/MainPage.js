import React, { useEffect, useState } from "react";
import classes from "./MainPage.module.css";
import Blanks from "./Blanks";
import Hangman from "./Hangman";
import Keyboard from "./Keyboard";
import { fetchMovieTitles } from "../../store/movie-actions";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  // const DUMMY_DATA = [
  //   {
  //     title: "M3GAN",
  //     category: "Hollywood",
  //     length: 5,
  //   },
  //   {
  //     title: "Top Gun: Maverick",
  //     category: "Hollywood",
  //     length: 17,
  //   },
  //   {
  //     title: "Shazam",
  //     category: "Hollywood",
  //     length: 6,
  //   },
  // ];

  const dispatch = useDispatch();
  const [letterClicked, setLetterClicked] = useState(null);
  const randomMovieGenerator = useSelector(state => state.letters.movieDetails);
  const reduxCount = useSelector(state => state.letters.count);
  

  
  useEffect(() => {
    dispatch(fetchMovieTitles());
  },[dispatch]);
  

  const onLetterClickedHandler = (letter) => {
    setLetterClicked(letter);
  };

  return (
    <div className={classes.movieTitle}>
      {/* <Stats/> */}
      <div className={classes.blanks}>
        <Blanks letter={letterClicked} generatedMovie={randomMovieGenerator}/>
      </div>
      <Hangman count={reduxCount}/>
      <Keyboard
        letterClicked={onLetterClickedHandler}
      />
    </div>
  );
};

export default MainPage;
