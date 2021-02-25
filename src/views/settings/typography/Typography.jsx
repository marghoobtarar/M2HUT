import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

function Typography(props) {
    useEffect(()=>{

    },[])
   let fontSize = [8, 10, 12, 14, 16, 18, 20]
   let fontStyle =["Poppins", "Arial", "sans-serif"]
   let fontType =['normal', 'bold', 'bolder', 'lighter']
   let fontColor=['#2b820d', '#cc8a0a','#8e8e8e' ]
   let headings = ['H1 heading','H2 heading', 'H2 heading','H4 heading','Body Text'  ]
   const [h1,setH1] = useState({fontStyle:'Poppins',fontType:'normal',fontSize:14,fontColor:'#8e8e8e'})
   const [h2,setH2] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [h3,setH3] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [h4,setH4] = useState({fontStyle:'',fontType:'',fontSize:'',fontColor:''})
   const [bodyText,setBodyText] = useState({fontStyle:'Poppins',fontType:'normal',fontSize:14,fontColor:'#8e8e8e'})
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
       console.log(h1)
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
    console.log('submit the form')
   }
  return (
    
  
        
       <div className="main-forms col-xs-8 col-sm-12 col-md-12 col-lg-8">
      <form onSubmit={e=>submitForm(e)} className="f-form col-xs-6 col-sm-12 col-md-12 col-lg-12">

        {headings.map(function (heading,index){
            return<>
                    <span className="h1heading" key={heading}>{heading}</span>
                    <div className="row" key={heading+index}>
                    <div className="col-md-3 col-sm-4" >
                        <select name="font" type="text" id="" 
                                onChange={e=>changeSelectValue(heading,'fontStyle',e.target.value)} 
                                defaultValue={defaultSelectValue(heading,'fontStyle')}>
                        <option value=""  disabled hidden>Font Style</option>

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
                                defaultValue={defaultSelectValue(heading,'fontType')}>
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
                            defaultValue={defaultSelectValue(heading,'fontSize')}>
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
                                defaultValue={defaultSelectValue(heading,'fontColor')}>
                                <option value=""  disabled hidden>Font Color</option>

                                {
                                    fontColor.map(function (data,index){
                                        return <option value={data} key={data+index}>{data}</option>

                                    })
                                    
                                }
                        
                            </select>
                        </div>
                    </div>

            
            
            </>
        })}


      </form>

      <div className="btnregupdate">
          <button>update</button>
      </div>


  </div>

  )
}
Typography.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Typography);
