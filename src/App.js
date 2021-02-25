// import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Login from './views/login/Login'
import Home from './views/home/Home'
import Navbar from './components/navbar/Navbar'
import AllNotices from './views/notices/all_notices/AllNotices';
import Notices from './views/notices/Notices';
import User from './views/user/User';
import ReportLogs from './views/report_logs/ReportLogs';

import List from "./views/DummyList";
import Form from "./views/Form";
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import { UserProvider } from "./Context";
import Settings from './views/settings/Settings'


// import { addArticle ,userAuthenticated} from "./js/actions/index";

// import { connect } from "react-redux";
// function mapDispatchToProps(dispatch) {
//   return {
//     userAuthenticated: user_logged_in => dispatch(userAuthenticated(user_logged_in))
//   };
// }
// const mapStateToProps = state => {
//   return { user_logged_in: state.user_logged_in };
// };
function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    axios(
      {
        method:'GET',
        url: `http://127.0.0.1:8000/adminuser/hello/`,
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then((res)=>{
      // var access =true
      // props.userAuthenticated({ access });
      setIsLoggedIn(true)
      // console.log('user has logged in')
      
    }).catch((err)=>{
      // var access = false
      // props.userAuthenticated({ access });
      setIsLoggedIn(false)
    }) 
   },[])
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <UserProvider value={isLoggedIn}>
      <Navbar/>
        {!isLoggedIn?
        <>
        <Route exact path="/" component={User}/>
        <Route path="/home" component={User}/>

        <Redirect to='/home' />
        </>
         :
         <>
         <Route path="/" component={Login} />
         <Redirect to='/' component={Login}/>
         </>

         }  
       

          {/* <Login/> */}
          {/* <Navbar/> */}
          {/* <Notices/> */}
          {/* <User/> */}
          {/* <ReportLogs/> */}

          {/* <Home/> */}
          </UserProvider>
      </Router>
      </header>
      
    </div>
  );
}

export default App;
