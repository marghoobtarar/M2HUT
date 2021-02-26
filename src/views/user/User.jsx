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
import CreateUser from './create_user/CreateUser';
// import EditPost from './edit_post/EditPost'; 
import placeholder from '../../assets/img/placeholder.png'
import {data} from './data'
import Navbar from '../../components/navbar/Navbar';

function User() {
    useEffect(()=>{

    },[])
    //******************************** all state variables
 
    const [userData, setUserData] = React.useState({
// ************* personal information
      id:'',
      firstName:'',
      secondName:'',
      identityNumber:'',
      passport:'',
      gender:'',
      dob:'',
      phone:'',
      cell:'',
      email:'',
      address:'',
      city:'',
      zip:'',
      country:'',
      password:'',
      image:placeholder,
// ********************institute detail
      trainingInstitute:'',
      institutePhone:'',
      facilitatorName:'',
      institutioAccount:'',
      instituteAddress:'',
      instituteCity:'',
      instituteZip:'',
      instituteCountry:'',
// **********************account status
      registerName:'',
      companyName:'',
      accountStatus:false
      
    })
    const [users, setUsers]=useState(data)

      const [userDescriptionData, setUserDescriptionData ] = useState({})
      const [viewUser, setViewUser] = useState(false)
      const [newUser, setNewUser] = useState(false)

      const [editUser, setEditUser ] = useState(false)
      const [editUserData, setEditUserData] = useState({})
      const [allUsers, setAllUsers ] = useState(true)


      // *******************   end variables *************************

      // all functions
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
        setUserData(e)
        console.log(e)
        setAllUsers(false)
        setEditUser(false)
        setViewUser(true)
      }
      const createUserView = e=>{
        setAllUsers(false)
        setEditUser(false)
        setViewUser(false)
        setNewUser(true)
      }
      const createUserData = e=>{
        if(e.target.name !== 'accountStatus' && e.target.name!== 'image'){
          setUserData({...userData,[e.target.name]:e.target.value})

        }
        else if(e.target.name ==='accountStatus'){
          setUserData({...userData,[e.target.name]:!userData.accountStatus})

        }
        else if(e.target.name === 'image'){
          // URL.createObjectURL(object)
          setUserData({...userData,[e.target.name]:URL.createObjectURL(e.target.files[0])})


        }
        console.log(userData)
      }

  return (
  <div>
    <Navbar/>

    {/* <div className="wrapper container d-flex align-items-stretch"> */}
      {/* <Sidebar nav_page={'Notices'} /> */}
      {allUsers?<AllUsers users={users}
              // deleteUser = {e=> deleteUser(e)}
              // editUser = {e=>editUserDataView(e)}
              viewUser = {e => viewUserData(e)}
              createUser = { e => createUserView(e) }
              
              /> 
              :newUser?<CreateUser 
                          userData = {userData}
                         createUserData= {e => createUserData(e) }/> 
              :viewUser?<ViewUser userData = {userData}/>:null}
    </div>
  );
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(User);
