import React from "react";
import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
  const item = useLoaderData();
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

  console.log(item);
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 container mx-auto">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128 w-1/2 bg-gray-100 rounded-lg border-2">
          <img
            src={photo}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full h-full">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            {name}
          </h1>
          <p className="my-4">Price: {price}</p>
          <hr />
          <p className="my-4">Category: {subcategory}</p>
          <hr />
          <p className="my-4">
            <span className="font-bold">Description: </span>
            {shortDescription}
          </p>
          
          <hr />
          <div className="my-4">
            <p>
              <span>customization:</span>
              {customization}
            </p>
            <p>
              <span>Stock Status:</span>
              {stockStatus}
            </p>
            <p>
              <span>Rating:</span>
              {rating}
            </p>
          </div>
          
        </div>
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default ItemDetails;
