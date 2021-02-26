import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Profile from '../profile/Profile';
function EditUser(props) {
    useEffect(()=>{
    },[])
// **************************end state variables

    // *******************all function 

    const submitData = e=>{
        e.preventDefault()
       props.progressBtn(e)
    }  
     

  return (
 
                
            <form onSubmit={e=>submitData(e)}>
                <div className="row">

                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
{/* **************************2nd form educational info ************ */}
<                        div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-feild">
                              <label>Training institution name</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.trainingInstitute}  name="trainingInstitute"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Phone Number</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.institutePhone}  name="institutePhone"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Facilitator Name</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.facilitatorName}  name="facilitatorName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Institution email account</label>
                              <input required type="email" className="form-control"onChange={e=>props.createUserData(e)}value={props.userData.institutioAccount}   name="institutioAccount"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-feild">
                              <label>Street Address</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.instituteAddress}  name="instituteAddress"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>City</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.instituteCity}  name="instituteCity"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Zip Code</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.instituteZip}  name="instituteZip"/>
                            </div>
                          </div>
                        </div>
                        
                        <div className="row mb-100">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Country</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.instituteCountry}  name="instituteCountry"/>
                            </div>
                          </div>
                        </div>
                        </div>
                  </div>
                  {/* <div className="col-xs-12 col-sm-3"> */}
                  <Profile image={props.userData.image} picChange={e=>props.createUserData(e)} propgressBtnComponent={<input type='submit' style={{cursor:'pointer'}} className="btn btn-create ripple"  value='Proceed'/>}/>

                  </div>                    
                  {/* </div> */}
{/* ************************** end 2nd form educational info *********** */}
                  </form>

  );
}
EditUser.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(EditUser);
