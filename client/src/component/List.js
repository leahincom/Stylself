// import React, { useState, useEffect } from 'react';

// import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link, Route, Switch } from 'react-router-dom';
// import ApiService from '../ApiService';

import Item from "./Item";

export default function List({ items, artsys }) {
  // useEffect(
  //   ApiService.loadList()
  //   .then(arts => setArtsys(arts))
  // )

  return (
    <div className="list">
      {/* main item */}
      <div className="main scroll-section">
        {items.map((item, index) => {
          return (
            <Item key={item.id} index={index} category="main" item={item} />
          );
        })}
      </div>

      {/* remaining list */}
      <div className="secondary scroll-section">
        {artsys.map((item, index) => {
          return (
            <Item
              key={item.id}
              index={index + items.length}
              category="secondary"
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}
