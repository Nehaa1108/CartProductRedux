import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="card">
      <h2>{data.title}</h2>
      <p>{data.description}</p>

      <div className="tags">
        {data.keywords.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
