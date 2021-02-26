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
import { BrowserRouter as Router, Route,Redirect ,withRouter} from "react-router-dom";
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
        url: `https://m2hut-backend.wantechsolutions.com/api/admin/profile/get`,
        headers:{
          Authorization:  `Bearer ${localStorage.getItem('access_token')}`
        }
    }).then((res)=>{
      console.log('yes it is good')
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

        {isLoggedIn?
      
        <Redirect to="/dashboard" />

        :<Redirect to='/login'/>}
        <Route path="/dashboard" component={Home}/>
        <Route path="/users" component={User}/>
        <Route path="/data" component={ReportLogs}/>
        <Route path="/notices" component={Notices}/>
        <Route path="/settings" component={Settings}/>
        <Route  exact path="/login" component={Login}/>
        {/* <Redirect to='/login'/> */}


       
          </UserProvider>
      </Router>
      </header>
      
    </div>
  );
}

export default App
