import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Profile from '../profile/Profile';
function EditUser(props) {
    useEffect(()=>{
    },[])
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
{/* **************************2nd form educational info ************ */}
<                        div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-feild">
                              <label>Training institution name</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="trainingInstitute"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Phone Number</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="institutePhone"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Facilitator Name</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="facilitatorName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Institution email account</label>
                              <input type="email" className="form-control"onChange={e=>props.createUserData(e)}  name="institutioAccount"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-feild">
                              <label>Street Address</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="instituteAddress"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>City</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="instituteCity"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Zip Code</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="instituteZip"/>
                            </div>
                          </div>
                        </div>
                        
                        <div className="row mb-100">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Country</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="instituteCountry"/>
                            </div>
                          </div>
                        </div>
                        </div>
                  </div>
                  {/* <div className="col-xs-12 col-sm-3"> */}
                  <Profile propgressBtnComponent={<a onClick={e=> props.progressBtn(e)}style={{cursor:'pointer'}} className="btn btn-create ripple">Proceed</a>}/>

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
