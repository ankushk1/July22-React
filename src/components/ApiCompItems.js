import React from "react";

const ApiCompItems = ({ name, description, price, image, birthDate }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{price}</p>
        {birthDate && (
          <p className="card-text">
            {new Date(birthDate).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default ApiCompItems;
