import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Helmet } from "react-helmet";

const Allitems = () => {
  const items = useLoaderData();

  return (
    <div>
      <div>
        <Helmet>
          <title>BD Art Gallery | All Arts</title>
        </Helmet>
        <h2>All Items: {items.length}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item}></ItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allitems;
