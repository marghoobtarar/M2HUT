import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios'
function Typography(props) {
    useEffect(()=>{
        
        axios({
            method : 'GET',
            url : `http://127.0.0.1:8000/adminuser/typography/`,
            headers : {
                Authorization : `Bearer ${localStorage.getItem('access_token')}`,
            },

        }).then(res=>{
            console.log(res.data)
            if(res.data.typography.length !== 0){
                // console.log(res.data.typography)
                setDatabaseObj(res.data.typography[0])
                var data = res.data.typography[0]
                setH1(data.h1)
                setH2(data.h2)
                setH3(data.h3)
                setH4(data.h4)
                setBodyText(data.bodyText)

                // setStylingDetails(res.data.style[0])
                setUpdate(true)
            }
            else{
                setUpdate(false)
            }
        }).catch(err=>{
            alert(err)
        })


    },[])
   let [databaseOjb , setDatabaseObj] = useState({})
   let fontSize = [8, 10, 12, 14, 16, 18, 20]
   let fontStyle =["Poppins", "Arial", "sans-serif"]
   let fontType =['normal', 'bold', 'bolder', 'lighter']
   let fontColor=['#2b820d', '#cc8a0a','#8e8e8e' ]
   let headings = ['H1 heading','H2 heading', 'H3 heading','H4 heading','Body Text'  ]
   const [isUpdate, setUpdate] = useState(false)
   const [h1,setH1] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [h2,setH2] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [h3,setH3] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [h4,setH4] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [bodyText,setBodyText] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const defaultSelectValue = (heading, variable)=> {
       
    if(heading === 'H1 heading'){
           return h1[`${variable}`]
       }
    else if(heading === 'H2 heading'){
        return h2[`${variable}`]
        }
    else if(heading === 'H3 heading'){
            return h3[`${variable}`]
        }
    else if(heading === 'H4 heading'){
            return h4[`${variable}`]
        }
    else if(heading === 'Body Text'){
            return bodyText[`${variable}`]
        }
    //    return 'Poppins'

   }
   const changeSelectValue = (heading, variable,data)=> {
    //    console.log(h1)
    //    setUpdate(true)
    if(heading === 'H1 heading'){
           setH1({...h1,[variable]:data})
       }
    else if(heading === 'H2 heading'){
        setH2({...h2,[variable]:data})
        }
    else if(heading === 'H3 heading'){
            setH3({...h3,[variable]:data})
        }
    else if(heading === 'H4 heading'){
            setH4({...h4,[variable]:data})
        }
    else if(heading === 'Body Text'){
           setBodyText({...bodyText,[variable]:data})
        }
    //    return 'Poppins'

   }
   const submitForm = e =>{
       e.preventDefault()
    console.log('submit the fo  rm')
    var data = {
        'h1' : h1,
        'h2' : h2,
        'h3' : h3, 
        'h4' : h4, 
        'bodyText' : bodyText
    }

    if(!isUpdate)
    {
        axios({method : 'POST',
        url : `http://127.0.0.1:8000/adminuser/typography/`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('access_token')}`,
            // 'content-type' : 'multipart/form-data'
        },
        data : data
    
        }).then(res=>{  
            console.log(res.data)        
        }).catch(err=>{
            console.log(err)
        })
    }
    else{
        console.log('update data', data)

        axios({method : 'PUT',
        url : `http://127.0.0.1:8000/adminuser/manage_typography/${databaseOjb.id}/`,
        headers : {
            Authorization : `Bearer ${localStorage.getItem('access_token')}`,
        },
        data : data
    
        }).then(res=>{  
            console.log(res.data)        
        }).catch(err=>{
            console.log(err)
            alert(err)
        })
    }
   
   }
  return (
    
  
        
       <div className="main-forms col-xs-8 col-sm-12 col-md-12 col-lg-8">
      <form onSubmit={e=>submitForm(e)} className="f-form col-xs-6 col-sm-12 col-md-12 col-lg-12">

        {headings.map(function (heading,index){
            return<div key={index}>
                    <span className="h1heading" key={heading}>{heading}</span>
                    <div className="row" key={heading+index}>
                    <div className="col-md-3 col-sm-4" >
                        <select name="font" type="text" id="" 
                                onChange={e=>changeSelectValue(heading,'fontStyle',e.target.value)} 
                                value={
                                    heading === 'H1 heading'?h1['fontStyle']:
                                    heading === 'H2 heading'?h2['fontStyle']:
                                    heading === 'H3 heading'?h3['fontStyle']:
                                    heading === 'H4 heading'?h4['fontStyle']:
                                    bodyText['fontStyle']
        
                                    } >
                        <option
                            value=""
                            disabled hidden>
                             Font Style
                        </option>

                        {
                            fontStyle.map(function (data,index){
                                return <option  value={data} key={data+index}>{data}</option>

                            })
                            
                        }
                      
                        </select>
                        </div>
                        <div className="col-md-3 col-sm-4" >
                            <select name="font" type="text" id="" 
                                onChange={e=>changeSelectValue(heading,'fontType',e.target.value)} 
                                value={
                                    heading === 'H1 heading'?h1['fontType']:
                                    heading === 'H2 heading'?h2['fontType']:
                                    heading === 'H3 heading'?h3['fontType']:
                                    heading === 'H4 heading'?h4['fontType']:
                                    bodyText['fontType']
        
                                    } >
                                <option value=""  disabled hidden>Font Type</option>

                                {
                                    fontType.map(function (data,index){
                                        return <option value={data} key={data+index}>{data}</option>

                                    })
                                    
                                }
                        
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-4" >
                            <select name="font" type="text" id="" 
                            onChange={e=>changeSelectValue(heading,'fontSize',e.target.value)} 
                            // defaultValue={defaultSelectValue(heading,'fontSize')}
                            value={
                                heading === 'H1 heading'?h1['fontSize']:
                                heading === 'H2 heading'?h2['fontSize']:
                                heading === 'H3 heading'?h3['fontSize']:
                                heading === 'H4 heading'?h4['fontSize']:
                                bodyText['fontSize']
    
                                }
                            >
                                <option value=""  disabled hidden>Font Size</option>

                                {
                                    fontSize.map(function (data,index){
                                        return <option value={data} key={data+index}>{data}</option>

                                    })
                                    
                                }
                        
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-4" >
                            <select name="font" type="text" id="" 
                                onChange={e=>changeSelectValue(heading,'fontColor',e.target.value)} 
                                value={
                                    heading === 'H1 heading'?h1['fontColor']:
                                    heading === 'H2 heading'?h2['fontColor']:
                                    heading === 'H3 heading'?h3['fontColor']:
                                    heading === 'H4 heading'?h4['fontColor']:
                                    bodyText['fontColor']
                                }
                                >
                                <option value=""  disabled hidden>Font Color</option>

                                {
                                    fontColor.map(function (data,index){
                                        return <option value={data} key={data+index}>{data}</option>

                                    })
                                    
                                }
                        
                            </select>
                        </div>
                    </div>

            
            
            </div>
        })}

<div className="btnregupdate">
          <button type='submit'>update</button>
      </div>

      </form>

    

  </div>

  )
}
Typography.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Typography);
