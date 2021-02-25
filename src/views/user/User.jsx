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
// ********************institute detail
      trainingInstitute:'',
      institutePhone:'',
      facilitatorName:'',
      institutioAccount:'',
      instituteAddress:'',
      instituteCity:'',
      instituteZip:'',
// **********************account status
      registerName:'',
      companyName:'',
      accountStatus:''
      
    })
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
        setUserData({...userData,[e.target.name]:e.target.value})
      }

  return (
  <div>
    {/* <div className="wrapper container d-flex align-items-stretch"> */}
      {/* <Sidebar nav_page={'Notices'} /> */}
      {allUsers?<AllUsers users={users}
              // deleteUser = {e=> deleteUser(e)}
              // editUser = {e=>editUserDataView(e)}
              viewUser = {e => viewUserData()}
              createUser = { e => createUserView(e) }
              
              /> 
              :newUser?<CreateUser 
                          createUserData= {e => createUserData(e) }/> 
              :viewUser?<ViewUser/>:null}
    </div>
  );
}
User.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(User);
