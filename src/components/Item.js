import React from "react";

import "./Item.css";

const Item = ({ id, dragOverlay }) => {
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };

  return (
    <div style={style} className="item">
      Bike: {id}
    </div>
  );
};

export default Item;
