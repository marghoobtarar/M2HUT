import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
function EditUser(props) {
    useEffect(()=>{
console.log('viewUser.js')
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
        <Sidebar nav_page={'Users'}/>  
        <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="acount-status-div">
                <h3>Account Status</h3>
                <span className="active-badge">{props.userData.accountStatus?'Active':'Deactivate'}</span>
                <div className="profile_holder">
                  <img src={props.userData.image} className="mr-auto ml-auto" alt="image" />
                </div>
                <div className="profile_name mb-4">
                  <div className="upload-btn-wrapper">
                    <button className="btn">Choose picture</button>
                    <input type="file" name="myfile" />
                  </div>
                </div>
                <small>Name</small>
                <strong>Ceta Administrator</strong>
                <small>Gender</small>
                <strong>Male</strong>
                <small>Date of Birth</small>
                <strong>18 Feb 2011</strong>
                <button type="submit" className="btn btn-update ripple mt-150">Deactivate</button>
                <button type="submit" className="btn btn-Suspend ripple">Suspend</button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="edit-profile-sec">
                <h3>Edit Information</h3>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>First Name</label>
                      <input type="text" value={props.userData.firstName} className="form-controls" name="firstName" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>Second Name</label>
                      <input type="text" className="form-controls"value={props.userData.secondName} name="secondName" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>IDENTITY NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.identityNumber} name="identityNumber" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>PASSPORT NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.passport} name="passport" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>GENDER</label>
                      <select name="cars" className="custom-select" defaultValue={props.userData.gender} name='gender'>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>DATE OF BIRTH</label>
                      <input type="date" className="form-controls" value={props.userData.dob} name="dob" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>PHONE NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.phone} name="phone" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>CELL PHONE</label>
                      <input type="text" className="form-controls"value={props.userData.cell} name="cell" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>EMAIL ACCOUNT</label>
                      <input type="email" className="form-controls"value={props.userData.email} name="email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="input-field">
                      <label>STREET ADDRESS</label>
                      <input type="text" className="form-controls"value={props.userData.address} name="address" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>CITY</label>
                      <input type="text" className="form-controls"value={props.userData.city} name="city" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>ZIP CODE</label>
                      <input type="text" className="form-controls"value={props.userData.zip} name="zip" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>COUNTRY</label>
                      <select name="cars" className="custom-select" defaultValue={props.userData.country } name='country'>
                        <option >Custom Select Menu</option>
                        <option value="volvo">Volvo</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>ACCOUNT PASSWORD</label>
                      <input type="password" className="form-controls" value={props.userData.password} name="password" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
