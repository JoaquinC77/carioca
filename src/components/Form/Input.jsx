import React from "react";

export default function InputComponent({onChange, type, id, name, labelText, required = true}) {
    return (
        <div className="relative z-0 mb-6 w-full group">
            <input
                onChange={onChange}
                type={type}
                name={name}
                id={id}
                className="
                block py-2.5 px-0 
                w-full
                text-md 
                text-primary-bg
                bg-transparent 
                border-0 
                border-b-2 
                border-gray-300 
                appearance-none 
                focus:outline-none focus:ring-0 
                focus:border-yellow-900 
                peer"
                placeholder=" "
                required={required}
            />
            <label
                htmlFor={id}
                className="
                peer-focus:font-medium absolute text-sm 
                text-gray-500 
                dark:text-gray-400 duration-300 
                transform -translate-y-6 scale-75 
                top-3 -z-10 origin-[0] peer-focus:left-0 
                peer-focus:text-yellow-900 peer-focus:dark:text-yellow-900 
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 
                peer-focus:-translate-y-6
              "
            >
                {labelText}
            </label>
        </div>
    );
}
