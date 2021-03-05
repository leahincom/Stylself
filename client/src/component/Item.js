import React from 'react';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Route, Switch } from 'react-router-dom';
import ItemDetails from './ItemDetails'

export default function Item({ index, item }) {

  const welcome_first = 'Create';
  let welcome = welcome_first.split('');
  const welcome_second = 'YourArt';
  welcome_second.split('').map(ch => welcome.push(ch));

  const popupFunction = (e) => {

  }

  return (
    index < welcome_first.length ? (

      <React.Fragment>
        <Switch>

          {/* card with hover effect */}
          <div className='main-item-card'>

            <div className='flip-card-inner'>
              {/* plain card */}
              <div className='card-front'>
                <h2>{welcome[index]}</h2>
              </div>
              {/* hover */}
              <div className='card-back'>
                <img src={item.thumbnail} alt='artwork' />
              </div>
            </div>

              {/* when item is clicked! like a preview */}
              <span className='popup-preview hidden' onClick={popupFunction}>
                {/* controls speed, slow-motion */}
                <video src='' width='75px'></video>

                {/* if button is clicked, go to details */}
                <Link to={{pathname: `/artworks/${index}`}}>
                  {/* <img src='' alt='button-img' /> */}
                  <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: 'black'}} />
                </Link>
              </span>
          </div>

          <Route
            path={`/artworks/${index}`}
            render={(props) => {
              <ItemDetails {...props} item={item} />
            }}
          />
        </Switch>

      </React.Fragment>

      ) : ( index < welcome.length ? (
        <React.Fragment>
        <Switch>

          {/* card with hover effect */}
          <div className='main-item-card second' onClick={popupFunction}>

            <div className='flip-card-inner'>
              {/* plain card */}
              <div className='card-front'>
                <h2>{welcome[index]}</h2>
              </div>
              {/* hover */}
              <div className='card-back'>
                <img src={item.thumbnail} alt='artwork' />
              </div>
            </div>

              {/* when item is clicked! like a preview */}
              <span className='popup-preview hidden'>
                {/* controls speed, slow-motion */}
                <video src='' width='75px'></video>

                {/* if button is clicked, go to details */}
                <Link to={{pathname: `/artworks/${index}`}}>
                  {/* <img src='' alt='button-img' /> */}
                  <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: 'black'}} />
                </Link>
              </span>
          </div>

          <Route
            path={`/artworks/${index}`}
            render={(props) => {
              <ItemDetails {...props} item={item} />
            }}
          />
        </Switch>

      </React.Fragment>

      ) :
        (
      <React.Fragment>
      {/* after, show left items when scrolling */}
      {/* show image and get bigger when hover */}

      {/* card with hover effect */}
      <div className='list-item-card'>

        <Link to={{pathname: `/artworks/${item.key}`}}>


          <div className='flip-card-inner'>
            {/* plain card */}
            <div className='card-front'>
              <img src="https://github.com/jaehyeongAN/PyFlask_DL-service/blob/master/flask_deep/static/images/nst_get/nst_reference2.jpg?raw=true" alt='artwork' width='140px' />
            </div>
            {/* hover */}
            <div className='card-back'>
                {/* <img src='' alt='button-img' /> */}
                <FontAwesomeIcon icon={faAngleDoubleRight} style={{color: 'black'}} />
            </div>
          </div>

        </Link>

      </div>
      </React.Fragment>
    )
      )
  );

}