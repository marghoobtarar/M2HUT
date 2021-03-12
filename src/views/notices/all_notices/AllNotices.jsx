import React,{useState,useEffect} from 'react';
import Truncate from 'react-truncate';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import addUser from '../../../assets/img/add-icon.png'
import Pagination from './Pagination';
import Footer from '../../../components/footer/Footer';

function AllNotices(props) {
    useEffect(()=>{

    },[])

//  **************************all state variables
    
    const [currentElement , setCurrentElement] = useState(0)
 
// **************************end state variables

    // *******************all function 

// this will ask for the read the description of the post

  
  const postDescription = e =>{
    console.log('read more',e)
    props.postDescription(e)
  }
  // this will ask for add the new post
  const createPost = e=>{
    console.log('new post creating in allnotices.js')
    props.newPost()
  }
  const currentPage=e=>{
    console.log('calling pages',e)
    setCurrentElement(e-1)
  }
 
      // *******************end function 

  return (
  <div>
    <div className="wrapper container d-flex align-items-stretch">
      
      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="main-content">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h2 className="page-title mb-2 ">Notices</h2>
            </div>
            <div className="col-xs-12 col-sm-6">
              <a style={{cursor:'pointer'}} onClick={e=>createPost()} className="create-post pull-right">
                <span>
                  <img src={addUser} alt="image" />
                </span> Create post
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12">
             
              {
                props.notices.slice(
                  currentElement*5,(currentElement*5)+5)
                  .map(function (data,index) {
                    console.log(data)
                          return<div className="notice-sec" key={index}>
                                    <div className="media">
                                      <strong>{data.date}</strong>
                                      <div className="media-body ml-3">
                                        <h5 className="mt-0">{data.heading}</h5>
                                        <p> 
                                          <Truncate component={'span'}
                                                    lines={2} 
                                                    ellipsis={
                                                              <span>... </span>
                                                              }>
                                                {data.description}
                                            </Truncate> 
                                        </p>
                                        <a style={{cursor:'pointer'}} onClick={e=>postDescription(data)}>
                                          Read More
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                              
                        }
                )
              }
            
                <Pagination dataPage = {e=>currentPage(e)} todos={props.notices}/>
            </div>
          </div>
          <Footer/>
        </div>
      
      </div>
		</div>

    </div>
  );
}
AllNotices.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(AllNotices);
