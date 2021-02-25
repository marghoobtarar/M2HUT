import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { colors } from '@material-ui/core';
function EmailSettings(props) {
    useEffect(()=>{

    },[])
    const [emailSetting, setEmailSetting] = useState({
          smtpHostName:'',
          smtpPort:0,
          smtpUser:'',
          smtpPassword:'',
          smtpAddress:'',
          fromName:''

    })
    const updateForm = (e)=> {
        setEmailSetting({...emailSetting,[e.target.name]:e.target.value})
    }
   const submitForm=(e) =>{
       e.preventDefault()
       console.log(emailSetting)
   }
   
  return (
    
            <div className="emailform">
              <form onSubmit={e=>submitForm(e)}>
                <label htmlFor="text">SMTP HOSTNAME</label><br/>
                <input required type="text" value={emailSetting.smtpHostName} id="text" name="smtpHostName" onChange={e=>{updateForm(e)}} placeholder="mail.m2hutapp.co.za"/><br/>
                <label htmlFor="text">SMTP PORT</label><br/>
                <input required type="text" id="text" value={emailSetting.smtpPort} onChange={e=>{updateForm(e)}} name="smtpPort" placeholder="465"/><br/>
                <label htmlFor="text">SMTP USER</label><br/>
                <input required type="text" id="text" name="smtpUser" value={emailSetting.usmtpUserser} onChange={e=>{updateForm(e)}} placeholder="apps@m2hutapp.ca.za"/><br/>
                <label htmlFor="text">SMTP PASSWORD</label><br/>
                <input required type="text" id="text" value={emailSetting.smtpPassword} onChange={e=>{updateForm(e)}} name="smtpPassword" placeholder="*********"/><br/>
                <label htmlFor="text">SMTP ADDRESS</label><br/>
                <input  required type="text" id="text" value={emailSetting.smtpAddress} name="smtpAddress" onChange={e=>{updateForm(e)}} placeholder="mail.m2hutapp.co.za"/><br/>
                <label  htmlFor="text">FROM NAME</label><br/>
                <input required type="text" id="text" value={emailSetting.fromName} name="fromName" onChange={e=>{updateForm(e)}} placeholder="M2Engineering"/><br/>
                <div className="btnemailupdate">
                    <input className='btn' type='submit'  value={'update'} />
                </div>
              </form>
            </div>
            
 
        
      );
}
EmailSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(EmailSettings);
