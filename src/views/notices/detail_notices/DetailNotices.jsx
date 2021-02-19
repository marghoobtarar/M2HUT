import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import footer from '../../assets/img/M2hut-logo.png'

// import logo from '../assets/img/logo.png'
// import blog from '../../../assets/img/Icon/blog.jpg'

function DetailNotices(props) {
    useEffect(()=>{

    },[])

    const editPost = e => {
      console.log('edit post in detailNotices.js')
      props.editPost()
    }

  return (
  <div>
       <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="blog-image-holder">
                {/* <a href="#" className="btn btn-back ripple">Edit Post</a> */}
                <a onClick={e => editPost(e)}  className="  confirm-btn" style={{color:'green', marginBottom:'50px', marginTop:'-5px' ,cursor:'pointer'}}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true">
                    </i> 
                    Edit Post
                    </a>

                <img src={props.data.image} alt="blog" />
                <strong>Date Pulished</strong>
                <small>{props.data.date}</small>
                <strong>Author</strong>
                <small>{props.data.author}</small>
              </div>
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="notice-content-holder">
                <h3>{props.data.heading}</h3>
                <p>{props.data.description}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
DetailNotices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(DetailNotices);
