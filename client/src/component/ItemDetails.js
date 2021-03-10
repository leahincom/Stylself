// route by `/:id`
import { useState, useEffect } from "react";
import React from "react";
import ARTWORKS from "../db.json";
import ARTSYS from "../artsy.json";
import { useDropzone } from "react-dropzone";
import apiService from "../ApiService.js";

const ItemDetails = ({ match }) => {
  const [item, setItem] = useState({});
  const [upload, setUpload] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const getItem = () => {
    let matched;

    if (match.params.id <= ARTWORKS.artworks.length) {
      matched = ARTWORKS.artworks.filter(
        (item) => item.id === match.params.id
      )[0];
    } else {
      matched = ARTSYS.artworks.filter(
        (item) => item.id === match.params.id
      )[0];
    }

    setItem(matched);
  };

  useEffect(() => {
    getItem();
    // setUpload(acceptedFiles);
    upload.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [upload]);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setUpload(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const thumbs = upload.map((file) => <img src={file.preview} width="40%" />);

  const handleClick = () => {
    setShowResult(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upload) {
      apiService.postUpload(upload);
      console.log("image uploaded");
    }
  };

  return (
    <div className="item-detail">
      {/* when image is trained,
      put uploaded/style imgs to the left side
      and show the result on the right side 
      with 'save' button */}

      <form onSubmit={handleSubmit} className="form">
        <div className="images">
          <div className="input-imgs">
            <div className="selected_img">
              {thumbs}
              <ul>{files}</ul>
            </div>

            <div className="upload-container">
              <div {...getRootProps({ className: "dropzone" })}>
                {/* just show */}
                {/* first: big -> img upload: 50% */}
                <img src={item.thumbnail} width="400px" alt="artwork" />

                {/* if mouse hover */}
                <div className="drag-n-drop">
                  <input {...getInputProps()} name="user_img" id="user_img" />
                  <div className="desc-shown">
                    {isDragActive ? (
                      <p>
                        <strong>Drop the files here...</strong>
                      </p>
                    ) : (
                      <p>
                        <strong>
                          Choose a file
                          <br />
                        </strong>
                        or drag it here
                      </p>
                    )}
                  </div>
                </div>

                {/* when loading (training) => loading image / if possible) training images in video */}
              </div>
            </div>
          </div>

{
  showResult ? <div className="result_img">
            <img
              width="400px"
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZqRV9%2FbtqZKBnghPy%2F5K1anwgbJgtSHkuT1wX1kK%2Fimg.png"
            />
            <button className="save-btn">
          Save
        </button>
          </div> :
          null
}
          
        </div>

        <button type="submit" className="formSubmit" onClick={handleClick}>
          Transfer
        </button>
      </form>
      {/* upload usr img onto the style img */}
    </div>
  );
};

export default ItemDetails;
