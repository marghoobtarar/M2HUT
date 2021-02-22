import React,{useState,useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom'
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import footer from '../../assets/img/M2hut-logo.png'
import  UserContext from '../../Context'
// import logo from '../assets/img/logo.png'


function Navbar() {
  const {
    sideBar,
    setSidebar,
    logged_in,
    setLoggedIn,
    updateState,
  } = useContext(UserContext);
  
    useEffect(()=>{

    },[])

  return (
    <div className="wrapper container d-flex align-items-stretch">
      {!logged_in? <Redirect to='/'/>:null}
        <div id="" className="p-4 p-md-5 pt-5">

            <div className="footer ">
                <ul className="d-flex list-none justify-content-between">
                    <li><a href="#"><img src={footer} alt="image" /></a></li>
                    <li><small>© M2Engineering, South Africa</small></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Navbar);
