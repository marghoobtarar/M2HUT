import React,{useState,useEffect} from 'react';
import download from "downloadjs";

import moment from 'moment';
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import axios from 'axios'
// let weeksDays = Array.from({length: moment().daysInMonth()}, (x, i) => moment().startOf('month').add(i, 'days').format('ll'))

let currentMonth = moment().format('MMMM');
let monthList = Array.apply(0, Array(12)).map(function(_,i){return moment().month(i).format('MMMM')})
// console.log('index of array',monthList.map(item =>item).indexOf(currentMonth))
let month = monthList.slice(0,1+monthList.map(item =>item).indexOf(currentMonth))

// return month
function ReportLogs() {
    useEffect(()=>{

     
        // console.log("current Month",currentMonth)
        // console.log("month List",monthList)
        // console.log("current month days",weeksDays)

        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }

    },[])
    const [registerLogs , setRegisterLogs] = useState({
        'January':[
            {
                id:'1',
                date:'12/01/2021',
            },
            {
                id:'2',
                date:'12/01/2022',
            },{
                id:'3',
                date:'12/01/2023',
            }],
        'February':[
                {
                    id:'1',
                    date:'12/01/2024',
                },
                {
                    id:'2',
                    date:'12/01/2021',
                },{
                    id:'3',
                    date:'12/01/2021',
                }],
    })
  
    const downloadPdf= e =>{
        // console.log('download pdf',e)
      

        axios(
            {
              method:'GET',
              // url: `https://m2hut-backend.wantechsolutions.com/api/admin/workLogsPDF/${e}/0`,
              url:`http://127.0.0.1:8000/pdf/${e}/`,

              headers:{
                Authorization:  `Bearer ${localStorage.getItem('access_token')}`
              },
              responseType: "blob",
          }).then((response)=>{
            // console.log(response.data)
            const content = response.headers["content-type"];
            download(response.data, 'my name', content);
          
            
          }).catch((err)=>{
            console.log(err)
          
      
          }) 

    }
    const monthDataPdf = e=>{
        // console.log(e)
        axios(
            {
              method:'GET',
              // url: `https://m2hut-backend.wantechsolutions.com/api/admin/workLogsPDF/${e}/1`,
              url:`http://127.0.0.1:8000/pdf_month/${e}/`,
              headers:{
                Authorization:  `Bearer ${localStorage.getItem('access_token')}`
              },
              responseType: "blob",
          }).then((response)=>{
            // console.log(response.data)
            const content = response.headers["content-type"];
            download(response.data, 'my name', content);
          
            
          }).catch((err)=>{
            console.log(err)
          
      
          })
    }
   
  return (
   
    <div>
        <Navbar/>
        <div className="wrapper container d-flex align-items-stretch">
        <Sidebar nav_page={'Data'} />
        <div id="content" className="p-4 p-md-5 pt-5">
            <div className="main-content">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                    <h2 className="page-title mb-4 ">Register Logs</h2>
                    </div>
                </div>
                {month.map(function (data,indexMonth) {
                    return<div className="register-log-sec" key={indexMonth}>
                    <button className="accordion">
                    {data}
                    </button>
                    <div className="panel" >
                        <a onClick={e=>monthDataPdf(`2021-${month.map(item =>item).indexOf(data) +1}-1`)} className="monthly-log text-right">Download month register </a>
                            { Array.apply(0, Array(new Date(2021, indexMonth+1, 0).getDate()) ).map(function (listData,index) {
                                return  <ul className="reg-log-list" key={index}>
                                            <li>
                                                <span className="reg-date-sec">
                                                    <span className="font-bold">
                                                     {`${index+1}/${indexMonth+1}/2021`}
                                                    </span>
                                                    <span >All Employee Register and Data Captured</span>
                                                </span>
                                                <span className="download-report text-right pull-right">
                                                    <a style={{cursor:"pointer"}}onClick={e=>downloadPdf(`2021-${indexMonth+1}-${index+1}`)}>Download Register</a>
                                                </span>
                                            </li>
                                        </ul>
                                    })}
                     </div>
                 </div>
          
                    
                })}
                <Footer/>
            </div>
        
        </div>

        </div>
        
    </div>
    
  );
}
ReportLogs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(ReportLogs);
