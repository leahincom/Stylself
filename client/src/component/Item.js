import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail'

export default function Item({ index, item }) {

  const welcome_str = 'CreateYourArt';
  let welcome = welcome_str.split('');


  return (
    index <= 13 ? (
      <React.Fragment>
        <Link to={{pathname: `/${item.key}`}} component={ItemDetail}>
          {/* card with hover effect */}
          <h2 className='main-char'>{welcome[index]}</h2>
          <img className='main-artwork' src='// item.img_src' alt='artwork' />
        </Link>
      </React.Fragment>
      ) : (
      <React.Fragment>
      {/* after, show left items when scrolling */}
      {/* show image and get bigger when hover */}
        <Link to={{pathname: `/${item.key}`}} component={ItemDetail}>
          <div className='list-item'>
            <img className='list-artwork' src='// item.img_src' alt='artwork' />
          </div>
        </Link>
      </React.Fragment>
    )
  );

}