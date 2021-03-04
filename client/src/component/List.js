import React, { useState, useEffect } from 'react';
import ApiService from '../ApiService';
import Item from './Item';

export default function List() {
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    ApiService.loadList()
    .then(items => setItems(items))
  }, []);

  return (
    <div className="list">
      {/* each item */}
      { 
        items.map((item, index) => {
          return <Item 
            // key={item._id}
            item={item}
            index={index}
          />
        })
      }
    </div>
  )
}