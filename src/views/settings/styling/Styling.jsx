import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import imagePlaceholder from '../../../assets/img/placeholder.png'

import image from '../../../assets/img/banner.png'
import { green } from '@material-ui/core/colors';
import axios from 'axios';
function Styling(props) {
    
    useEffect(()=>{
        axios({
            method : 'GET',
            url : `http://127.0.0.1:8000/adminuser/styling/`,
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`,
            },

        }).then(res=>{
            if(res.data.style.length !== 0){
                console.log(res.data.style[0])

                setStylingDetails(res.data.style[0])
                setUpdating(true)
            }
            else{
                setUpdating(false)
            }
        }).catch(err=>{
            alert(err)
        })

    },[])
    const [dataPosted, setDataPosted] = useState(false)
    const [isUpdating, setUpdating] = useState(false)
    const [stylingDetails, setStylingDetails]=useState(
        {
            systemName:'',
            systemEmail:'',
            mainColor:'#2b820d',
            secondaryColor:'cc8a0a',
            mainTextColor:'#8e8e8e',
            systemLogo:null,
            systemIcon:null,
            
        }) 
    const [image, setImages] = useState({   
            systemLogo:null,
            systemIcon:null,})
    const formUpdate = e=>{

        if(e.target.name!=='systemLogo'&&e.target.name!=='systemIcon'){
                setStylingDetails({...stylingDetails,[e.target.name]:e.target.value})
            }
        else{
                setStylingDetails({...stylingDetails,[e.target.name]:URL.createObjectURL(e.target.files[0])})
                setImages({...image,[e.target.name]:e.target.files[0]})

            }
        }

    const submitForm = e =>{
        e.preventDefault()
        var formData = new FormData()
        formData.append('systemName', stylingDetails.systemName)
        formData.append('systemEmail', stylingDetails.systemEmail)
        formData.append('mainColor', stylingDetails.mainColor)
        formData.append('secondaryColor', stylingDetails.secondaryColor)
        formData.append('mainTextColor', stylingDetails.mainTextColor)
        if(image.systemLogo !== null)
            {
                formData.append('systemLogo', image.systemLogo)
            }
        if(image.systemIcon !== null)
            {
            formData.append('systemIcon', image.systemIcon)
            }
        if(!isUpdating)
        {
        axios({method : 'POST',
                url : `http://127.0.0.1:8000/adminuser/styling/`,
                headers : {
                    Authorization : `Bearer ${localStorage.getItem('access_token')}`,
                    'content-type' : 'multipart/form-data'
                },
                data : formData

            }).then(res=>{
                console.log(res)
                setStylingDetails(res.data.style)
                setDataPosted(true)

                
            }).catch(err=>{
                console.log(err)
            })
        }
        else{
            console.log('this is updating the data')

            axios({method : 'PUT',
            url : `http://127.0.0.1:8000/adminuser/manage_styling/${stylingDetails.id}/`,
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`,
                'content-type' : 'multipart/form-data'
            },
            data : formData

        }).then(res=>{
            console.log(res)
            // setStylingDetails(res.data)
            
        }).catch(err=>{
            alert(err)
        })

        }

        // console.log(stylingDetails)
    }
  return (
    
    <div className="sys_data col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <form onSubmit={e=>submitForm(e)}>
        <p>
            <b>System Data</b>
        </p>
        <div className="col-md-6">
            <input type="text" id=""onChange={e=>formUpdate(e)} value={stylingDetails.systemName} name="systemName" placeholder="system name"/>
            <input type="text" id="" onChange={e=>formUpdate(e)}  value={stylingDetails.systemEmail} name="systemEmail" placeholder="system Email"/>
         </div>
        <div className="main_boxes row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>Main Colour</button>
                <div className="box1" style={{backgroundColor : `${stylingDetails.mainColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)}  id="" name="mainColor" value={stylingDetails.mainColor} placeholder="#2b820d"/>
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>secondary colour</button>
                <div className="box2" style={{backgroundColor : `${stylingDetails.secondaryColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)} id="" value={stylingDetails.secondaryColor} name="secondaryColor" placeholder="#cc8a0a"/>
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-4">
                <button>Main Text Colour</button>
                <div className="box3" style={{backgroundColor : `${stylingDetails.mainTextColor}`}}>
                </div>
                <div className="lower_box">
                    <input type="text"onChange={e=>formUpdate(e)}  id=""value={stylingDetails.mainTextColor} name="mainTextColor" placeholder="#8e8e8e"/>
                </div>
            </div>
        </div>
        <div className="second_line row col-xs-6 col-sm-6 col-md-12 col-lg-12">
            <div className="col-xm-4 col-sm-4 col-md-5">
                <p>system logo</p>
                {dataPosted? 
                 <img 
                    style=
                        {{
                            maxWidth:'110px',
                            minWidth:'110px', 
                            height:'70px',
                            borderRadius:'10px'
                        }}
                        src={`http://127.0.0.1:8000${stylingDetails.systemLogo}`}
                        alt="icon" />
                                :
                
                image.systemLogo !== null?
                    <img 
                    style=
                       {{
                           maxWidth:'110px',
                           minWidth:'110px', 
                           height:'70px',
                           borderRadius:'10px'
                       }}
                     src={`${stylingDetails.systemLogo}`}
                      alt="icon" />
                      :
               
                stylingDetails.systemLogo!==null?
                                <img 
                                 style=
                                    {{
                                        maxWidth:'110px',
                                        minWidth:'110px', 
                                        height:'70px',
                                        borderRadius:'10px'
                                    }}
                                  src={`http://127.0.0.1:8000${stylingDetails.systemLogo}`}
                                   alt="icon" />
                                :
                                <img 
                                style=
                                   {{
                                       maxWidth:'110px',
                                       minWidth:'110px', 
                                       height:'70px',
                                       borderRadius:'10px'
                                   }}
                                 src={imagePlaceholder}
                                  alt="icon" />
                            }
                <div className="upload-btn-wrapper2">
                    <button>Choose picture</button>
                    <input  type="file" onChange={e=>formUpdate(e)} name="systemLogo" />
                </div>
            </div>
            <div className="col-xm-12 col-sm-12 col-md-6">
                <p>system icon</p>
                {
                dataPosted? 
                <img 
                   style=
                       {{
                           maxWidth:'110px',
                           minWidth:'110px', 
                           height:'70px',
                           borderRadius:'10px'
                       }}
                       src={`http://127.0.0.1:8000${stylingDetails.systemLogo}`}
                       alt="icon" />
                               :
                image.systemIcon !== null?
                     <img 
                     style=
                        {{
                            maxWidth:'110px',
                            minWidth:'110px', 
                            height:'70px',
                            borderRadius:'10px'
                        }}
                      src={`${stylingDetails.systemIcon}`}
                       alt="icon" />
                       :
                
                
                stylingDetails.systemIcon!==null?
                                <img 
                                 style=
                                    {{
                                        maxWidth:'110px',
                                        minWidth:'110px', 
                                        height:'70px',
                                        borderRadius:'10px'
                                    }}
                                  src={`http://127.0.0.1:8000${stylingDetails.systemIcon}`}
                                   alt="icon" />
                                :
                                <img 
                                style=
                                   {{
                                       maxWidth:'110px',
                                       minWidth:'110px', 
                                       height:'70px',
                                       borderRadius:'10px'
                                   }}
                                 src={imagePlaceholder}
                                  alt="icon" />
                            }                <div className="upload-btn-wrapper2">
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
