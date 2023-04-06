import React from "react";
import Navbar from "./Navbar";
import classes from "../Layout/Layout.module.css";


const Layout = (props) => {
    return(
        // all the layout structure goes here
        // <div className="parent-container">
        //     {props.children}
        // </div>
        <React.Fragment>
            <Navbar/>
            <main className={classes.main}>{props.children}</main>
        </React.Fragment>
    );
}

export default Layout;