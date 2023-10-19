import { createBrowserRouter } from "react-router-dom";
import AddProductForm from "../Pages/AddProductForm/AddProductForm";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import BrandArchive from "../Pages/BrandArchive/BrandArchive";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/add-product",
            element: (
               <PrivateRoute>
                  <AddProductForm />
               </PrivateRoute>
            ),
         },
         {
            path: "/brand-archive/:id",
            element: <BrandArchive />,
            loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/cars`),
         },
         {
            path: "/single-product/:id",
            element: (
               <PrivateRoute>
                  <SingleProduct />
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(`${import.meta.env.VITE_SERVER_API}/cars/${params.id}`),
         },
         {
            path: "/cart",
            element: (
               <PrivateRoute>
                  <Cart />
               </PrivateRoute>
            ),
            loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/cart`),
         },
         {
            path: "/update/:id",
            element: <UpdateProduct />,
         },
      ],
   },
]);

export default router;
