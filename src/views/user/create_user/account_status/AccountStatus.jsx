import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Profile from '../profile/Profile';
function AccountStatus(props) {
    useEffect(()=>{
    },[])
//  **************************all state variables
const [educationalInfo, setEducationalInfo]=useState(false)
const [accountStatus, setAccountStatus] = useState(false)
// **************************end state variables

    // *******************all function 

const progressBtn = e =>{
  if(educationalInfo){
    setAccountStatus(true)
  }
  else{
    setEducationalInfo(true)
    setAccountStatus(false)

  }
}
  return (
  
                <form>
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
   
                
                     <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>register name</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="registerName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-100">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>company name</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="companyName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-200">
                          <div className="col-xs-12 col-sm-6">
                            <label>Account status</label>
                            <label className="switch">
                              <input type="checkbox" id="togBtn" onChange={e=>props.createUserData(e)} name='accountStatus' />
                              <div className="slider round"></div>
                            </label>
                          </div>
                        </div>
                  
                         
                    </div>
                  </div>
                  {/* <div className="col-xs-12 col-sm-3"> */}
                  <Profile propgressBtnComponent={<a onClick={e=> props.progressBtn(e)}style={{cursor:'pointer'}} className="btn btn-create ripple">Proceed</a>}/>

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
