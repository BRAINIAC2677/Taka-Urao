import React from "react";
import { Link } from "react-router-dom";

function Tycoon(props) {
  const { id, name, imgUrl, wealth, description } = props.info;

  return (
    <div className="tycoon">
      <img src={imgUrl} alt={name} />
      <div className="name">{name}</div>
      <div className="tycoon-wealth">BDT {wealth}</div>
      <div className="description">{description}</div>
      <button>
        <Link to={`/${id}`}>Hit it</Link>
      </button>
    </div>
  );
}

export default Tycoon;
