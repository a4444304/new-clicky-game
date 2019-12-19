import React from "react";
import "./style.css";

function VegCard(props) {
  return (
    <div className="card" onClick={() => props.pickVegetable(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong> 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VegCard;
