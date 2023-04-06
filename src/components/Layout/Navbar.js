import classes from "./MainHeader.module.css";
import { Icons } from "./icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

//load the icons to library
library.add(...Icons);

const MainHeader = () => {

const history = useNavigate();

const profileHandler = () => {
    history("/profile");
}

const homepageHandler = () => {
    history("/");
}

const statsHandler = () => {
  history("/stats");
}

  return (
    <nav>
      <div>
        <ul>
          <li className={classes.hamburgerMenu}>
            <FontAwesomeIcon icon="fa-solid fa-bars" size="2xl" />
          </li>
          <h1 className={classes.header} onClick={homepageHandler}>HANGMAN</h1>
          <li className={classes.settings}>
            {/* <p className={classes.description}>Settings</p> */}
            <FontAwesomeIcon icon="fa-solid fa-gear" size="2xl" />
          </li>
          <li className={classes.stats}>
            {/* <p className={classes.description}>Stats</p> */}
            <FontAwesomeIcon icon="fa-solid fa-chart-column" size="2xl"  onClick={statsHandler}/>
          </li>
          <li className={classes.profile}>
            {/* <p className={classes.description}>Profile</p> */}
            <FontAwesomeIcon icon="fa-solid fa-user" size="2xl" onClick={profileHandler}/>
          </li>
        </ul>
      </div>
      <hr />
    </nav>
  );
};

export default MainHeader;
