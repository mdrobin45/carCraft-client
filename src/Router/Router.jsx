import { createBrowserRouter } from "react-router-dom";
import AddProductForm from "../Pages/AddProductForm/AddProductForm";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import BrandArchive from "../Pages/BrandArchive/BrandArchive";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Root from "../Root/Root";

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
            element: <AddProductForm />,
         },
         {
            path: "/brand-archive/:id",
            element: <BrandArchive />,
            loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/cars`),
         },
         {
            path: "/single-product/:id",
            element: <SingleProduct />,
            loader: ({ params }) =>
               fetch(`${import.meta.env.VITE_SERVER_API}/cars/${params.id}`),
         },
         {
            path: "/cart",
            element: <Cart />,
            loader: () => fetch(`${import.meta.env.VITE_SERVER_API}/cart`),
         },
      ],
   },
]);

export default router;
