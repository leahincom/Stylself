// route by `/:id`

import React from 'react';
import { useDropzone } from 'react-dropzone'
      
const ItemDetails = ({ item }) => {

  const { getRootProps, getInputProps } = useDropzone();
  
  return (
    <div className='item-detail'>

    {/* when image is trained,
    put uploaded/style imgs to the left side
    and show the result on the right side 
    with 'save' button */}

    <div className='input-images'>
      <img src='user-img hidden' alt='uploaded image' />
      <img src='style-img hidden' alt='artwork' />
    </div>

    {/* upload usr img onto the style img */}
    <section className="upload-container">
      <div {...getRootProps({className: 'dropzone'})}>

        {/* just show */}
        <img className='art-shown' src={item.thumbnail} />

        {/* if mouse hover */}
        <input {...getInputProps()} />
        <p className='desc-shown'>
          <strong>Choose a file</strong>
          <span class='box_dragndrop'> or drag it here</span>
        </p>

        {/* when loading (training) => loading image / if possible) training images in video */}

      </div>
    </section>    

    </div>
  )
}

export default ItemDetails;