// route by `/:id`
import { useState, useEffect } from 'react';
import React from 'react';
import ARTWORKS from '../db.json';
import ARTSYS from '../artsy.json';
import { useDropzone } from 'react-dropzone'
      
const ItemDetails = ({ match }) => {
  
  const [ item, setItem ] = useState({});
  
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

  const { getRootProps, getInputProps } = useDropzone();
  
  return (
    <div className='item-detail'>

      {/* when image is trained,
      put uploaded/style imgs to the left side
      and show the result on the right side 
      with 'save' button */}

      <div className='input-images hidden'>
        <img src='' alt='user-img' />
        <img src='' alt='style-img' />
      </div>
      

      {/* upload usr img onto the style img */}
      <section className="upload-container">
        <div {...getRootProps({className: 'dropzone'})}>

          {/* just show */}
          <img src={item.thumbnail} alt='artwork' />

          {/* if mouse hover */}
          <div className='drag-n-drop'>
            <input {...getInputProps()} />
            <div className='desc-shown'>
              <strong>Choose a file<br /></strong>
              <span class='box_dragndrop'> or drag it here</span>
            </div>
          </div>

          {/* when loading (training) => loading image / if possible) training images in video */}

        </div>
      </section>    

    </div>
  )
}

export default ItemDetails;