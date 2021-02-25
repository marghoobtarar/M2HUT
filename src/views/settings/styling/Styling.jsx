import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import image from '../../../assets/img/banner.png'
import { green } from '@material-ui/core/colors';
function Styling(props) {
    
    useEffect(()=>{

    },[])

    const [stylingDetails, setStylingDetails]=useState(
        {
            systemName:'',
            systemEmail:'',
            mainColor:'',
            secondaryColor:'',
            mainTextColor:'',
            systemLogo:'',
            systemIcon:'',
            
        }) 
    const formUpdate = e=>{

        if(e.target.name!=='systemLogo'&&e.target.name!=='systemIcon'){
                setStylingDetails({...stylingDetails,[e.target.name]:e.target.value})
            }
        else{
                setStylingDetails({...stylingDetails,[e.target.name]:URL.createObjectURL(e.target.files[0])})
            }
        }

    const submitForm = e =>{
        e.preventDefault()
        console.log(stylingDetails)
    }
  return (
    
    <div className="sys_data col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <form onSubmit={e=>submitForm(e)}>
        <p>
            <b>system data</b>
        </p>
        <div className="col-md-6">
            <input type="text" id=""onChange={e=>formUpdate(e)} name="systemName" placeholder="system name"/>
            <input type="text" id="" onChange={e=>formUpdate(e)} name="systemEmail" placeholder="system Email"/>
         </div>
        <div className="main_boxes row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>Main Colour</button>
                <div className="box1" style={{backgroundColor : `${stylingDetails.mainColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)}  id="" name="mainColor" placeholder="#2b820d"/>
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>secondary colour</button>
                <div className="box2" style={{backgroundColor : `${stylingDetails.secondaryColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)} id="" name="secondaryColor" placeholder="#cc8a0a"/>
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>Main Text Colour</button>
                <div className="box3" style={{backgroundColor : `${stylingDetails.mainTextColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)}  id="" name="mainTextColor" placeholder="#8e8e8e"/>
                </div>
            </div>
        </div>
        <div className="second_line row col-xs-6 col-sm-6 col-md-12 col-lg-12">
            <div className="col-xm-4 col-sm-4 col-md-5">
                <p>system logo</p>
                <img  style={{maxWidth:'100%',minWidth:'100%', height:'70px',borderRadius:'10px'}} src={stylingDetails.systemLogo} alt="icon" />
                <div className="upload-btn-wrapper2">
                    <button>Choose picture</button>
                    <input  type="file" onChange={e=>formUpdate(e)} name="systemLogo" />
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-6">
                <p>system icon</p>
                <img  style={{maxWidth:'100%',minWidth:'100%', height:'70px',borderRadius:'10px'}} src={stylingDetails.systemIcon} alt="icon" />
                <div className="upload-btn-wrapper2">
                    <button className="">Choose picture</button>
                    <input  type="file"onChange={e=>formUpdate(e)}  name="systemIcon" />
                </div>
            </div>
        </div>
        <div className="btnemailupdate">
            <input style={{maxWidth:'100px',borderRadius:'4px', border:'2px solid green '}} className='btn' type='submit'  value={'update'} />
        </div>
        </form>
    </div>
          
 
    
      );
}
Styling.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Styling);
