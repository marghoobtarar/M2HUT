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
function Registration(props) {
    useEffect(()=>{

    },[])
    const [registration , setRegistration] = useState({heading:'',description:''})
    const updateForm = (e)=> {
      setRegistration({...registration,[e.target.name]:e.target.value})
    }
   
   const submitForm = e=>{
     e.preventDefault()
     

   }
  //  function createMarkup() {
  //   return {__html: registration.description};
  // }
  return (
    <>
    <form onSubmit={e=>submitForm(e)}>
      <div className="reglable">
         <input type="text" id=""value={registration.heading} onChange={e=>updateForm(e)} name="heading" placeholder="welcome to CETA Artisan platform "/><br/>
      </div>
      <div className="textbox" style={{marginTop:'20px'}}>
       
       <CKEditor

          editor={ ClassicEditor }

          // onChange={ ( event, editor ) => console.log( { event, editor } ) }
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
          // onInit={ editor => {
          //     // You can store the "editor" and use when it is needed.
          //     console.log( 'Editor is ready to use!', editor );
          // } }
          onChange={ ( event, editor ) => {
            console.log( { event, editor } )
              const data = editor.getData();
              setRegistration({...registration,['description']:data})
              
              
              // console.log(registration)
              //this.state.handleWYSIWYGInput(this.props.id, data);
              console.log( { event, editor, data } );
              // console.log(this.state.content);
          } }
          // onBlur={ editor => {
          //     console.log( 'Blur.', editor );
          // } }
          // onFocus={ editor => {
          //     console.log( 'Focus.', editor );
          // } }
          // UploadAdapter={FileRepository}
      />
      </div>

      <div className="btnemailupdate">
        <input type='submit' className="btn" value={'Update'} />
      </div>
     
      {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}

    </form>
    
     </>
     );
}
Registration.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(Registration);
