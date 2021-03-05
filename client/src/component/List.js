import React, { useState, useEffect } from 'react';

import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Switch } from 'react-router-dom';

// import ApiService from '../ApiService';
// import ARTWORKS from '../db.json'
import Item from './Item';

export default function List({ items }) {
  
  return (
    <div className="list">
      {/* each item */}
      { items.length > 0 &&
        items.map((item, index) => {
          return <Item 
            key={item.id}
            index={index}
            item={item}
          />
        })
      }

      {/* card with hover effect */}
      <div className='list-item-card'>

        <img src="https://github.com/jaehyeongAN/PyFlask_DL-service/blob/master/flask_deep/static/images/nst_get/nst_reference2.jpg?raw=true" alt='artwork' width='140px' />

        {/* hover */}
        <Link to={{pathname: `/artworks/14`}}>
          <div className='overlay'>
              {/* <img src='' alt='button-img' /> */}
              <FontAwesomeIcon className='detail-btn' icon={faAngleDoubleRight} style={{color: 'black'}} />
          </div>
        </Link>

      </div>

    </div>
  )
}