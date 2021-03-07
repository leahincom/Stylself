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
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      ({file.path} - {file.size} bytes)
    </li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (upload) {
      apiService.postUpload(upload);
      console.log('image uploaded');
    }
  }

  const handleChange = ({ target }) => {
    setUpload(target.value);
  }
  
  return (
    <div className='item-detail'>

      {/* when image is trained,
      put uploaded/style imgs to the left side
      and show the result on the right side 
      with 'save' button */}

      <div className='input-images hidden'>
        <img src='' alt='user_img' />
        <img src='' alt='refer_img' />
      </div>
      

      <form onSubmit={handleSubmit} className='form'>

        <section className="upload-container">
          <div {...getRootProps({className: 'dropzone'})}>

            {/* just show */}
            <img src={item.thumbnail} width='400px' alt='artwork' />

            {/* if mouse hover */}
            <div className='drag-n-drop'>
              <input {...getInputProps()} type="file" name="user_img" id="user_img" value={upload} onChange={handleChange} />
              <div className='desc-shown'>
                <strong>Choose a file<br /></strong>
                <span class='box_dragndrop'> or drag it here</span>
              </div>

              {/* when uploaded, show the file name with background image opacity=0.1 */}
              <ul>{files}</ul>
            </div>

            {/* when loading (training) => loading image / if possible) training images in video */}

          </div>
          <button type='submit' className='formSubmit'>Upload</button>
        </section>    

      </form>
      {/* upload usr img onto the style img */}

    </div>
  )
}

export default ItemDetails;