import React,{useState,useEffect} from 'react';

import styles from './styles'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'
ClassicEditor
    .create( document.querySelector( '#editor' ), {
        image: {
            toolbar: [ 'imageTextAlternative' ]
        }
    } )
function Registration(props) {
    useEffect(()=>{

      axios({method : 'GET',
      url : `http://127.0.0.1:8000/adminuser/register_email/`,
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`,
      },
      data : registration

        }).then(res=>{
          if(res.data.register_email.length>0)
          {  
            console.log(res.data.register_email[0])
            setRegistration(res.data.register_email[0])
            setId(res.data.register_email[0].id)
            setUpdate(true)
          }
          else{
            setRegistration(
              {  
                heading:'',
                description:''}
              )

          }
          


            
        }).catch(err=>{
            console.log(err)
        })

    },[])
    const handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    }
    const [id, setId] = useState()
    const [isUpdate, setUpdate] = useState(false)
    const [registration , setRegistration] = useState({ })
    const updateForm = (e)=> {
      console.log(registration.id)
      setRegistration({...registration,[e.target.name]:e.target.value})
    }
   
   const submitForm = e=>{
     e.preventDefault()
     console.log('registration data is here',registration)
     if(!isUpdate){
      axios({method : 'POST',
      url : `http://127.0.0.1:8000/adminuser/register_email/`,
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`,
      },
      data : registration

        }).then(res=>{
            console.log(res)
            setRegistration(res.data.register_email)
            // setDataPosted(true)

            
        }).catch(err=>{
            console.log(err.res)
            alert(err.res)
        })
     }
     else{
       console.log(registration)
      axios({method : 'PUT',
      url : `http://127.0.0.1:8000/adminuser/manage_register_email/${id}/`,
      headers : {
          Authorization : `Bearer ${localStorage.getItem('access_token')}`,
      },
      data : registration

        }).then(res=>{
            console.log(res.data)
            setRegistration(res.data)
            // setDataPosted(true)

            
        }).catch(err=>{
            alert('Please input the data into all fields.')
        })
     }

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
          // data="<p>Hello from CKEditor 5!</p>"

          data = {registration.description}
          // onChange={ ( event, editor ) => console.log( { event, editor } ) }
          onReady = {editor => {
            //initilize our application
          }}
          config={
            {
              ckfinder: {
            // Upload the images to the server using the CKFinder QuickUpload command.
                 uploadUrl: `http://127.0.0.1:8000/adminuser/ckeditor_image/`
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
