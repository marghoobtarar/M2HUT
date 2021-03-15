import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Footer from '../../../components/footer/Footer';

function EditPost(props) {
    useEffect(()=>{
console.log('editpost.js',props.data)
    },[])
//  **************************all state variables
// **************************end state variables

    // *******************all function 

    const dataChange = e => {
      props.setChangeData(e)
    }
  
      // *******************end function 

  return (
    <div className="wrapper container d-flex align-items-stretch">
      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="page-title mb-2 ">Edit Notice</h2>
            </div>
          </div>
          <div className="edit-post">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="input-field">
                  <input onChange={e=>dataChange(e)} value={props.data.heading} type="text" placeholder="Post title here" className="form-controls" name="heading"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="input-field">
                  <textarea onChange={e=>dataChange(e)} value={props.data.description} type="text" className="form-controls" placeholder="Post text goes here" name="description"></textarea>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="content-txt">
                      <strong>Author</strong>
                      <p>{props.data.author}</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <input onChange={e=>dataChange(e)} value={props.data.date} type="date" className="form-controls" placeholder="Date Published" name="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="blog-holder">
                  {console.log('image here',props.image)}
                  {props.image === null? <img src={`http://127.0.0.1:8000${props.data.image}`} alt="image" />
                    : <img src={`${props.data.image}`} alt="image" /> }
                </div>
                <div  className="profile_name mb-2">
                  <div className="upload-btn-wrapper">
                    <button   className="btn">Choose picture</button>
                    <input onChange={e=>dataChange(e)}  type="file" name="myfile" name='image' />
                  </div>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input onChange={e=>dataChange(e)} type="checkbox" defaultChecked={props.data.draft} className="custom-control-input mt-1" id="customCheck" name='draft'/>
                  <label className="custom-control-label" htmlFor="customCheck">Save as Draft</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input onChange={e=>dataChange(e)} type="checkbox" defaultChecked={props.data.publish} className="custom-control-input mt-1" id="customCheck2" name="publish"/>
                  <label className="custom-control-label" htmlFor="customCheck2">Publish Post</label>
                </div>
                {/* <a className='btn' style={{cursor:'pointer'}}onClick={e=>props.SubmitData()} className="confirm-btn"> */}
                <a onClick={e=>props.SubmitData()}  className="  confirm-btn" style={{color:'green', marginBottom:'50px', marginTop:'-5px' ,cursor:'pointer'}}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true">
                    </i> 
                   Confirm
                    </a>
                {/* </a> */}
              </div>
            </div>
          </div>
          <Footer/>
        </div>
       
      </div>
    	</div>
  );
}
EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(EditPost);
