import classes from "./Hangman.module.css";

const Hangman = (props) => {
    let hangmanName;
    let wrongAnswer = false;
    if(props.count > 0 && props.count < 8) {
        wrongAnswer = true;
        hangmanName = `/images/${props.count}.png`;
    }

    return(
        <div className={classes.hangman}>
            {!wrongAnswer ? <img src="/images/0.png" alt="base"/> : <img src={hangmanName} alt={props.count}/>}
        </div>
    );
}

export default Hangman;