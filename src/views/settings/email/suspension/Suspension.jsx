import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        image: {
            toolbar: [ 'imageTextAlternative' ]
        }
    } )
function Suspension(props) {
    useEffect(()=>{

    },[])
    const [suspension , setSuspension] = useState({heading:'',description:''})
    const updateForm = (e)=> {
      setSuspension({...suspension,[e.target.name]:e.target.value})
    }
   
   const submitForm = e=>{
     e.preventDefault()
     

   }
  
  return (
    <>
    <form onSubmit={e=>submitForm(e)}>
      <div className="reglable">
         <input type="text" id=""value={suspension.heading} onChange={e=>updateForm(e)} name="heading" placeholder="your CETA account suspended"/><br/>
      </div>
      <div className="textbox" style={{marginTop:'20px'}}>
       
       <CKEditor

          editor={ ClassicEditor }

          onReady = {editor => {
            //initilize our application
          }}
          config={
            {
              ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
            uploadUrl: 'http://localhost:8000/uploads'
              }
            }
          }
         
          onChange={ ( event, editor ) => {
            console.log( { event, editor } )
              const data = editor.getData();
              setSuspension({...suspension,['description']:data})
              
          } }
        
      />
      </div>

      <div className="btnemailupdate">
        <input type='submit' className="btn" value={'Update'} />
      </div>
     

    </form>
    
     </>
     );
}
Suspension.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Suspension);
