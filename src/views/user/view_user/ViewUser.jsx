import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
import Footer from '../../../components/footer/Footer';
function EditUser(props) {
    useEffect(()=>{
console.log('viewUser.js')
console.log(props.userData)
    },[])
//  **************************all state variables
// **************************end state variables

    // *******************all function 

    const dataChange = e => {
      props.createUserData(e)
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
                  <img src={`http://127.0.0.1:8000${props.userData.image}`} className="mr-auto ml-auto" alt="image" />
                </div>
                <div className="profile_name mb-4">
                  <div className="upload-btn-wrapper">
                    <button className="btn">Choose picture</button>
                    <input type="file" name="image" onChange={e=>dataChange(e)}  />
                  </div>
                </div>
                <small>Name</small>
                <strong>{props.userData.first_name}</strong>
                <small>Gender</small>
                <strong>{props.userData.gender}</strong>
                <small>Date of Birth</small>
                <strong>{props.userData.dob}</strong>
                {props.userData.accountStatus?
                <button type="submit"  className="btn btn-update ripple mt-150" onClick={e=>dataChange(e)} name="deactivate">
                  Deactivate
                </button>:
                <button type="submit"  className="btn btn-update ripple mt-150" onClick={e=>dataChange(e)} name="activate">
                Activate
                </button>}
                
                <button type="submit" onClick={e=>dataChange(e)} name="suspend" className="btn btn-Suspend ripple">Suspend</button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="edit-profile-sec">
                <h3>Edit Information</h3>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>First Name</label>
                      <input type="text" value={props.userData.first_name} className="form-controls" onChange={e=>dataChange(e)} name="first_name" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>Second Name</label>
                      <input type="text" className="form-controls"value={props.userData.last_name} onChange={e=>dataChange(e)} name="last_name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>IDENTITY NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.identityNumber} onChange={e=>dataChange(e)} name="identityNumber" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>PASSPORT NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.passport} onChange={e=>dataChange(e)} name="passport" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>GENDER</label>
                      <select name="cars" className="custom-select" defaultValue={props.userData.gender} onChange={e=>dataChange(e)} name='gender'>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>DATE OF BIRTH</label>
                      <input type="date" className="form-controls" value={props.userData.dob} onChange={e=>dataChange(e)} name="dob" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>PHONE NUMBER</label>
                      <input type="text" className="form-controls"value={props.userData.phone} onChange={e=>dataChange(e)} name="phone" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>CELL PHONE</label>
                      <input type="text" className="form-controls"value={props.userData.cell} onChange={e=>dataChange(e)} name="cell" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>EMAIL ACCOUNT</label>
                      <input type="email" className="form-controls"value={props.userData.email} onChange={e=>dataChange(e)} name="email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="input-field">
                      <label>STREET ADDRESS</label>
                      <input type="text" className="form-controls"value={props.userData.address} onChange={e=>dataChange(e)} name="address" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>CITY</label>
                      <input type="text" className="form-controls"value={props.userData.city} onChange={e=>dataChange(e)} name="city" />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>Zip CODE</label>
                      <input type="text" className="form-controls"value={props.userData.zip_code}  onChange={e=>dataChange(e)} name="zip_code" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>Country</label>
                      <input type="text" className="form-controls"value={props.userData.country} name="country" onChange={e=>dataChange(e)}/>
                    </div>
                  
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <label>ACCOUNT PASSWORD</label>
                      {console.log(props.userData.passport)}
                      <input disabled type="password" className="form-controls" value={props.userData.password} onChange={e=>dataChange(e)} name="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                  <div className="btnemailupdate">
                      <input style={{maxWidth:'100px',borderRadius:'4px', border:'2px solid green '}} className='btn' type='submit' onClick={e=>props.updateUser(e)} value={'update'} />
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
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
