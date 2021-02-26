import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SettingSideBar from './Sidebar'
import Email from './email/Email';
import Styling from './styling/Styling';
import Typography from './typography/Typography';
function Settings(props) {
    useEffect(()=>{

    },[])
 const [nav, setNav] = useState('Styling')

   
   
  return (
    <>
    <Navbar/>
    <div className="wrapper container d-flex align-items-stretch">
        <Sidebar nav_page={'Settings'}/>
    <div id="content" className="p-4 p-md-5 pt-5">
      <div className="main-content">
        <div className="row">
         <SettingSideBar nav={nav} changeSideNav={e=>setNav(e)}/>
         {nav==='Email'? <Email/>:
         nav==='Styling'? <Styling/>:
         nav ==='Typography'?<Typography/>:null
         }
         {/* */}
        
        </div>
      </div>
    </div>
    </div>
    </>
      );
}
Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Settings);
