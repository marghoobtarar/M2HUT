import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import logo from '../../assets/img/Icon/logo.jpg'
import logout from '../../assets/img/login-nav.png'


// import logo from '../assets/img/logo.png'


function Navbar() {
    useEffect(()=>{

    },[])
   

  return (
  <div>
    <header className="custom-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={logo} alt="icon" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNavDropdown" className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto"></ul>
                <form className="form-inline">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav ml-3">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login <span className="mr-1"><img src={logout} alt="image" width="25px" /></span></a>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    </header>
   </div>
  );
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Navbar);
