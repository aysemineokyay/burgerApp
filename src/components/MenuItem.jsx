import React from "react";

const MenuItem = ({ image, name, content, price }) => {
  return (
    <div className="flex flex-col gap-2">
      <img src={image} alt="" />
      <h1 className="text-md">{name}</h1>
      <p className="text-sm">{content}</p>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
