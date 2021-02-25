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
  
                <form>
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
   
                    {/* <form> */}


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
