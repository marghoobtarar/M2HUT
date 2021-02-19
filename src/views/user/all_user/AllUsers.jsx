import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import addUser from '../../../assets/img/add-icon.png'
import Pagination from './Pagination';
import Sidebar from '../../../components/sidebar/Sidebar';

function AllUsers(props) {
    useEffect(()=>{

    },[])

//  **************************all state variables
    
   
// **************************end state variables

    // *******************all function 

// this will ask for the read the description of the post

  

 
      // *******************end function 

  return (
  <div>
      
      
     <div className="wrapper container d-flex align-items-stretch">
     <Sidebar nav_page={'User'} />

      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="page-title mb-2 ">Users Information</h2>
            </div>
            <div className="col-xs-12 col-sm-6">
              <a href="#" className="create-post pull-right"><span><img src="img/add-icon.png" alt="image" /></span> Create User</a>
            </div>
          </div>
          <div className="user-list">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">User</th>
                    <th scope="col">ID Number</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Province</th>
                    <th scope="col">Actoin</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    props.users.map(function (data,index) 
                     { return<tr key={index}>
                              <th>{data.user}</th>
                              <td>{data.id}</td>
                              <td>{data.contact}</td>
                              <td>{data.province}</td>
                              <td>
                                <div className="d-block">
                                  <a onClick={e=> props.viewUser(data)} style={{cursor:'pointer'}}><i className="fa fa-eye" aria-hidden="true"></i></a>
                                  {/* <a onClick={e=> props.editUser(data)} style={{cursor:'pointer'}}><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                  <a onClick={e=> props.deleteUser(data)} style={{cursor:'pointer'}}><i className="fa fa-trash" aria-hidden="true"></i></a> */}
                                </div>
                              </td>
                            </tr>
                       }
                    )
                  }


                   </tbody>
              </table>
            </div>    
          </div>
        </div>
      
      </div>
		</div>
  	</div>
    
  );
}
AllUsers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AllUsers);
