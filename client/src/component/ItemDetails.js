// route by `/:id`
import { useState, useEffect } from 'react';
import React from 'react';
import ARTWORKS from '../db.json';
import ARTSYS from '../artsy.json';
import { useDropzone } from 'react-dropzone';
import apiService from '../ApiService.js'

const ItemDetails = ({ match }) => {
  
  const [ item, setItem ] = useState({});
  const [ upload, setUpload ] = useState([]);
  
  const getItem = () => {
    let matched;

    if(match.params.id < ARTWORKS.artworks.length) {
      matched = ARTWORKS.artworks.filter(item => item.id === match.params.id)[0];
    } else {
      matched = ARTSYS.artworks.filter(item => item.id === match.params.id)[0];
    }
    
    setItem(matched);
  }

  useEffect(() => {
    getItem();
    // setUpload(acceptedFiles);
    upload.forEach(file => URL.revokeObjectURL(file.preview));
  }, [upload]);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setUpload(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
    </li>
  ));

  const thumbs = upload.map(file => (
    <img
      src={file.preview}
      width='50%'
    />
));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upload) {
      apiService.postUpload(upload);
      console.log('image uploaded');
    }
  }

  return (
    <div className='item-detail'>

      {/* when image is trained,
      put uploaded/style imgs to the left side
      and show the result on the right side 
      with 'save' button */}

      <form onSubmit={handleSubmit} className='form'>

      <div className='images'>

        <div className='input-imgs'>

          <div className='selected_img'>
            {thumbs}
            <ul>{files}</ul>
          </div>

          <div className="upload-container">
            <div {...getRootProps({className: 'dropzone'})}>

              {/* just show */}
              {/* first: big -> img upload: 50% */}
              <img src={item.thumbnail} alt='artwork' />

              {/* if mouse hover */}
              <div className='drag-n-drop'>
                <input {...getInputProps()} name="user_img" id="user_img" />
                <div className='desc-shown'>
                {
                  isDragActive ?
                  <p>
                    <strong>Drop the files here...</strong>
                  </p> :
                  <p>
                    <strong>Choose a file<br /></strong>
                    or drag it here
                  </p>
                }
                </div>

              </div>

              {/* when loading (training) => loading image / if possible) training images in video */}

            </div>

          </div>

        </div>

        <div className='result_img'>
          <img src='https://64.media.tumblr.com/71d4d7130532a10d7c9d6341fdc0a1f4/tumblr_ny8acwgw8u1qav3uso3_r1_540.gifv' />
        </div>

      </div>

      <button type='submit' className='formSubmit'>Upload</button>

      </form>
      {/* upload usr img onto the style img */}

    </div>
  )
}

export default ItemDetails;