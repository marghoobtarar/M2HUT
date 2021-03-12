import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import AllNotices from './all_notices/AllNotices'
import CreateNotices from './create_notices/CreateNotices';
import DetailNotices from './detail_notices/DetailNotices';
import blog from '../../assets/img/Icon/blog.jpg';
import EditPost from './edit_post/EditPost';
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'
function Notices(props) {
  
    useEffect(()=>{

      axios({method:'GET', 
      url:`http://127.0.0.1:8000/adminuser/notices/`,
      headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
          'content-type': 'multipart/form-data'
        }
      })
    .then(response => {
      setNotices(response.data.notices)
        // console.log(response.data.notices);
    })
    .catch(error => {
        console.log(error);
    });

    },[])
    //******************************** all state variables
    const [notices, setNotices]=useState([])

      const [postDescription, setPostDescription ] = useState(false)
      const [editPost, setEditPost ] = useState(false)
      const [newPost, setNewPost ] = useState(false)
      const [allPost, setAllPost ] = useState(true)
      const[selectedPostDescription, setSelectedPostDescription] = useState({})
      const [image ,setImage] = useState(null)

      // *******************   end variables *************************

      // all functions
      const viewPostDescription = e => {
        console.log('view description in notices.js',e)
        setSelectedPostDescription(e)
        // setEditPost(false)
        setNewPost(false)
        setAllPost(false)
        setPostDescription(true)


      }
      const createNewPost = e => {
        console.log('new post creating in notices.js')
        setAllPost(false)

        setNewPost(true)


      }
      const editOldPost = e => {
        console.log('edit post in notices.js')
        setPostDescription(false)
        setEditPost(true)

      }
      const editingPost = e=>{
        console.log('edit data in notice.js')
        if(e.target.name!=='image' && e.target.name!=='draft' && e.target.name!=='publish')
        {
          setSelectedPostDescription({...selectedPostDescription,[e.target.name]:e.target.value})

        }
        else if(e.target.name==='draft'|| e.target.name==='publish')
        {
          setSelectedPostDescription({...selectedPostDescription,[e.target.name]:!selectedPostDescription[e.target.name]})
  
        }
        else{
          setSelectedPostDescription({...selectedPostDescription,[e.target.name]:URL.createObjectURL(e.target.files[0])})
          setImage(e.target.files[0])
        }
        console.log(selectedPostDescription)

      }
      const submitEditData = e=> {
        // submit the post request

        let formData = new FormData();

        formData.append('heading', selectedPostDescription.heading);   //append the values with key, value pair
        if(image!==null ){
          formData.append('image', image);
        
        }
        formData.append('draft', selectedPostDescription.draft);
        formData.append('publish', selectedPostDescription.publish);
        formData.append('description', selectedPostDescription.description);
        formData.append('date', selectedPostDescription.date);
        formData.append('author', 'CETA Administrator');
        
        console.log('this is the image', image)
        
        axios({method:'PUT', 
              url:`http://127.0.0.1:8000/adminuser/manage_notices/${selectedPostDescription.id}/`,
              data: formData,
              headers:{
                  Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
                  'content-type': 'multipart/form-data'
                }
              })
            .then(response => {
                console.log(response);
                // setNoticeCreated(true)
                // props.noticeCreated()
                setEditPost(false)
                setAllPost(true)
                setImage(null)
                axios({method:'GET', 
                url:`http://127.0.0.1:8000/adminuser/notices/`,
                headers:{
                    Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
                    'content-type': 'multipart/form-data'
                  }
                })
              .then(response => {
                setNotices(response.data.notices)
                  // console.log(response.data.notices);
              })
              .catch(error => {
                  console.log(error);
              });
            })
            .catch(error => {
                console.log(error);
            });


        console.log('submit data here and replace the data ',selectedPostDescription)
         
      }
      const noticeCreated = e =>{
        // console.log('notices created in notice.js')

        axios({method:'GET', 
      url:`http://127.0.0.1:8000/adminuser/notices/`,
      headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
          'content-type': 'multipart/form-data'
        }
      })
    .then(response => {
      setNotices(response.data.notices)
        // console.log(response.data.notices);
    })
    .catch(error => {
        console.log(error);
    });

        setNewPost(false)
        setAllPost(true)
      }
  return (
  <div>
    <Navbar/>
    <div className="wrapper container d-flex align-items-stretch">
      <Sidebar nav_page={'Notices'} />
      {allPost?<AllNotices notices={notices}
              postDescription = {e=>viewPostDescription(e)}
              newPost = {e=>createNewPost(e)}
              total_notices = {notices.length}
              
              /> 
              : newPost?
                <CreateNotices 
                postDescription = {e => viewPostDescription(e)}
                newPost = {e => createNewPost(e)} 
                noticeCreated = {e=>noticeCreated(e)}
                />:
                postDescription?
                    <DetailNotices data={selectedPostDescription} editPost = {e => editOldPost(e)}/>
                    :
                    editPost?
                      <EditPost data={selectedPostDescription} 
                          setChangeData ={e => editingPost(e)} 
                          SubmitData = {e => submitEditData(e)}
                          image = {image}
                          />:null

    }

      
    </div>

    </div>
  );
}
Notices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Notices);
