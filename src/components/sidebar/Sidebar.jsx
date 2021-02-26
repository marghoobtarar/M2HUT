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
import { Redirect } from 'react-router-dom';


function AllNotices(props) {
    useEffect(()=>{

    },[])
    const [name, setName]=useState('Richard motlogan')
    const [email, setEmail] = useState('richard@gmail.com')
    const [path , setPath] = useState("")
   
  return (
	  <nav id="sidebar">
      {path !== "" && window.location.pathname !== path ? (
        <Redirect to={path} />
      ) : null}
      {/* <Redirect to={nav}/> */}
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
              <a style={{cursor:'pointer'}} onClick={e=>setPath('/dashboard')}><span><img src={dashboard} width="15px" alt="icon" /></span>Dashboard</a>
            </li>
            <li className={props.nav_page==='Users'?'active':''}> 
                <a style={{cursor:'pointer'}} onClick={e=>setPath('/users')}><span><img src={register} width="15px" alt="icon" /></span>Users</a>
            </li>
           
            <li className={props.nav_page==='Data'?'active':''}>
              <a style={{cursor:'pointer'}} onClick={e=>setPath('/data')}><span><img src={data} width="15px" alt="icon" /></span>Data</a>
            </li>
            <li  className={props.nav_page==='Notices'?'active':''}>
              <a style={{cursor:'pointer'}} onClick={e=>setPath('/notices')}><span><img src={notices} width="15px" alt="icon" /></span>Notices</a>
            </li>
            <li  className={props.nav_page==='Settings'?'active':''}>
              <a style={{cursor:'pointer'}} onClick={e=>setPath('/settings')}><span><img src={settings} width="15px" alt="icon" /></span>Settings</a>
            </li>
            <li className="support_btn">
              <a style={{cursor:'pointer'}} href="#" ><span><img src={supportBtn} alt="btn"/></span></a>
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
