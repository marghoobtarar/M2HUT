import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
function Navbar(props) {
    useEffect(()=>{

    },[])
const updateNav = e=>{
    props.navUpdate(e)
}
   
  return (
    
            <div className="edit-email-sec">
              <button className= {props.nav ==='email'?'active':''} onClick={e => updateNav('email')}  >Email Setting</button>
              <button className= {props.nav ==='registration'?'active':''} onClick={e => updateNav('registration')}>Registration</button>
              <button className= {props.nav ==='suspension'?'active':''} onClick={e=>updateNav('suspension')}>suspension</button>
            </div>
          
          
 
        
      );
}
Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Navbar);
