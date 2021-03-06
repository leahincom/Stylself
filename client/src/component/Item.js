import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { faAngleDoubleRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Switch } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import apiService from "../ApiService.js";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "300px",
    border: "2px dashed lightgray"
  }
};

Modal.setAppElement("#root");

export default function Item({ index, category, item }) {
  const welcome_first = "Create";
  let welcome = welcome_first.split("");
  const welcome_second = "YourArt";
  welcome_second.split("").map((ch) => welcome.push(ch));

  const [modalIsOpen, setIsOpen] = useState(false);
  const [mylist, setMyList] = useState([]);

  // when click like btn
  async function postItem({ target }, item) {
    item.is_liked = !item.is_liked;
    if (item.is_liked) {
      target.style = "color: red;";
      await apiService.postItem(item);
    } else {
      target.style = "color: gray;";
      await apiService.postItem(item);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return category === "main" && index < welcome_first.length ? (
    <React.Fragment>
      <Switch>
        {/* card with hover effect */}
        <div className="main-item-card">
          <div className="flip-card-inner">
            {/* plain card */}
            <div className="card-front">
              <h2>{welcome[index]}</h2>
            </div>
            {/* hover */}
            <div className="card-back">
              <img
                src={item.thumbnail}
                width="250px"
                alt="artwork"
                onClick={openModal}
              />

              {/* when item is clicked! like a preview */}
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Style Transferred Artwork"
              >
                {/* controls speed, slow-motion */}
                <div className="result-img">
                  <div className="btn-family">
                    <FontAwesomeIcon
                      onClick={closeModal}
                      icon={faTimes}
                      style={{ color: "gray" }}
                    />

                    <FontAwesomeIcon
                      className="like-btn"
                      icon={faHeart}
                      size="2x"
                      style={{ color: "gray" }}
                      onClick={(e) => postItem(e, item)}
                    />

                    {/* if button is clicked, go to details */}
                    <Link to={`/artworks/${item.id}`}>
                      {/* <img src='' alt='button-img' /> */}
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        style={{ color: "gray" }}
                      />
                    </Link>
                  </div>

                  <img src={item.result} width="400px" />
                </div>
              </Modal>
            </div>
          </div>
        </div>

        <Route
          path={`/artworks/${index}`}
          render={(props) => {
            <ItemDetails {...props} item={item} />;
          }}
        />
      </Switch>
    </React.Fragment>
  ) : category === "main" && index < welcome.length ? (
    <React.Fragment>
      <Switch>
        {/* card with hover effect */}
        <div className="main-item-card second">
          <div className="flip-card-inner">
            {/* plain card */}
            <div className="card-front">
              <h2>{welcome[index]}</h2>
            </div>
            {/* hover */}
            <div className="card-back">
              <img
                src={item.thumbnail}
                width="250px"
                alt="artwork"
                onClick={openModal}
              />
              {/* when item is clicked! like a preview */}
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Style Transferred Artwork"
              >
                {/* controls speed, slow-motion */}
                <div className="result-img">
                  <div className="btn-family">
                    <FontAwesomeIcon
                      onClick={closeModal}
                      icon={faTimes}
                      style={{ color: "gray" }}
                    />

                    <FontAwesomeIcon
                      className="like-btn"
                      icon={faHeart}
                      size="2x"
                      style={{ color: "gray" }}
                      onClick={(e) => postItem(e, item)}
                    />

                    {/* if button is clicked, go to details */}
                    <Link to={`/artworks/${item.id}`}>
                      {/* <img src='' alt='button-img' /> */}
                      <FontAwesomeIcon
                        icon={faAngleDoubleRight}
                        style={{ color: "gray" }}
                      />
                    </Link>
                  </div>
                  <img src={item.result} width="400px" />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Switch>
    </React.Fragment>
  ) : (
    category === "secondary" && (
      <React.Fragment>
        {/* after, show left items when scrolling */}
        {/* show image and get bigger when hover */}

        {/* card with hover effect */}
        <div className="list-item-card">
            <img src={item.thumbnail} alt="artwork" />

            {/* hover */}
            <div className="overlay">
              <FontAwesomeIcon
                className="like-btn"
                icon={faHeart}
                size="2x"
                onClick={(e) => postItem(e, item)}
                style={{ color: "gray", padding: "1rem" }}
              />
              {/* if button is clicked, go to details */}
              <Link to={`/artworks/${item.id}`}>
              <FontAwesomeIcon
                className="detail-btn"
                icon={faAngleDoubleRight}
                style={{ color: "gray", padding: "1rem" }}
              />
              </Link>
            </div>
        </div>
      </React.Fragment>
    )
  );
}
