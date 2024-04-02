import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="page-not-found-container">
      <div>PageNotFound</div>
      <div>
        <button onClick={handleClick} className="return-home-button">
          <b>Return Home</b>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
