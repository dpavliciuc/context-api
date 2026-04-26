import React from "react";
import "../styles/ItemName.css"

const ItemName = ({ title = "Necklace Jewlery" }) => {
  return (
    <div className="text-center mt-4">
      <h1 className="itemstyle">
        {title}
        <span className="absolute shadow left-1/2 bottom-0 w-[120%] h-1 bg-[#ffffff] rounded translate-x-[-50%]"></span>
      </h1>
    </div>
  );
};

export default ItemName;