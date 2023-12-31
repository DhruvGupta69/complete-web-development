import React from "react";
import "./card.styles.css";

export const Card = (props: any) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <span>{props.monster.email}</span>
    </div>
  );
};
