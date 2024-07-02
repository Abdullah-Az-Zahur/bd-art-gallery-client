import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate } from "react-router-dom";
import ItemCard from "../ItemCard/ItemCard";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-8 lg:pl-0 md:pl-0 ">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};
export default CraftItems;
