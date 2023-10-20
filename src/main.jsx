import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "./MyContext/AuthContextProvider.jsx";
import ThemeContextProvider from "./MyContext/ThemeContextProvider.jsx";
import router from "./Router/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthContextProvider>
         <ThemeContextProvider>
            <RouterProvider router={router} />
            <ToastContainer position="top-center" autoClose={1500} />
         </ThemeContextProvider>
      </AuthContextProvider>
   </React.StrictMode>
);
