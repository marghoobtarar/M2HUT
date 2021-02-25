import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
function Settings(props) {
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
    const updateForm = (e)=> {
        setEmailSetting({...emailSetting,[e.target.name]:e.target.value})
    }
   
   
  return (

          <div className=" rightbar col-xs-12 col-sm-4 ">
            <div className="email-status-div">
              <div className="">
                <p onClick={e=>props.changeSideNav('Styling')} style={{fontWeight:props.nav==='Styling'?700:400, cursor:'pointer'}}>Styling</p>
                <p onClick={e=>props.changeSideNav('Typography')} style={{fontWeight:props.nav==='Typography'?700:400 , cursor:'pointer'}}>Typography</p>
                <p onClick={e=>props.changeSideNav('Email')}style={{fontWeight:props.nav==='Email'?700:400 , cursor:'pointer'}} >Email</p>
              </div>

            </div>
          </div>
      );
}
Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Settings);
