import React, { useState, useEffect } from "react";
import auth from "../utils/auth";
import apiService from "./../ApiService";
import { Link } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    height: "100px",
    border: "2px solid lightgray"
  }
};

const Logout = (props) => {
  const handleClick = () => {
    closeModal();
    apiService.logout();
    handleAuth();
  };

  const handleAuth = () => {
    props.setIsAuthenticated(false);
    auth.logout(() => props.history.push("/"));
  };

  const [modalIsOpen, setIsOpen] = React.useState(true);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* when item is clicked! like a preview */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Logout"
      >
        <div className="logout">
          <p>See you later!</p>
          <button onClick={() => handleClick()}>Confirm</button>
        </div>
      </Modal>
    </div>
  );
};

export default Logout;
