import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FieldText from "../../Components/FormFields/CarFields/FieldText";
import PageHeader from "../../Components/PageHeader/PageHeader";
import SiteTitle from "../../SiteTitle/SiteTitle";

const UpdateProduct = () => {
   const { id } = useParams();
   const [brands, setBrands] = useState([]);
   const [formData, setFormData] = useState({
      name: "",
      brand: "",
      bodyType: "",
      condition: "",
      year: "",
      price: "",
      driveType: "",
      transmission: "",
      fuelType: "",
      color: "",
      mileage: "",
      photo: "",
      doors: "",
      cylenders: "",
      rating: "",
      description: "",
   });

   // Fetch brands
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/brands`)
         .then((res) => res.json())
         .then((data) => setBrands(data));
   }, []);

   // Get existing data
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER_API}/cars/${id}`)
         .then((res) => res.json())
         .then((data) => {
            const { _id, ...rest } = data;
            setFormData(rest);
         });
   }, [id]);

   // Set form data
   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   // Handle form submit
   const handleFormSubmit = (e) => {
      e.preventDefault();

      // Custom tost message
      const toastMsg = toast.loading("");
      toast.update(toastMsg, {
         render: "Please wait...",
         isLoading: true,
      });

      fetch(`${import.meta.env.VITE_SERVER_API}/cars/${id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount === 1) {
               setFormData({});
               toast.update(toastMsg, {
                  render: "Product updated",
                  type: "success",
                  isLoading: false,
                  autoClose: 1500,
               });
            } else {
               toast.update(toastMsg, {
                  render: "Something went wrong!",
                  type: "error",
                  isLoading: false,
                  autoClose: 1500,
               });
            }
         });
   };
   return (
      <div>
         <SiteTitle>Update Product</SiteTitle>
         <PageHeader title="Update Product" />
         <div className="px-4 md:px-6 lg:px-10">
            <h2 className="text-4xl pt-32 font-bold font-inter text-center">
               Add New Product
            </h2>
            <form
               onSubmit={handleFormSubmit}
               style={{ boxShadow: "0 0 40px 5px rgb(0 0 0 / 5%)" }}
               className="pt-10 pb-32 rounded-md p-6 my-10">
               <FieldText
                  onChange={handleOnChange}
                  value={formData.name}
                  name="name"
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Enter title"
               />
               <div className="my-4 grid grid-cols-3 gap-4">
                  <div>
                     <label
                        htmlFor="brand"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Make/Brand
                     </label>
                     <select
                        value={formData.brand}
                        id="brand"
                        onChange={handleOnChange}
                        name="brand"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        {brands.map((brand) => (
                           <option value={brand._id} key={brand._id}>
                              {brand.name}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="body-type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Body Type
                     </label>
                     <select
                        value={formData.bodyType}
                        id="body-type"
                        onChange={handleOnChange}
                        name="bodyType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="Sedan">Sedan</option>
                        <option value="Compact">Compact</option>
                        <option value="Convertible">Convertible</option>
                        <option value="Crossover">Crossover</option>
                        <option value="Wagon">Wagon</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="condition"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Condition
                     </label>
                     <select
                        value={formData.condition}
                        name="condition"
                        id="condition"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="year"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Year
                     </label>
                     <select
                        value={formData.year}
                        name="year"
                        id="year"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                     </select>
                  </div>
                  <div>
                     <FieldText
                        onChange={handleOnChange}
                        value={formData.price}
                        name="price"
                        label="Price (USD)"
                        id="price"
                        type="text"
                        placeholder="Enter Price"
                     />
                  </div>
                  <div>
                     <label
                        htmlFor="drive-type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Drive Type
                     </label>
                     <select
                        value={formData.driveType}
                        name="driveType"
                        id="drive-type"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Semi Auto">Semi Auto</option>
                        <option value="Manual">Manual</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="transmission"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Transmission
                     </label>
                     <select
                        value={formData.transmission}
                        name="transmission"
                        id="transmission"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="fuel-type"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Fuel Type
                     </label>
                     <select
                        value={formData.fuelType}
                        name="fuelType"
                        id="fuel-type"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Petrol">Petrol</option>
                     </select>
                  </div>
                  <FieldText
                     onChange={handleOnChange}
                     value={formData.mileage}
                     name="mileage"
                     label="Mileage"
                     id="mileage"
                     type="text"
                     placeholder="Enter Mileage"
                  />
                  <FieldText
                     onChange={handleOnChange}
                     value={formData.mileage}
                     name="engineSize"
                     label="Engine Size (CC)"
                     id="engineSize"
                     type="text"
                     placeholder="Enter Engine Size"
                  />
                  <div>
                     <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Color
                     </label>
                     <select
                        value={formData.color}
                        name="color"
                        id="color"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="Red">Red</option>
                        <option value="White">White</option>
                        <option value="Black">Black</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Doors
                     </label>
                     <select
                        value={formData.doors}
                        name="doors"
                        id="doors"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                     </select>
                  </div>
                  <div>
                     <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Cylenders
                     </label>
                     <select
                        value={formData.cylenders}
                        name="cylenders"
                        id="cylenders"
                        onChange={handleOnChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue="Select brand">Choose</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                     </select>
                  </div>
                  <div>
                     <FieldText
                        onChange={handleOnChange}
                        value={formData.photo}
                        name="photo"
                        label="Photo URL"
                        id="url"
                        type="text"
                        placeholder="URL"
                     />
                  </div>
                  <div>
                     <FieldText
                        onChange={handleOnChange}
                        value={formData.rating}
                        name="rating"
                        label="Rating (Max- 5)"
                        id="rating"
                        type="number"
                        placeholder="Enter Rating"
                        max="5"
                     />
                  </div>
               </div>

               <label
                  htmlFor="message"
                  className="block my-4 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Description
               </label>
               <textarea
                  onChange={handleOnChange}
                  value={formData.description}
                  name="description"
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                  placeholder="Write here..."></textarea>

               <input
                  className="inline-flex mt-4 cursor-pointer items-center gap-2 middle none border-2 border-primary mr-7 hover:bg-black hover:text-white uppercase hover:border-black center mb-2 rounded-lg bg-primary py-1 md:py-2 px-2 md:px-6 font-inter text-md text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  value="Submit"
               />
            </form>
         </div>
      </div>
   );
};

export default UpdateProduct;
