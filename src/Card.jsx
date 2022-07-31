import React from "react";
import "./Card.css";

const Card = ({ props }) => {
  return (
    <div className="scene scene--card">
      <div className="card">
        <div className="card__face card__face--front">
          <img src={`${props.avatar}`} className="avatar" alt="avatar"></img>
        </div>
        <div className="card__face card__face--back">
          <h3 className="card__title">{`${props.first_name} ${props.last_name}`}</h3>
          <p>{props.employment.title}</p>
          <p>{props.email}</p>
          <p>{`${props.address.state}, ${props.address.country}.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
