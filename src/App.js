// import './App.css';
import Login from './views/login/Login'
import Home from './views/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import AllNotices from './views/notices/all_notices/AllNotices';
import Notices from './views/notices/Notices';
import User from './views/user/User';
import ReportLogs from './views/report_logs/ReportLogs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          {/* <Login/> */}
          <Navbar/>
          {/* <Notices/> */}
          {/* <User/> */}
          <ReportLogs/>

          <Footer/>
          {/* <Home/> */}
      </header>
    </div>
  );
}

export default App;
