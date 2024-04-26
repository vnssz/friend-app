import React, { useState } from "react";
import "./App.css";
const FriendCard = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="friend-card" onClick={toggleModal}>
      <img
        src={friend.picture.medium}
        alt={`${friend.name.first} ${friend.name.last}`}
        className="friend-avatar"
      />
      <h3>{`${friend.name.title} ${friend.name.first} ${friend.name.last}`}</h3>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>
              <strong>Email:</strong> {friend.email}
            </p>
            <p>
              <strong>Phone:</strong> {friend.phone}
            </p>
            {/* Add more information as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendCard;
