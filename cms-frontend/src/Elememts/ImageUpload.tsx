import axios from "axios";
import styles from "./ImageUploader.module.css";
import { useState } from "react";
import { storage } from "../lib/appwrite";
export default function ImaṇgeUploader() {
  const [files, setFiles] = useState<any>([]);
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFileURL, setuploadedFileURL] = useState(null);
  const [error, setError] = useState<any>(null);

  const handleMultipleUploadChange = (event: any) => {
    console.log(event);
    console.assert(
      typeof event !== null,
      "Checking if event in UploadChange function is empty",
    );
    if (typeof event !== null) {
      setFiles([...event?.target.files]);
    }
  };

  const handleMultipleSubmit = () => {
    event?.preventDefault();

    const url = "http://localhost:3000/uploadFile";

    const formData = new FormData();

    if (files !== null) {
      files.forEach((file: any, index: number) => {
        formData.append(`file${index}`, file);
      });
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent: any) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total,
        );
        setUploadProgress(percentCompleted);
      },
    };

    const promise = storage.createFile(bucketId, fileId, file);
    // axios
    //   .post(url, formData, config)
    //   .then((response) => {
    //     console.log(response.data);
    //     setUploadedFiles(response.data.files);
    //     setuploadedFileURL(response.data.fileUrl);
    //   })
    //   .catch((error: any) => {
    //     console.log("Error Uploading the file: ", error);
    //     setError(error);
    //   });
  };

  return (
    <div className={styles.UploadContainer}>
      <form onSubmit={() => handleMultipleSubmit}>
        <h1>React file Upload</h1>
        <input
          type="file"
          multiple
          onChange={() => handleMultipleUploadChange}
        />

        <button type="submit">Upload</button>
        <progress value={uploadProgress} max="100"></progress>
      </form>
      {error && <p>Error uploading file: {error.message}</p>}
      {uploadedFiles.map((file: any, index: number) => (
        // { uploadedFileURL && <img src={uploadedFileURL} alt="Uploaded content" />}
        <img key={index} src={file} />
      ))}
    </div>
  );
}
