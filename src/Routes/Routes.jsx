import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Allitems from "../Pages/Allitems/Allitems";
import PrivateRoutes from "./PrivateRoutes";
import AddItems from "../Pages/AddItems/AddItems";
import MyItem from "../Pages/MyItem/MyItem";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allItems",
        element: <Allitems></Allitems>,
        loader:() => fetch('http://localhost:5000/items')
      },
      {
        path:'/ItemDetails/:id',
        element:<PrivateRoutes>
          <ItemDetails></ItemDetails>
        </PrivateRoutes>,
        loader:({params}) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoutes>
            <AddItems></AddItems>
          </PrivateRoutes>
        ),
      },
      {
        path:'/myItem',
        element:<PrivateRoutes>
          <MyItem></MyItem>
        </PrivateRoutes>,
        // loader:({params}) => fetch(`http://localhost:5000/myItems/${params.id}`)
      }
    ],
  },
]);

export default router;
