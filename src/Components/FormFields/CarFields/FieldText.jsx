const FieldText = ({
   type,
   label,
   id,
   placeholder,
   name,
   value,
   onChange,
   max,
}) => {
   return (
      <>
         <div>
            <label
               htmlFor={id}
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
               {label}
            </label>
            <input
               value={value}
               type={type}
               id={id}
               onChange={onChange}
               name={name}
               max={max}
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder={placeholder}
               required
            />
         </div>
      </>
   );
};

export default FieldText;
