import { Button } from "@mui/material";
import { Box } from "@mui/system";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.profile}>
      <h1 className={classes.h1}>PROFILE</h1>
      <section className={classes.sectionContainer}>
        <form className={classes.formContainer}>
          <div className={classes.fields}>
            <label htmlFor="name">NAME</label>
            <input type="text" placeholder="SIDDHANTH" />
          </div>
          <div className={classes.fields}>
            <label htmlFor="email">EMAIL</label>
            <input type="email" placeholder="siddhanth8@gmail.com" />
          </div>
        </form>
        <Box m={1} display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" size="large" sx={{height: 60}}>
            Logout
          </Button>
        </Box>
      </section>
    </div>
  );
};

export default Profile;
