import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

type myProps = {
  monsters: {
    name: string;
    id: string;
    email: string;
  }[];
};

export const CardList = (props: myProps) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
