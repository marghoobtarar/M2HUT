import React,{useState,useEffect} from 'react';
import Truncate from 'react-truncate';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import addUser from '../../../assets/img/add-icon.png'
import imagePlaceholder from '../../../assets/img/placeholder.png'
import Footer from '../../../components/footer/Footer';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
function CreateNotices(props) {
    useEffect(()=>{

    },[])
//  **************************all state variables
const [noticeCreated, setNoticeCreated] = useState(false)
const [data, setData] = useState(
                {
                  heading:'',
                  image:imagePlaceholder,
                  draft:false,
                  publish:false,
                  description:'',
                  date:''
                  })

// 
const [image, setImage] = useState()
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
        setImage(e.target.files[0])
      }

    }

      // *******************end function 
const submitPost = e => {
e.preventDefault()
let formData = new FormData();

formData.append('heading', data.heading);   //append the values with key, value pair
if(image!==undefined ){
  formData.append('image', image);

}
formData.append('draft', data.draft);
formData.append('publish', data.publish);
formData.append('description', data.description);
formData.append('date', data.date);
formData.append('author', 'CETA Administrator');

console.log('this is the image', image)

axios({method:'POST', 
      url:`http://127.0.0.1:8000/adminuser/notices/`,
      data: formData,
      headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
          'content-type': 'multipart/form-data'
        }
      })
    .then(response => {
        console.log(response);
        // setNoticeCreated(true)
        props.noticeCreated()
    })
    .catch(error => {
        console.log(error);
    });
}
  return (
    <div className="wrapper container d-flex align-items-stretch">
      {noticeCreated?<Redirect to='/notices'/>:null}
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
                      <input onChange={e=>creatingPost(e)} type="date" value={data.date} className="form-controls" placeholder="Date Published" name="date" />
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
                <a style={{cursor:'pointer'}} onClick={e=>submitPost(e)} className="confirm-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Confirm</a>
              </div>
            </div>
          </div>
          <Footer/>
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
