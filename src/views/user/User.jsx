import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Sidebar from '../../components/sidebar/Sidebar';
import AllUsers from './all_user/AllUsers'
// import CreateNotices from './create_notices/CreateNotices';
// import DetailNotices from './detail_notices/DetailNotices';
import blog from '../../assets/img/Icon/blog.jpg';
import EditUser from './edit_user/EditUser';
import ViewUser from './view_user/ViewUser';
// import EditPost from './edit_post/EditPost'; 

function User() {
    useEffect(()=>{

    },[])
    //******************************** all state variables
    const [users, setUsers]=useState(
      [
        {
          id:1,
          user:'Asif',
          contact:'04828294',
          province:'punjab',

          image:blog,
          draft:true,
          publish:false,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
        {
          id:2,
          
          user:'marghoob',
          contact:'04828294',
          province:'punjab',


          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:3,
          user:'marghoob',
          contact:'04828294',
          province:'punjab',

          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        }, {
          id:4,
         
          user:'tarar',
          contact:'04828294',
          province:'kpk',


          image:blog,
          draft:true,
          publish:true,
          heading:'Department of Transport issues 100 employees with an updated work relations mandate.',
          description:'The department of Transport DG has signed a new set of workplace conducts to make the workplace more safe for all the staff'
        },
      
      
      ])

      const [userDescriptionData, setUserDescriptionData ] = useState({})
      const [viewUser, setViewUser] = useState(false)
      const [editUser, setEditUser ] = useState(false)
      const [editUserData, setEditUserData] = useState({})
      const [newPost, setNewPost ] = useState(false)
      const [allUsers, setAllUsers ] = useState(true)
      const[selectedPostDescription, setSelectedPostDescription] = useState({})


      // *******************   end variables *************************

      // all functions
      // const viewPostDescription = e => {
      //   console.log('view description in notices.js',e)
      //   setSelectedPostDescription(e)
      //   // setEditPost(false)
      //   setNewPost(false)
      //   setAllPost(false)
      //   setPostDescription(true)


      // }
      // const createNewPost = e => {
      //   console.log('new post creating in notices.js')
      //   setAllPost(false)

      //   setNewPost(true)


      // }
      // const editOldPost = e => {
      //   console.log('edit post in notices.js')
      //   setPostDescription(false)
      //   setEditPost(true)

      // }
      // const editingPost = e=>{
      //   console.log('edit data in notice.js')
      //   if(e.target.name!=='image' && e.target.name!=='draft' && e.target.name!=='publish')
      //   {
      //     setSelectedPostDescription({...selectedPostDescription,[e.target.name]:e.target.value})

      //   }
      //   else if(e.target.name==='draft'|| e.target.name==='publish')
      //   {
      //     setSelectedPostDescription({...selectedPostDescription,[e.target.name]:!selectedPostDescription[e.target.name]})
  
      //   }
      //   else{
      //     setSelectedPostDescription({...selectedPostDescription,[e.target.name]:URL.createObjectURL(e.target.files[0])})

      //   }
      //   console.log(selectedPostDescription)

      // }
      // const submitEditData = e=> {
      //   // submit the post request
      //   console.log('submit data here and replace the data ')
      //    setEditPost(false)
      //    setAllPost(true)
      // }
      const deleteUser= e=>{
        setUsers(users.filter(item => item !== e))
      }
      const editUserDataView = e =>{
        setEditUserData(e)
        setAllUsers(false)
        setEditUser(true)

      }
      const viewUserData = e=>{
        setUserDescriptionData(e)
        setAllUsers(false)
        setEditUser(false)
        setViewUser(true)
      }

  return (
  <div>
    {/* <div className="wrapper container d-flex align-items-stretch"> */}
      {/* <Sidebar nav_page={'Notices'} /> */}
      {allUsers?<AllUsers users={users}
              // deleteUser = {e=> deleteUser(e)}
              // editUser = {e=>editUserDataView(e)}
              viewUser = {e => viewUserData()}
              
              /> 
              :editUser?<EditUser/> 
              :viewUser?<ViewUser/>:null}
              {/* newPost?
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

    } */}
      

    </div>
    // </div>
  );
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(User);
