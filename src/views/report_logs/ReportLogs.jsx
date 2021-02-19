import React,{useState,useEffect} from 'react';
import download from "downloadjs";

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
function ReportLogs() {
    useEffect(()=>{

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
        'Janurary':[
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
        console.log('download pdf',e)
        // axios
        // .get(
        //   `http://127.0.0.1:8000/pdf/${props.match.params.individualId}/`,
        //   {
        //     responseType: "blob",
        //     data: { d: props.match.params.individualId },
        //   }
        // )
        // .then((response) => {
        //   const content = response.headers["content-type"];
        //   download(response.data, individualProduct.name, content);
          
        // });
    }
   
  return (
   
    <div>
        <div className="wrapper container d-flex align-items-stretch">
        <Sidebar nav_page={'Data'} />
        <div id="content" className="p-4 p-md-5 pt-5">
            <div className="main-content">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                    <h2 className="page-title mb-4 ">Register Logs</h2>
                    </div>
                </div>
                {Object.keys(registerLogs).map(function (data,index) {
                    return<div className="register-log-sec" key={index}>
                    <button className="accordion">
                    {data}
                    </button>
                    <div className="panel" >
                        <a href="#" className="monthly-log text-right">Download month register </a>
                            {registerLogs[data].map(function (listData,index) {
                                return  <ul className="reg-log-list" key={index}>
                                            <li>
                                                <span className="reg-date-sec">
                                                    <span className="font-bold">
                                                        {listData.date}
                                                    </span>
                                                    <span >All Employee Register and Data Captured</span>
                                                </span>
                                                <span className="download-report text-right pull-right">
                                                    <a style={{cursor:"pointer"}}onClick={e=>downloadPdf(listData)}>Download Register</a>
                                                </span>
                                            </li>
                                        </ul>
                                    })}
                     </div>
                 </div>
          
                    
                })}
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
