import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyItem = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myItems/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div>
      <div>
        {item.map((aItem) => (
          <div key={aItem._id}>
            <div>
              <section className="dark:bg-gray-100 dark:text-gray-800 container mx-auto">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between items-center">
                  <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128 w-1/2 bg-gray-100 rounded-lg border-2">
                    <img
                      src={aItem.photo}
                      alt=""
                      className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full h-full">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                      {name}
                    </h1>
                    <p className="my-4">Price: {aItem.price}</p>
                    <hr />
                    <p className="my-4">Category: {aItem.subcategory}</p>
                    <hr />
                    <p className="my-4">
                      <span className="font-bold">Description: </span>
                      {aItem.shortDescription}
                    </p>

                    <hr />
                    <div className="my-4">
                      <p>
                        <span>customization:</span>
                        {aItem.customization}
                      </p>
                      <p>
                        <span>Stock Status:</span>
                        {aItem.stockStatus}
                      </p>
                      <p>
                        <span>Rating:</span>
                        {aItem.rating}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                      <button
                        
                        className="px-8 py-3 text-lg font-semibold border rounded dark:bg-violet-600 dark:text-gray-50 btn btn-info text-white"
                      >
                        Update
                      </button>
                      <button
                        
                        className="px-8 py-3 text-lg font-semibold border rounded dark:bg-violet-600 dark:text-gray-50 btn btn-info text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                {/* <ToastContainer /> */}
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
