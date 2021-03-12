import React,{useState,useEffect, useDebugValue} from 'react';

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
// import {data} from './data'
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'
function User() {
    useEffect(()=>{
      axios({method:'GET', 
      url:`http://127.0.0.1:8000/userAuth/create_user/`,
      headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
          'content-type': 'multipart/form-data'
        }
      })
    .then(response => {
        console.log(response);
        setUsers(response.data)
        // setNoticeCreated(true)
    })
    .catch(error => {
        console.log(error);
    });

    },[])
    //******************************** all state variables
    const [userData, setUserData] = React.useState({
// ************* personal information
      id:'',
      first_name:'',
      last_name:'',
      identityNumber:'',
      passport:'',
      gender:'',
      dob:'',
      phone:'',
      cell:'',
      email:'',
      address:'',
      city:'',
      zip_code:'',
      country:'',
      password:'',
      image:placeholder,
// ********************institute detail
      trainingInstitute:'',
      institutePhone:'',
      facilitatorName:'',
      institutionAccount:'',
      instituteAddress:'',
      instituteCity:'',
      institutezip_code:'',
      instituteCountry:'',
// **********************account status
      registerName:'',
      companyName:'',
      accountStatus:true
      
    })
    const [org_image, setOrgImage] = useState(null)
    const [users, setUsers]=useState([])

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
        if(e.target.name ==='suspend'){
          console.log(e.target.name)

          setUserData({...userData,['accountStatus']:false})
          userData.accountStatus = false
          updateUser()
        }
        else if(e.target.name ==='deactivate'){

          setUserData({...userData,['accountStatus']:false})
          console.log(e.target.name)
          userData.accountStatus = false

          updateUser()

        }
        else if(e.target.name ==='activate'){

          setUserData({...userData,['accountStatus']:true})
          userData.accountStatus = true

          updateUser()
        }

        else if(e.target.name !== 'accountStatus' && e.target.name!== 'image'){
          setUserData({...userData,[e.target.name]:e.target.value})
        }
        else if(e.target.name ==='accountStatus'){

          setUserData({...userData,[e.target.name]:!userData.accountStatus})

        }
        else if(e.target.name === 'image'){
          // URL.createObjectURL(object)
          setUserData({...userData,[e.target.name]:URL.createObjectURL(e.target.files[0])})
          setOrgImage(e.target.files[0])
          console.log('updating the image')

        }
        console.log(userData)
      }


  const updateUser = e =>{
    console.log('account status',userData.accountStatus)

    let formData = new FormData();
    formData.append('user_id', userData.id);   //append the values with key, value pair

    formData.append('first_name', userData.first_name);   //append the values with key, value pair
    if(org_image!==null){
      formData.append('image', org_image);
    }
    // 
    console.log('thi is the user dta',userData.gender)
    formData.append('last_name', userData.last_name);
    formData.append('identityNumber', userData.identityNumber);
    formData.append('passport', userData.passport);
    formData.append('gender', userData.gender);

    formData.append('dob', userData.dob);   //append the values with key, value pair
    formData.append('phone', userData.phone);
    formData.append('cell', userData.cell);
    formData.append('address', userData.address);
    formData.append('city', userData.city);
    formData.append('country', userData.country);
    formData.append('zip_code', userData.zip_code);
    formData.append('accountStatus', userData.accountStatus);

    // formData.append('password', userData.password);

    // console.log('update the user please',userData)

axios({method:'PUT', 
url:`http://127.0.0.1:8000/userAuth/manage_user/`,
data: formData,
headers:{
    Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
    // 'content-type': 'multipart/form-data'
  }
})

  .then(response => {
      console.log(response);
      setUsers(response.data)
      // setNoticeCreated(true)
  })
  .catch(error => {
      console.log(error);
  });


  }

  const submitUser = e=>{
    let formData = new FormData();
    console.log(org_image)
    formData.append('first_name', userData.first_name);   //append the values with key, value pair
    formData.append('email', userData.email);   //append the values with key, value pair

    formData.append('image', org_image);
    formData.append('last_name', userData.last_name);
    formData.append('identityNumber', userData.identityNumber);
    formData.append('passport', userData.passport);
    formData.append('gender', userData.gender);

    formData.append('dob', userData.dob);   //append the values with key, value pair
    formData.append('phone', userData.phone);
    formData.append('cell', userData.cell);
    formData.append('address', userData.address);
    formData.append('city', userData.city);
    formData.append('country', userData.country);
    formData.append('zip_code', userData.zip_code);

    formData.append('password', userData.password);

// 
formData.append('trainingInstitute', userData.trainingInstitute);   //append the values with key, value pair
formData.append('institutePhone', userData.institutePhone);
formData.append('facilitatorName', userData.facilitatorName);
formData.append('institutionAccount', userData.institutionAccount);
formData.append('instituteAddress', userData.instituteAddress);
formData.append('instituteCity', userData.instituteCity);
formData.append('institutezip_code', userData.institutezip_code);

formData.append('instituteCountry', userData.instituteCountry);
formData.append('registerName', userData.registerName);
formData.append('companyName', userData.companyName);



formData.append('password', userData.password);


    formData.append('accountStatus', userData.accountStatus);

    console.log('update the user please',formData['image'])
  axios({method:'POST', 
  url:`http://127.0.0.1:8000/userAuth/create_user/`,
  data: formData,
  headers:{
      Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
      // 'content-type': 'multipart/form-data'
    }
  })

  .then(response => {
      console.log(response);
      // setUsers(response.data)
      axios({method:'GET', 
      url:`http://127.0.0.1:8000/userAuth/create_user/`,
      headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`,
          'content-type': 'multipart/form-data'
        }
      })
    .then(response => {
        console.log(response);
        setUsers(response.data)
        // setNoticeCreated(true)
    })
    .catch(error => {
        console.log(error);
    });
      setAllUsers(true)
      setViewUser(false)
      setNewUser(false)
      
    
      // setNoticeCreated(true)
  })
  .catch(error => {
      console.log(error);
  });

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
                         createUserData= {e => createUserData(e) }
                         submitUser = {e=>submitUser(e)}/> 
              :viewUser?
              <ViewUser 
                userData = {userData}
                updateUser = {e=>updateUser(e)}
                createUserData = {e=>createUserData(e)} />:null}
    </div>
  );
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(User);
