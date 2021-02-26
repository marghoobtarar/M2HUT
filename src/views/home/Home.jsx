import React,{useState,useEffect} from 'react';
import download from "downloadjs";

import moment from 'moment';
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';


function Home() {
    useEffect(()=>{

     
    },[])
   
  
   
  return (
   
    <div>
      <Navbar/>
        <div className="wrapper container d-flex align-items-stretch">
        <Sidebar nav_page={'Dashboard'} />
        <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <h3 className="admin-noti mb-4"><span className="icon-hold mr-3"><img src="img/noti-icon.png" alt="icon" /></span> General Notice :  All Learners must ensure they submit their registeration document before the 25/01/2021</h3>
          <div className="banner">
            <img src="img/banner.png" alt="banner" />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className="title-dashboard">
                <h1>Dashboard</h1>
                <small>Here is your personal portal page</small>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="time-slot">
                <div className="media">
                  <div className="icon-holder mr-3">
                    <img src="img/clock-icon.png" alt="img" />
                  </div>
                  <div className="media-body">
                    <h3> JANUARY</h3>
                    <small>Time Spent</small>
                    <strong>25:30:02</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className="graph-item">
                <strong className="text-right">Your Session Log</strong>
                <div className="img-holder mb-3">
                  <img src="img/chart.png" alt="graph" />
                </div>
                <ul className="inline-block">
                  <li>
                    <small>Worked</small>
                    <strong>18</strong>
                  </li>
                  <li>
                    <small>Absent</small>
                    <strong>02</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="notice_panel">
                <h3>Notices</h3>
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <div className="blog-content-holder">
                      <strong>Department of Transport issues 100 employees with an updated work relations mandate.</strong>
                      <p>The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff and </p>
                      <a href="#" className="btn btn-more pull-right ripple">read</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>

        </div>
        
    </div>
    
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Home);
