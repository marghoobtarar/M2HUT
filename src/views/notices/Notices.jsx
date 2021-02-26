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

function Notices(props) {
  
    useEffect(()=>{

    },[])
    //******************************** all state variables
    const [notices, setNotices]=useState(
      [
        {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:2,
          date:'12/01/2022',
          author:'Naeem',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:3,
          date:'12/01/2023',
          author:'Naeem',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:4,
          date:'12/01/2024',
          author:'marghoob',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:5,
          date:'12/01/2024',
          author:'marghoob',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:6,
          date:'12/01/2024',
          author:'marghoob ahmad',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:7,
          date:'12/01/2024',
          author:'marghoob tarar',
          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:8,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:9,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:10,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:11,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:12,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:13,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:14,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:15,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:16,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:17,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:18,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:1,
          date:'12/01/2021',
          author:'Asif',
          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },

      
      ])

      const [postDescription, setPostDescription ] = useState(false)
      const [editPost, setEditPost ] = useState(false)
      const [newPost, setNewPost ] = useState(false)
      const [allPost, setAllPost ] = useState(true)
      const[selectedPostDescription, setSelectedPostDescription] = useState({})


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

        }
        console.log(selectedPostDescription)

      }
      const submitEditData = e=> {
        // submit the post request
        console.log('submit data here and replace the data ')
         setEditPost(false)
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
                />:
                postDescription?
                    <DetailNotices data={selectedPostDescription} editPost = {e => editOldPost(e)}/>
                    :
                    editPost?
                      <EditPost data={selectedPostDescription} 
                          setChangeData ={e => editingPost(e)} 
                          SubmitData = {e => submitEditData(e)}
                          />:null

    }

      
    </div>
    <Footer/>

    </div>
  );
}
Notices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Notices);
