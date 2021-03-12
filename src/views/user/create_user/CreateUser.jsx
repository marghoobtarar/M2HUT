import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../../components/sidebar/Sidebar';
import Profile from './profile/Profile';
import PersonalInfo from './personal_info/PersonalInfo';
import EducationalInfo from './educational_info/EducationalInfo';
import AccountStatus from './account_status/AccountStatus';
import Footer from '../../../components/footer/Footer';
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
const [formNumber, setFormNumber] = useState(1)
// **************************end state variables

    // *******************all function 

const progressBtn = e =>{

// console.log(personalInfoView, personalInfo)
// console.log(educationalInfoView, educationalInfo)
// console.log(accountStatusView, accountStatus)


  if(personalInfo && educationalInfo){

    setEducationalInfoView(false)
    setPersonalInfoView(false)
    
    setAccountStatus(true)
    setAccountStatusView(true)
    setFormNumber(3)
    
  }
  else if(personalInfo){
    setEducationalInfo(true)
    setPersonalInfo(true)
    setEducationalInfoView(true)

    setPersonalInfoView(false)

    setAccountStatusView(false)
    setFormNumber(2)
    // setAccountStatus(true)
  }
 
  // else{
  //   setEducationalInfo(true)
  //   setAccountStatus(false)

  // }
}
const progressBarClick = e =>{
  console.log(e)
  if(e==='personalInfo' && formNumber >= 1){
    setEducationalInfoView(false)
    setEducationalInfo(false)
    setAccountStatusView(false)
    setAccountStatus(false)
    setPersonalInfoView(true)
    setPersonalInfo(true)

  }
  else if(e==='educationalInfo' && formNumber>1){

    setAccountStatusView(false)
    setAccountStatus(false)
    setPersonalInfoView(false)
    setEducationalInfoView(true)
    setEducationalInfo(true)
  }
  else if(e==='accountInfo' && formNumber >2){

    setPersonalInfoView(false)
    setEducationalInfoView(false)
    setEducationalInfo(false)
    setAccountStatusView(true)
    setAccountStatus(true)

  }
  
}
const completeBtn = e=>{

  console.log('submit data',props.userData)
  props.submitUser(e)
}
  
      // *******************end function 

  return (
    <div className="wrapper container d-flex align-items-stretch">
        <Sidebar nav_page={'Users'}/>  
        <div id="content" className="p-4 p-md-5 pt-5">
      
        <div className="main-content">
          <div className="row">
              <div className="col-xs-12 col-md-1"></div>
              <div className="col-xs-12 col-md-11">
                <ul id="progressbar">
                    <li onClick={e=>progressBarClick('personalInfo')} style={{cursor:'pointer'}} className="active">Personal Information</li>
                    <li onClick={e=>progressBarClick('educationalInfo')} style={{cursor:'pointer'}} className={educationalInfo || accountStatus?'active':''} >Educational information</li>
                    <li onClick={e=>progressBarClick('accountInfo')} style={{cursor:'pointer'}} className={accountStatus?'active':''}>Account Status</li>
                </ul>

                {personalInfoView? <PersonalInfo userData = {props.userData}  progressBtn={e=>progressBtn()} createUserData= {e => props.createUserData(e) }/>
                :
                educationalInfoView?<EducationalInfo userData = {props.userData} progressBtn={e=>progressBtn()} createUserData= {e => props.createUserData(e) }/>:
                accountStatusView? <AccountStatus userData = {props.userData} completeBtn={e=>completeBtn()} createUserData= {e => props.createUserData(e) }/>:null

          }       

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
