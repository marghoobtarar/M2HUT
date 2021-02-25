import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
import Profile from './profile/Profile';
function EditUser(props) {
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
const progressBarClick = e =>{
  if(educationalInfo){
    setAccountStatus(true)
  }
  else{
    setEducationalInfo(true)
    setAccountStatus(false)

  }
}
  
      // *******************end function 

  return (
    <div className="wrapper container d-flex align-items-stretch">
        <Sidebar/>  
        <div id="content" className="p-4 p-md-5 pt-5">
      
        <div className="main-content">
          <div className="row">
              <div className="col-xs-12 col-md-1"></div>
              <div className="col-xs-12 col-md-11">
                <ul id="progressbar">
                    <li style={{cursor:'pointer'}} className="active">Personal Information</li>
                    <li  style={{cursor:'pointer'}} className={educationalInfo?'active':''} >Educational information</li>
                    <li style={{cursor:'pointer'}} className={accountStatus?'active':''}>Account Status</li>
                </ul>
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
                    {!educationalInfo && !accountStatus?
                  <form>


{/* *************************first user form****************** */}

                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>First Name</label>
                              <input type="text" className="form-control"onChange={e=>props.createUserData(e)}  name="firstName"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Second Name</label>
                              <input type="text" className="form-control" onChange={e=>props.createUserData(e)} name="secondName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>IDENTITY NUMBER</label>
                              <input type="text" className="form-control"onChange={e=>props.createUserData(e)}  name="identityNumber"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>PASSPORT NUMBER</label>
                              <input type="text" className="form-control"onChange={e=>props.createUserData(e)}  name="passport"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>GENDER</label>
                              <select onChange={e=>props.createUserData(e)} defaultValue='Male' name="gender" className="custom-select">
                                <option value={'Male'} >Male</option>
                                <option value={'Female'}>Female</option>
                                <option value={'Other'}>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>DATE OF BIRTH</label>
                              <input onChange={e=>props.createUserData(e)} type="date" className="form-controls" name="dob" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>PHONE NUMBER</label>
                              <input type="text"onChange={e=>props.createUserData(e)} className="form-controls" name="phone" />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>CELL PHONE</label>
                              <input type="text" className="form-controls" onChange={e=>props.createUserData(e)} name="cell" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>EMAIL ACCOUNT</label>
                              <input type="email" className="form-controls" onChange={e=>props.createUserData(e)}  name="email" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-field">
                              <label>STREET ADDRESS</label>
                              <input type="text" onChange={e=>props.createUserData(e)}className="form-controls" name="address" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>CITY</label>
                              <input type="text" className="form-controls"onChange={e=>props.createUserData(e)} name="city" />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>ZIP CODE</label>
                              <input type="text" className="form-controls" onChange={e=>props.createUserData(e)} name="zip" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>COUNTRY</label>
                              <select onChange={e=>props.createUserData(e)} defaultValue='' name="country" className="custom-select">
                                <option value='' >--Select County--</option>
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
                              <input type="password" className="form-controls" onChange={e=>props.createUserData(e)} name="password" />
                            </div>
                          </div>
                        </div>
                   

{/* ************************end first user form*************** */}
                  </form>
                  :
                  educationalInfo && !accountStatus?
                  <form>
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

{/* ************************** end 2nd form educational info *********** */}
                  </form>

                  
                  :
                  educationalInfo && accountStatus?
                  <form>
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
                  </form>:
                  null
                
                
                }
                  

                         
                    </div>
                  </div>
                  <Profile propgressBtnComponent={<a onClick={e=> progressBtn(e)}style={{cursor:'pointer'}} className="btn btn-create ripple">Proceed</a>}/>
                  {/* <div className="col-xs-12 col-sm-3">
                    <div className="user-img-uplod p-reletive">
                      <strong>Profile Picture</strong>
                      <div className="profile_holder">
                        <img src="img/take-img.png" className="mr-auto ml-auto" alt="image"/>
                      </div>
                      <div className="upload-btn-wrapper">
                        <button className="btn">Choose picture</button>
                        <input type="file" name="myfile"/>
                      </div>
                      <a onClick={e=> progressBtn(e)}style={{cursor:'pointer'}} className="btn btn-create ripple">Proceed</a>
                    </div>
                  </div> */}
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
