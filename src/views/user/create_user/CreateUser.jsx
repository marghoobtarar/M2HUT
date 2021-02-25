import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
import Profile from './profile/Profile';
import PersonalInfo from './personal_info/PersonalInfo';
import EducationalInfo from './educational_info/EducationalInfo';
import AccountStatus from './account_status/AccountStatus';
function EditUser(props) {
    useEffect(()=>{
    },[])
//  **************************all state variables
const [personalInfo, setPersonalInfo] = useState(true)
const [educationalInfo, setEducationalInfo]=useState(false)
const [accountStatus, setAccountStatus] = useState(false)

const [personalInfoView, setPersonalInfoView] = useState(true)
const [educationalInfoView, setEducationalInfoView]=useState(false)
const [accountStatusView, setAccountStatusView] = useState(false)
// **************************end state variables

    // *******************all function 

const progressBtn = e =>{
  if(personalInfo && educationalInfo){

    setEducationalInfoView(false)
    setAccountStatus(true)
    setAccountStatusView(true)
    
  }
  if(personalInfo){
    setEducationalInfo(true)
    setEducationalInfoView(true)

    setPersonalInfoView(false)

    setAccountStatusView(false)
    // setAccountStatus(true)
  }
 
  // else{
  //   setEducationalInfo(true)
  //   setAccountStatus(false)

  // }
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
                    <li  style={{cursor:'pointer'}} className={educationalInfo || accountStatus?'active':''} >Educational information</li>
                    <li style={{cursor:'pointer'}} className={accountStatus?'active':''}>Account Status</li>
                </ul>

                {personalInfoView? <PersonalInfo  progressBtn={e=>progressBtn()} createUserData= {e => props.createUserData(e) }/>
                :
                educationalInfoView?<EducationalInfo progressBtn={e=>progressBtn()} createUserData= {e => props.createUserData(e) }/>:
                accountStatusView? <AccountStatus progressBtn={e=>progressBtn()} createUserData= {e => props.createUserData(e) }/>:null

          }       

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
