import React from "react";

function ProductCard(props) {
  const { title, description, price, imageUrl } = props; 

  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="productimage"/>
      <h3 className="producttitle">{title}</h3>
      <p className="productdescription">{description}</p>
      <p className="productprice">{price} PKR </p>
    </div>
  );
}

export default ProductCard;
