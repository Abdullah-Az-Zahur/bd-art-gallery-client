import React from "react";

const Exhibitions = ({ items }) => {
  const [
    {
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
    },
  ] = items;

  return (
    <div className="mt-12">
      <div className="text-center mb-5" data-aos="fade-up">
        <h3 className="font-semibold text-3xl animate__animated animate__bounce ">
          Exhibitions
        </h3>
        <hr className="my-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../public/landscapePainting.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center items-center mx-auto">
              landscape Painting
            </h2>
            <p className="mt-3 text-center">7 Aug 2024</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../public/PortraitDrawing.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center items-center mx-auto">
            Portrait Drawing
            </h2>
            <p className="mt-3 text-center">15 Aug 2024</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="../../../public/WatercolourPainting.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center items-center mx-auto">
            Watercolour Painting
            </h2>
            <p className="mt-3 text-center">19 Aug 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;
