import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import image from '../../assets/img/Icon/login.jpg'
import logo from '../../assets/img/logo.png'


function Login() {


  return (
    <div class="container h-100" style={{marginTop:'10%'}}>
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="login-panel">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="login-banner" style={{background:` url(${image})` ,backgroundRepeat:' no-repeat', height: '100%', borderRadius: '20px 0 0 20px', backgroundSize: 'cover', backgroundPosition: 'right'}}>
              
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
           <div class="login-form">
              <div class="login-logo">
                <img src={logo} alt="logo" />
              </div>
              <strong>Welcome</strong>
              <small>Get access to your account</small>
              <form>
                <div class="input-field">
                  <label>Email Address</label>
                  <input type="text" class="form-controls" name=""/>
                </div>
                <div class="input-field">
                  <label>Password</label>
                  <input type="text" class="form-controls" name=""/>
                </div>
                <div class="checkbox custom-checkbox pull-left">
                  <label>
                    <input type="checkbox"/>
                    <span class="checkbox-decorator"><span class="check"></span>
                    </span> Remember me 
                  </label>
                </div>
                <div class="pull-right"><a href="/forgot-password"> Forgot Password ? </a> </div>
                <div class="form-group">
                  <button class="btn btn-info btn-lg btn-block login-btn ripple">Sign In</button>
                </div>
              </form> 
           </div>  
          </div>
        </div>  
      </div>
    </div>
  </div>
  );
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Login);
