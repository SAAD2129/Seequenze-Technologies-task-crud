import React from "react";

const Card = ({ url, author }) => {
  return (
    <div className="bg-white col-span-3 p-2 rounded-lg">
      <img src={url} alt={author} />
      <h4 className="mt-2 text-sm">{author}</h4>
    </div>
  );
};

export default Card;
