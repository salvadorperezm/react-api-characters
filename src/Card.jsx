import React from "react";
import "./Card.css";
import dummyImage from "./dummy-image.png";

const Card = ({ props }) => {
  return (
    <div className="scene scene--card">
      <div className="card">
        <div className="card__face card__face--front">
          <img src={dummyImage} className="avatar" alt="avatar"></img>
          <h3>{props.name}</h3>
          <p>{props.profession}</p>
        </div>
        <div className="card__face card__face--back">
          <p>{props.email}</p>
          <p>{props.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
