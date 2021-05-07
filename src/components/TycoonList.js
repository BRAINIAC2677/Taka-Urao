import React from "react";
import tycoonData from "../data/tycoonData";
import Tycoon from "./Tycoon";

function TycoonList() {
  const tycoons = tycoonData.map((tycoon) => {
    return <Tycoon key={tycoon.id} info={tycoon} />;
  });

  return (
    <div className="tycoon-list">
      <h1>Tycoon List</h1>
      {tycoons}
    </div>
  );
}

export default TycoonList;
