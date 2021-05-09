import React from "react";
import tycoonData from "../data/tycoonData";
import Tycoon from "./Tycoon";

function TycoonList() {
  const tycoons = tycoonData.map((tycoon) => {
    return <Tycoon key={tycoon.id} info={tycoon} />;
  });

  return (
    <div>
      <div className="tycoon-list-title">
        <h1>compra tu sueño</h1>
        <p>
          Did you know that you are awesome. That's why you are given the chance
          to spend from the billionaires.
        </p>
      </div>
      <div className="tycoon-list-content">{tycoons}</div>
    </div>
  );
}

export default TycoonList;
