import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
function EditUser(props) {
    useEffect(()=>{
console.log('editpost.js',props.data)
    },[])
//  **************************all state variables
// **************************end state variables

    // *******************all function 

    const dataChange = e => {
      props.setChangeData(e)
    }
  
      // *******************end function 

  return (
    <div className="wrapper container d-flex align-items-stretch">
        <Sidebar/>  
        <div id="content" class="p-4 p-md-5 pt-5">
        <div class="main-content">
          <div class="row">
            <div class="col-xs-12 col-sm-4">
              <div class="acount-status-div">
                <h3>Account Status</h3>
                <span class="active-badge">Active</span>
                <div class="profile_holder">
                  <img src="img/take-img.png" class="mr-auto ml-auto" alt="image" />
                </div>
                <div class="profile_name mb-4">
                  <div class="upload-btn-wrapper">
                    <button class="btn">Choose picture</button>
                    <input type="file" name="myfile" />
                  </div>
                </div>
                <small>Name</small>
                <strong>Ceta Administrator</strong>
                <small>Gender</small>
                <strong>Male</strong>
                <small>Date of Birth</small>
                <strong>18 Feb 2011</strong>
                <button type="submit" class="btn btn-update ripple mt-150">Deactivate</button>
                <button type="submit" class="btn btn-Suspend ripple">Suspend</button>
              </div>
            </div>
            <div class="col-xs-12 col-sm-8">
              <div class="edit-profile-sec">
                <h3>Edit Information</h3>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>First Name</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>Second Name</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>IDENTITY NUMBER</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>PASSPORT NUMBER</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>GENDER</label>
                      <select name="cars" class="custom-select">
                        <option selected>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>DATE OF BIRTH</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>PHONE NUMBER</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>CELL PHONE</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>EMAIL ACCOUNT</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-12">
                    <div class="input-field">
                      <label>STREET ADDRESS</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>CITY</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>ZIP CODE</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>COUNTRY</label>
                      <select name="cars" class="custom-select">
                        <option selected>Custom Select Menu</option>
                        <option value="volvo">Volvo</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-6">
                    <div class="input-field">
                      <label>ACCOUNT PASSWORD</label>
                      <input type="text" class="form-controls" name="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer ">
          <ul class="d-flex list-none justify-content-between">
            <li><a href="#"><img src="img/M2hut-logo.png" alt="image" /></a></li>
            <li><small>© M2Engineering, South Africa</small></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(EditUser);
