import classes from "./Keyboard.module.css";
import { useDispatch } from "react-redux";
import { fetchLettersReducerActions } from "../../store/fetchLettersReducer";

const Keyboard = (props) => {
  const dispatch = useDispatch();
  const fillBlankWithLetterClickedHandler = (event) => {
    console.log(event.target.innerText);
    let elementId = document.getElementById(event.target.innerHTML);
    //console.log(elementId);
    elementId.classList.add(classes.changeColor); 
    event.preventDefault();
    props.letterClicked(event.target.innerText);
    dispatch(
      fetchLettersReducerActions.addToIncomingLettersArr(event.target.innerText)
    );
    dispatch(
      fetchLettersReducerActions.compareMovieAndUpdateCount(
        event.target.innerText
      )
    );
  };

  return (
    <div className={classes.keyboardCont}>
        <div className={classes.keyboardCont}>
            <div>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="1">1</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="2">2</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="3">3</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="4">4</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="5">5</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="6">6</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="7">7</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="8">8</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="9">9</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="0">0</button>
            </div>
            <div className={classes.firstRow}>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="q">q</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="w">w</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="e">e</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="r">r</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="t">t</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="y">y</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="u">u</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="i">i</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="o">o</button>
                <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="p">p</button>
            </div>
            <div className={classes.secondRow}>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="a">a</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="s">s</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="d">d</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="f">f</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="g">g</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="h">h</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="j">j</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="k">k</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="l">l</button>
            </div>
            <div>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="z">z</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="x">x</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="c">c</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="v">v</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="b">b</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="n">n</button>
            <button className={classes.keyboardButton} onClick={fillBlankWithLetterClickedHandler} id="m">m</button>
            </div>
        </div>
    </div>
  );
};

export default Keyboard;
