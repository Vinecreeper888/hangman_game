import classes from "./Homepage.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate();

  const mainPageHandler = () => {
    history("/main");
  }

  return (
    <div className={classes.homepage}>
      <h1>DEFAULT HOMEPAGE</h1>
      <p>NEW USER ?</p>
      <Button color="secondary" variant="contained" size="large" className={classes.button}>
        SIGNUP
      </Button>
      <p>ALREADY A USER?</p>
      <Button
        color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        onClick={mainPageHandler}
      >
        LOGIN
      </Button>
    </div>
  );
};

export default HomePage;
