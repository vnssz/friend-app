import React, { useState } from "react";
import "./App.css";

const FriendList = ({ friends, currentUser }) => {
  // Filter out the current user from the list of friends
  const filteredFriends = friends.filter(
    (friend) => friend.login.username !== currentUser
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState("");
  const friendsPerPage = 4;
  const totalPages = Math.ceil(filteredFriends.length / friendsPerPage);

  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = filteredFriends.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  const nextPage = () =>
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  const goToPage = () => {
    const pageNumber = parseInt(inputPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setInputPage("");
    } else {
      alert("Please enter a valid page number.");
    }
  };

  const handleInputChange = (e) => setInputPage(e.target.value);

  return (
    <div className="friend-list">
      <h2>Friend List</h2>
      <div className="friend-grid">
        {currentFriends.map((friend, index) => (
          <div key={index} className="friend-card">
            <img
              src={friend.picture.medium}
              alt={`${friend.name.first} ${friend.name.last}`}
              className="friend-avatar"
            />
            <div className="friend-info">
              <h3>{`${friend.name.title} ${friend.name.first} ${friend.name.last}`}</h3>
              <p>
                <strong>Email:</strong> {friend.email}
              </p>
              <p>
                <strong>Phone:</strong> {friend.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <input
          type="text"
          value={inputPage}
          onChange={handleInputChange}
          placeholder={`Page 1 - ${totalPages}`}
        />
        <button onClick={goToPage}>Go</button>
      </div>
    </div>
  );
};

export default FriendList;
