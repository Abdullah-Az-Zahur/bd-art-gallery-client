import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddItems = () => {

  const { user } = useContext(AuthContext);

  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const subcategory = form.subcategory.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const photo = form.photo.value;
    const userName = user.displayName;
    const userEmail = user.email
    

    const newItem = {
      name,
      price,
      subcategory,
      shortDescription,
      rating,
      customization,
      stockStatus,
      photo,
      userName,
      userEmail
      
    };

    console.log(newItem);

    // send data to the server
    fetch("http://localhost:5000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Craft Item</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* category row */}
        <div className="md:flex mb-8">
          {/* subcategory */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory</span>
            </label>
            <select
              name="subcategory"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Your category
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text"> Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">customization</span>
            </label>
            <select
              name="customization"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                customization ?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select
              name="stockStatus"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
              Available ?
              </option>
              <option value="stock">In stock</option>
              <option value="order">Made to Order</option>
            </select>
          </div>
          {/* <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div> */}
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddItems;
