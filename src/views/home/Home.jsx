import React,{useState,useEffect} from 'react';
import download from "downloadjs";

import moment from 'moment';
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import graph from '../../assets/img/Icon/graph-img.png'


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
              <a href="#" className="create-user-btn pull-right"><span><img src="img/add-icon.png" alt="icon" /> Create Users</span></a>
            </div>
          </div>
          <div className="report-box">
            <div className="row">
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-green"></span> Registered Users
                  <strong>1234</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-green"></span> Active Users
                  <strong>326</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-red"></span> inactive Users
                  <strong>150</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-00b4fe"></span> Register records
                  <strong>89</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 p-0">
                <div className="report-text text-right">
                  <span className="cricle-green"></span> Overall monthly Data
                  <strong className="text-right">226</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className="graph-item">
                <strong className="text-right">Current Month Data <br /><span>226</span></strong>
                <div className="img-holder mb-3">
                  <img src="img/chart.png" alt="graph" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="circle-graph">
                <img src={graph} alt="image" />
                <div className="d-flex">
                  <ul>
                    <li>
                      <span className="cricle-red"></span> Inactive users
                    </li>
                    <li>
                      <span className="cricle-green"></span> Active users
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <ul className="d-flex list-none justify-content-between">
            <li><a href="#"><img src="img/M2hut-logo.png" alt="image" /></a></li>
            <li><small>© M2Engineering, South Africa</small></li>
          </ul>
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
