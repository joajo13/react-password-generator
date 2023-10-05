import React from "react";
import { BiCopyAlt } from "react-icons/bi";

export const PasswordCard = React.memo(
  ({ copyToClipboard, handleClick, password }) => {
    return (
      <div className="flex justify-center mt-10">
        <div className="box text-sm md:text-lg rounded-full max-w-sm w-full mx-4 md:max-w-full md:w-2/4 md:mx-auto mt-6 mb-6 inline-flex justify-between h-14 items-center dark:bg-slate-700">
          <button className="flex bg-emerald-600 bg-opacity-40 md:bg-transparent hover:bg-emerald-600 hover:bg-opacity-40 rounded-2xl p-2 ml-2 h-10 w-10 items-center font-semibold active:scale-90 duration-75">
            <BiCopyAlt
              size={32}
              onClick={() => copyToClipboard(password)}
              className="text-black dark:text-white"
            />
          </button>
          <p className="p-2 text-center font-Roboto font-semibold text-gray-700 dark:text-white">
            {password || "Contraseña"}
          </p>
          <button
            onClick={handleClick}
            className="flex bg-sky-600 bg-opacity-40 h-10 md:bg-transparent hover:bg-sky-600 font-semibold active:scale-90 duration-75 hover:bg-opacity-40 dark:text-white rounded-2xl p-2 mr-2 items-center"
          >
            Generar
          </button>
        </div>
      </div>
    );
  }
);
