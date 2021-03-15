import React,{useState,useEffect} from 'react';
import download from "downloadjs";
// import Chart from './Chart'
import moment from 'moment';
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import graph from '../../assets/img/Icon/graph-img.png'
// import ReactApexChart from 'react-apexcharts';
import axios from 'axios'
import { Doughnut, Bar } from 'react-chartjs-2';

import Chart from 'chart.js'

function Home() {
 
    useEffect(()=>{

      axios({method : 'GET',
      url : `http://127.0.0.1:8000/adminuser/dashboard_analytics/`,
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`,
      },

        }).then(res=>{
            setAnalyticsData(res.data.analytics)
            setDonut({
              datasets: [{
                data: [res.data.analytics.inactive_user, res.data.analytics.active_user],
                backgroundColor: ['red' , 'green']
                }],
              
                labels: ['inactive', 'active'],
                  
            })
            setBar({
              labels:res.data.analytics.graph_data.map( item => { return item.date }) ,
              datasets: [
                {
                  label: "monthly dataset",
                  backgroundColor: "rgba(0,10,220,0.5)" ,
                  strokeColor: "rgba(220,220,220,0.8)", 
                  highlightFill: "rgba(220,220,220,0.75)",
                  highlightStroke: "rgba(220,220,220,1)",
                  data: res.data.analytics.graph_data.map( item => { return item.total })
                }
              ]
            })



            
        }).catch(err=>{
          alert(err)
        })

      Chart.Chart.pluginService.register({
        beforeDraw: function (chart) {                    
            if (chart.config.options.centerText.display !== null &&
                typeof chart.config.options.centerText.display !== 'undefined' &&
                chart.config.options.centerText.display) {
                drawInnerText(chart);
            }
        },
    });
     
    },[])
   
const [analyticsData , setAnalyticsData] = useState({})
var [donut , setDonut] = useState({
   

    
})
var [bar , setBar] = useState({
  labels: [],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(0,10,220,0.5)" ,
      strokeColor: "rgba(220,220,220,0.8)", 
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: []
    }
  ]
})
   const drawInnerText = (chart) => {

      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
  
      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
  
      var text = chart.config.options.centerText.text,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
  
      ctx.fillText(text, textX, textY);
      ctx.save();
  }
   
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
                  <strong>{analyticsData.all_user}</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-green"></span> Active Users
                  <strong>{analyticsData.active_user}</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-red"></span> inactive Users
                  <strong>{analyticsData.inactive_user}</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-2 p-0">
                <div className="report-text">
                  <span className="cricle-00b4fe"></span> Register records
                  <strong>{analyticsData.register_records}</strong>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 p-0">
                <div className="report-text text-right">
                  <span className="cricle-green"></span> Overall monthly Data
                  <strong className="text-right">{analyticsData.monthly_data}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className="graph-item">
                <strong className="text-right">Current Month Data <br /><span>{analyticsData.monthly_data}</span></strong>
                <div className="img-holder mb-3">
                <Bar
                 options={{  
                  scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                            // OR //
                            beginAtZero: true   // minimum value will be 0.
                        }
                    }]
                },            
                  centerText: {
                    display: false,
                    text: 'bar chart'
                },
                      legend: {
                        display: false
                      },
                      
                      // maintainAspectRatio: false,
                      responsive: true,
                      // cutoutPercentage: 60
                    }}
                  data={bar}
                  width={100}
                  height={50}
                  // options={{ maintainAspectRatio: false }}
                />
                                
                {/* <img src="img/chart.png" alt="graph" /> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="circle-graph">
                {/* <ReactApexChart /> */}
                <Doughnut data={donut} 
                width={250}
                height={250}
                    options={{                
                      centerText: {
                        display: true,
                        text: analyticsData.all_user
                    },
                          legend: {
                            display: false
                          },
                          
                          // maintainAspectRatio: false,
                          responsive: true,
                          // cutoutPercentage: 60
                        }}/>

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
