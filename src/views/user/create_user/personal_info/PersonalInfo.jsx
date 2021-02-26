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
const submitData = e=>{
    e.preventDefault()
   props.progressBtn(e)
}  

      // *******************end function 

  return (
  
                <form onSubmit={e=>submitData(e)}>
                <div className="row">
                  <div className="col-xs-12 col-sm-9">
                    <div className="user-form-sec">
   
                    {/* <form> */}


{/* *************************first user form****************** */}

                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>First Name</label>
                              <input required type="text" className="form-control"onChange={e=>props.createUserData(e)}  name="firstName" value={props.userData.firstName} name="firstName"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>Second Name</label>
                              <input required type="text" className="form-control" onChange={e=>props.createUserData(e)} value={props.userData.secondName} name="secondName"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>IDENTITY NUMBER</label>
                              <input required type="text" className="form-control"onChange={e=>props.createUserData(e)} value={props.userData.identityNumber}  name="identityNumber"/>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-feild">
                              <label>PASSPORT NUMBER</label>
                              <input required type="text" className="form-control"onChange={e=>props.createUserData(e)} value={props.userData.passport}  name="passport"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>GENDER</label>
                              <select onChange={e=>props.createUserData(e)} defaultValue='' value={props.userData.gender}  name="gender" className="custom-select">
                              <option value={''} >--Select--</option>

                                <option value={'Male'} >Male</option>
                                <option value={'Female'}>Female</option>
                                <option value={'Other'}>Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>DATE OF BIRTH</label>
                              <input required onChange={e=>props.createUserData(e)} type="date" className="form-controls" value={props.userData.dob}  name="dob" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>PHONE NUMBER</label>
                              <input required type="text"onChange={e=>props.createUserData(e)} className="form-controls"value={props.userData.phone}  name="phone" />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>CELL PHONE</label>
                              <input required type="text" className="form-controls" onChange={e=>props.createUserData(e)} value={props.userData.cell} name="cell" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>EMAIL ACCOUNT</label>
                              <input required type="email" className="form-controls" onChange={e=>props.createUserData(e)} value={props.userData.email} name="email" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12">
                            <div className="input-field">
                              <label>STREET ADDRESS</label>
                              <input required type="text" onChange={e=>props.createUserData(e)}className="form-controls" value={props.userData.address}  name="address" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>CITY</label>
                              <input required type="text" className="form-controls"onChange={e=>props.createUserData(e)} value={props.userData.city}  name="city" />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>ZIP CODE</label>
                              <input required type="text" className="form-controls" onChange={e=>props.createUserData(e)} value={props.userData.zip}  name="zip" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="input-field">
                              <label>COUNTRY</label>
                              <select onChange={e=>props.createUserData(e)} defaultValue='' value={props.userData.country}  name="country" className="custom-select">
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
                              <input required type="password" className="form-controls" onChange={e=>props.createUserData(e)} value={props.userData.password}  name="password" />
                            </div>
                          </div>
                        </div>
                   

{/* ************************end first user form*************** */}
                  
                 
                         
                    </div>
                  </div>
                  {/* <div className="col-xs-12 col-sm-3"> */}
                  <Profile image={props.userData.image} picChange={e=>props.createUserData(e)} propgressBtnComponent={<input style={{cursor:'pointer'}} className="btn btn-create ripple" type='submit' value={'Proceed'}/>}/>

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
