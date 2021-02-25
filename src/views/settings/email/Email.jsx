import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navbar from './Navbar';
import EmailSettings from './email_settings/EmailSettings';
import Registration from './registration/Registration';
import Suspension from './suspension/Suspension';
function Email(props) {
    useEffect(()=>{

    },[])
    const [emailSetting, setEmailSetting] = useState({
        hostName:'',
        port:0,
        user:'',
        password:'',
        address:'',
        name:''

    })
    const [nav , setNav] = useState('email')
    const updateForm = (e)=> {
        setEmailSetting({...emailSetting,[e.target.name]:e.target.value})
    }
    const updateNavigation = e=>{
        console.log(e)
        setNav(e)
    }
   
   
  return (
    
        <div className="rightbar col-xs-12 col-sm-12 col-md-8 col-lg-8">
           <Navbar nav={nav} navUpdate = {e=>updateNavigation(e)}/>
            {
                nav==='email'?
                <EmailSettings/> :
                nav ==='registration'?
                <Registration/>:
                nav==='suspension'?
                <Suspension/>:null

            }

            {/* */}
          </div>
          
 
        
      );
}
Email.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Email);
