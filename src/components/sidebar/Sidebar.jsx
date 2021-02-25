import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import userImage from '../../assets/img/take-img.png'
import dashboard from '../../assets/img/Icon/dashboard.png'
import register from '../../assets/img/Icon/user.png'
import data from '../../assets/img/Icon/file.png'
import settings from '../../assets/img/Icon/settings.png'

import notices from '../../assets/img/Icon/download.png'
import supportBtn from '../../assets/img/support_btn.png'


function AllNotices(props) {
    useEffect(()=>{

    },[])
    const [name, setName]=useState('Richard motlogan')
    const [email, setEmail] = useState('richard@gmail.com')

   
  return (
	  <nav id="sidebar">
        <div className="custom-menu">
          <button type="button" id="sidebarCollapse" className="btn btn-primary d-none">
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
       
        <div className="profile-img">
          <img src={userImage} alt="image" />
          <small>Welcome,</small>
          <strong>{name}</strong>
          <p>{email}</p>
        </div>
        <div className="nav_tab">
          <ul className="list-unstyled components mb-5">
            <li className={props.nav_page==='Dashboard'?'active':''}>
              <a href="#"><span><img src={dashboard} width="15px" alt="icon" /></span>Dashboard</a>
            </li>
            <li className={props.nav_page==='Users'?'active':''}> 
                <a href="#"><span><img src={register} width="15px" alt="icon" /></span>Users</a>
            </li>
           
            <li className={props.nav_page==='Data'?'active':''}>
              <a href="#"><span><img src={data} width="15px" alt="icon" /></span>Data</a>
            </li>
            <li  className={props.nav_page==='Notices'?'active':''}>
              <a href="#"><span><img src={notices} width="15px" alt="icon" /></span>Notices</a>
            </li>
            <li  className={props.nav_page==='Settings'?'active':''}>
              <a href="#"><span><img src={settings} width="15px" alt="icon" /></span>Settings</a>
            </li>
            <li className="support_btn">
              <a href="#" ><span><img src={supportBtn} alt="btn"/></span></a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
AllNotices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AllNotices);
