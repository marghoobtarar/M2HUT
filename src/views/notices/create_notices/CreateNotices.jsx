import React,{useState,useEffect} from 'react';
import Truncate from 'react-truncate';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import addUser from '../../../assets/img/add-icon.png'
import imagePlaceholder from '../../../assets/img/placeholder.png'
function CreateNotices(props) {
    useEffect(()=>{

    },[])
//  **************************all state variables

const [data, setData] = useState(
                {
                  heading:'',
                  image:imagePlaceholder,
                  draft:false,
                  publish:false,
                  description:'',
                  date:''
                  })

// **************************end state variables

    // *******************all function 
    const creatingPost = e=>{
      console.log('edit data in createnotices.js',e.target.value)
      if(e.target.name!=='image' && e.target.name!=='draft' && e.target.name!=='publish')
      {
        setData({...data,[e.target.name]:e.target.value})

      }
      else if(e.target.name==='draft'|| e.target.name==='publish')
      {
        setData({...data,[e.target.name]:!data[e.target.name]})

      }
      else{
        setData({...data,[e.target.name]:URL.createObjectURL(e.target.files[0])})

      }

    }

      // *******************end function 

  return (
    <div className="wrapper container d-flex align-items-stretch">
      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="page-title mb-2 ">Publish Notice</h2>
            </div>
          </div>
          <div className="edit-post">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="input-field">
                  <input onChange={e=>creatingPost(e)} value={data.heading} type="text" placeholder="Post title here" className="form-controls" name="heading"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="input-field">
                  <textarea onChange={e=>creatingPost(e)}value={data.description} type="text" className="form-controls" placeholder="Post text goes here" name="description"></textarea>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="content-txt">
                      <strong>Author</strong>
                      <p>Ceta Administartor</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <div className="input-field">
                      <input onChange={e=>creatingPost(e)} type="text" className="form-controls" placeholder="Date Published" name="date" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="blog-holder">
                  <img src={data.image} alt="image" />
                </div>
                <div className="profile_name mb-2">
                  <div className="upload-btn-wrapper">
                    <button className="btn">Choose picture</button>
                    <input onChange={e=>creatingPost(e)} type="file" name="image" />
                  </div>
                </div>
                <div className="custom-control custom-checkbox mb-1">
                  <input type="checkbox" onChange={e=>creatingPost(e)} className="custom-control-input mt-1" id="customCheck" name="draft"/>
                  <label className="custom-control-label" htmlFor="customCheck">Save as Draft</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input onChange={e=>creatingPost(e)} type="checkbox" className="custom-control-input mt-1" id="customCheck2" name="publish"/>
                  <label className="custom-control-label" htmlFor="customCheck2">Publish Post</label>
                </div>
                <a href="#" className="confirm-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Confirm</a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    	</div>
  );
}
CreateNotices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(CreateNotices);
