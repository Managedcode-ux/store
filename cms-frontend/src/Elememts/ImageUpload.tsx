import axios from 'axios'
import styles from './ImageUploader.module.css'
import { useState } from 'react'



export default function ImaṇgeUploader() {
  const [file,setFile] = useState<any>([]) 
  const [uploadedFiles,setUploadedFiles] = useState<any>([])

  const handleUploadChange = (event) => {
    console.log(event)
    setFile(event?.target.files[0])
  }

  const handleSubmit = () => {
    event?.preventDefault();
    
    const url = 'http://localhost:3000/uploadFile'

    const formData = new FormData()
    
    if (file !== null){
      formData.append('file',file)
      formData.append('fileName', file.name);
    }
    
    const config = {
      headers:{
        'content-type':'multipart/form-data'
      }
    }

    axios.post(url,formData,config)
      .then((response)=>{
        console.log(response)
      })
  }

  return (
    <div className={styles.UploadContainer}>
      <form >
        <h1>React file Upload</h1>
        <input type="file" onChange={() => handleUploadChange(event)}/>
        <button type='submit'>Upload</button>
      </form>
    </div>
  );
}
