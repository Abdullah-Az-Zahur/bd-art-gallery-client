import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";

const Allitems = () => {
  const items = useLoaderData();

  return (
    <div>
      <h2>All Items: {items.length}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Allitems;
