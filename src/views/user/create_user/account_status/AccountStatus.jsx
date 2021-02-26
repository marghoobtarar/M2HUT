import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Profile from '../profile/Profile';
function AccountStatus(props) {
    useEffect(()=>{
    },[])
//  **************************all state variables
const submitData = e=>{
    e.preventDefault()
   props.completeBtn(e)
}  

  return (
  
                <form onSubmit={e=>submitData(e)}>
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
                     <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>register name</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData['registerName']} name="registerName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-100">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>company name</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)}value={props.userData.companyName}  name="companyName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-200">
                          <div className="col-xs-12 col-sm-6">
                            <label>Account status</label>
                            <label className="switch">
                              <input type="checkbox" id="togBtn" onChange={e=>props.createUserData(e)}checked={props.userData.accountStatus} name='accountStatus' />
                              <div className="slider round"></div>
                            </label>
                          </div>
                        </div>
                  
                         
                    </div>
                  </div>
                  {/* <div className="col-xs-12 col-sm-3"> */}
                  <Profile image={props.userData.image} picChange={e=>props.createUserData(e)} propgressBtnComponent={<input type='submit'style={{cursor:'pointer'}} className="btn btn-create ripple" value={'Complete'}/>}/>

                  {/* </div> */}
                </div>
                </form>
           
  );
}
AccountStatus.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AccountStatus);
