import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate, } from "react-router-dom";

const CraftItems = ({ items }) => {
  const { user } = useContext(AuthContext);
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
  console.log(items);


  return (
    <div className="mt-12">
      <div className="text-center mb-5" data-aos="fade-up">
        <h3 className="font-semibold text-3xl animate__animated animate__bounce ">
        Craft Items
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 lg:pl-0 md:pl-0 ">
        {items.map((item) => (
          <div
            key={item._id}
            className="card  bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={photo} alt="Art" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{subcategory}</p>
              <p>{item.shortDescription}</p>
              <div className="card-actions justify-end">
                {
                    user ? (
                        <Link to={`/ItemDetails/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    )
                    :(
                        <button onClick={() => Navigate("/login")} className="btn btn-primary" >View Details</button>
                    )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
