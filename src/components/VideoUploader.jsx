import React, { useState ,useEffect} from "react";

const VideoUploader = ({setVideos}) => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    let ImagesArray = Object.entries(e.target.files).map((e) =>
      URL.createObjectURL(e[1])
    );
    console.log(ImagesArray);
    setFile([...file, ...ImagesArray]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }
  useEffect(()=>{
    setVideos(file)
    },[file])
  return (
    <form>
      <div className="form-group preview">
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item} className="iucon">
                <video className="iu" controls src={item}/>
                <button className="iud" type="button" onClick={() => deleteFile(index)}>
                  delete
                </button>
              </div>
            );
          })}
      </div>

      <div className="form-group">
        <input
          type="file"
          accept="video/*"
          disabled={file.length === 5}
          className="form-control custom-file-input2"
          onChange={uploadSingleFile}
          multiple
        />
      </div>
      {/* <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button> */}
    </form>
  );
};

export default VideoUploader;
