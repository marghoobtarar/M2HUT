import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { colors } from '@material-ui/core';
import axios from 'axios'
function EmailSettings(props) {
    useEffect(()=>{
      axios({method : 'GET',
      url : `http://127.0.0.1:8000/adminuser/admin_email/`,
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`,
      },

        }).then(res=>{
          if(res.data.admin_email.length> 0){
            console.log(res.data.admin_email[0])
            setEmailSetting(res.data.admin_email[0])
            setUpdated(true)
          }
        })
        .catch(err=>{
          alert(err)
        })
    },[])
    const [isUpdated, setUpdated] = useState(false)
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
       if(!isUpdated)
       {
        axios({method : 'POST',
        url : `http://127.0.0.1:8000/adminuser/admin_email/`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('access_token')}`,
        },
        data : emailSetting
  
          }).then(res=>{
            
            console.log(res.data)
            setEmailSetting(res.data.admin_email)
          
          })
          .catch(err=>{
            console.log(err)
          })
       }
       else{
        axios({method : 'PUT',
        url : `http://127.0.0.1:8000/adminuser/manage_admin_email/${emailSetting.id}/`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('access_token')}`,
        },
        data : emailSetting
  
          }).then(res=>{
            
            console.log(res.data)
            // setEmailSetting(res.data.admin_email[0])
          alert(res.data)
          })
          .catch(err=>{
            alert(err)
          })
       }
       
   }
   
  return (
    
            <div className="emailform">
              <form onSubmit={e=>submitForm(e)}>
                <label htmlFor="text">SMTP HOSTNAME</label><br/>
                <input required type="text" value={emailSetting.smtpHostName} id="text" name="smtpHostName" onChange={e=>{updateForm(e)}} placeholder="mail.m2hutapp.co.za"/><br/>
                <label htmlFor="text">SMTP PORT</label><br/>
                <input required type="text" id="text" value={emailSetting.smtpPort} onChange={e=>{updateForm(e)}} name="smtpPort" placeholder="465"/><br/>
                <label htmlFor="text">SMTP USER</label><br/>
                <input required type="email" id="email" name="smtpUser" value={emailSetting.smtpUser} onChange={e=>{updateForm(e)}} placeholder="apps@m2hutapp.ca.za"/><br/>
                <label htmlFor="text">SMTP PASSWORD</label><br/>
                <input required type="password" id="password" value={emailSetting.smtpPassword} onChange={e=>{updateForm(e)}} name="smtpPassword" placeholder="*********"/><br/>
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
