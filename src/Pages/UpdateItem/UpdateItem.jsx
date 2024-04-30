import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
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
    processing_time,
    userName,
    userEmail,
  } = item;

  const handleUpdateItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const subcategory = form.subcategory.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const processing_time = form.processing_time.value;
    const photo = form.photo.value;

    const updatedItem = {
      name,
      price,
      subcategory,
      shortDescription,
      rating,
      customization,
      stockStatus,
      photo,
      processing_time,
      userName,
      userEmail,
    };

    console.log(updatedItem);

    // send data to the server
    fetch(`https://bd-art-gallery-server.vercel.app/items/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update Craft Item</h2>
      <form onSubmit={handleUpdateItem}>
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
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered w-full"
                required
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
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
                required
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
              required
            >
              <option disabled selected>
                {subcategory}
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
                defaultValue={shortDescription}
                placeholder="Short Description"
                className="input input-bordered w-full"
                required
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
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered w-full"
                required
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
              required
            >
              <option disabled selected>
                {customization}
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
              required
            >
              <option disabled selected>
                {stockStatus}
              </option>
              <option value="stock">In stock</option>
              <option value="order">Made to Order</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <input
                type="datetime-local"
                name="processing_time"
                defaultValue={processing_time}
                placeholder="Processing Time"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
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
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Item" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateItem;
