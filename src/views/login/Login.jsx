import React,{useState,useEffect, useContext} from 'react';
import axios from 'axios'
import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import image from '../../assets/img/Icon/login.jpg'
import logo from '../../assets/img/logo.png'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import UserContext from "../../Context";

// import { addArticle ,userAuthenticated} from "../../js/actions/index";

// function mapDispatchToProps(dispatch) {
//   return {
//     userAuthenticated: user_logged_in => dispatch(userAuthenticated(user_logged_in))
//   };
// }

function Login(props) {
  const {
    sideBar,
    setSidebar,
    logged_in,
    setLoggedIn,
    updateState,
  } = useContext(UserContext);

  useEffect(()=>{
    console.log('check logged in ',logged_in)
    axios(
      {
        method:'GET',
        url: `http://127.0.0.1:8000/adminuser/hello/`,
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then((res)=>{
      setLoggedIn(true)
      // var access =true
      // props.userAuthenticated({ access });
      // console.log('user has logged in',logged_in)
      setIsLoggedIn(true)
      
      
    }).catch((err)=>{
     
      setIsLoggedIn(false)
    }) 
  //  console.log(props.user_logged_in)
    var remember = localStorage.getItem('remember')
    if(remember){
      setCredentials(
              {
                email : localStorage.getItem('email'),
                password : localStorage.getItem('password'),
                remember : true
              })
    }
  },[])
  const [credentials,setCredentials]=useState({email:'',password:'',remember:''})
  const [inValid, setInValid] = useState(false)
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const updateForm = e=>{
    setInValid(false)
    if(e.target.name !== 'remember'){
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }
    else{
      setCredentials({...credentials,[e.target.name]:!credentials.remember})


    }
  }
  const submitForm = e =>{
    e.preventDefault()
    if(credentials.remember && credentials.email!==''){
      localStorage.setItem('email',credentials.email)
      localStorage.setItem('password',credentials.password)
      localStorage.setItem('remember',true)
    }
   else{
      localStorage.removeItem('email')
      localStorage.removeItem('password')
      localStorage.removeItem('remember')
    }
    var payload = {email:credentials.email,password:credentials.password}
       // axios({
    //   method: "POST",
    //   url: `http://127.0.0.1:8000/user/token/`,
    //   body:data,
    //   headers: {
    //      Authorization: `Bearer ${localStorage.getItem("token")}`,

    //     "Content-Type": "multipart/form-data",
    //     "Content-Type": "application/json",
    //   },
    // })
    axios
    .post(`http://127.0.0.1:8000/api/token/`, payload)
    .then((res)=>{
      // props.addArticle({ 'sddsj' });
      // var access =true
      localStorage.setItem('access_token',res.data.access)
      // props.userAuthenticated({ access });
      setLoggedIn(true)
      setIsLoggedIn(true)
      // console.log(access)
    }).catch((err)=>{
      console.log(err)
      setInValid(true)
    })
  }
  return (
    <div className="container h-100" style={{marginTop:'10%'}}>
      {isLoggedIn ? <Redirect to="/notices" /> : 
       <div className="d-flex justify-content-center align-items-center h-100">
       <div className="login-panel">
         <div className="row">
           <div className="col-xs-12 col-sm-6">
             <div className="login-banner" style={{background:` url(${image})` ,backgroundRepeat:' no-repeat', height: '100%', borderRadius: '20px 0 0 20px', backgroundSize: 'cover', backgroundPosition: 'right'}}>
               
             </div>
           </div>
           <div className="col-xs-12 col-sm-6">
            <div className="login-form">
               <div className="login-logo">
                 <img src={logo} alt="logo" />
               </div>
               <strong>Welcome</strong>
               <small>Get access to your account</small>
               <form onSubmit={e=>submitForm(e)}>
                 <div className="input-field">
                   <label>Email Address</label>
                   <input onChange={e=>updateForm(e)} 
                         style={{border:inValid?'1px solid red':''}} 
                         value={credentials.email} 
                         type="email" 
                         className="form-controls"
                         name="email"/>
                 </div>
                 <div className="input-field">
                   <label>Password</label>
                   <input onChange={e=>updateForm(e)}
                          style={{border:inValid?'1px solid red':''}}
                           value={credentials.password}
                           type="password"
                           className="form-controls"
                           name="password"/>
                 </div>
                 {inValid?  <div style={{textAlign:'center',color:'red'}}>
                   <span>Invalid credentials</span>
 
                 </div>:null}
               
                 <div className="checkbox custom-checkbox pull-left">
                   <label>
                     <input onChange={e=>updateForm(e)}  type="checkbox" name='remember' defaultChecked={localStorage.getItem('remember')}/>
                     <span className="checkbox-decorator"><span className="check"></span>
                     </span> Remember me 
                   </label>
                 </div>
                 
                 <div className="pull-right"><a href="/forgot-password"> Forgot Password ? </a> </div>
                 <div className="form-group">
                   <button className="btn btn-info btn-lg btn-block login-btn ripple">Sign In</button>
                 </div>
               </form> 
            </div>  
           </div>
         </div>  
       </div>
     </div>
  
      }
    </div>
  );
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Login);
// const Login = connect(
//   null,
//   mapDispatchToProps
// )(Login);

// export default connect(
//   null,
//   mapDispatchToProps,
// )(Login);

