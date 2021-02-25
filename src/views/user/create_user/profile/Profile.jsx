import React,{useState,useEffect} from 'react';
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import image from '../../../../assets/img/banner.png'

function AccountStatus(props) {
    useEffect(()=>{
    },[])
//  **************************all state variables
// **************************end state variables

    // *******************all function 


  
      // *******************end function 

  return (

                
                  <div className="col-xs-12 col-sm-3">
                    <div className="user-img-uplod p-reletive">
                      <strong>Profile Picture</strong>
                      <div className="profile_holder">
                        <img src={image} className="mr-auto ml-auto" alt="image"/>
                      </div>
                      <div className="upload-btn-wrapper">
                        <button className="btn">Choose picture</button>
                        <input type="file" name="myfile"/>
                      </div>
                     {props.propgressBtnComponent}
                      {/* <a onClick={e=> progressBtn(e)}style={{cursor:'pointer'}} className="btn btn-create ripple">Proceed</a> */}
                    
                    </div>
                  </div>
               
           
  );
}
AccountStatus.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AccountStatus);
