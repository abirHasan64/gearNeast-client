import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt={title} className="rounded-xl h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-[#FF3811] font-bold">Price: ${price} </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
