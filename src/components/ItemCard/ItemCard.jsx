import React from "react";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ItemCard = ({ item }) => {
  const {
    _id,
    name,
    price,
    subcategory,
    shortDescription,
    rating,
    customization,
    stockStatus,
    photo,
    userName,
    userEmail,
  } = item;

  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure className="w-1/2">
        <img className=""
          src={photo}
          alt="Movie"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">Name of the art : {name}</h2>
        <p>{shortDescription}</p>
        <p className="flex items-center">Price: {price}  <FaDollarSign /></p>
        <div className="card-actions justify-end">
          <Link to={`/ItemDetails/${_id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
