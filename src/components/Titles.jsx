import React from "react";

export const Titles = React.memo(() => {
  return (
    <>
      <h1 className=" text-center text-7xl font-Roboto font-bold text-gray-800 dark:text-white">
        Generador de contraseñas
      </h1>
      <h2 className="p-5 text-center font-Roboto text-gray-600 dark:text-white text-lg">
        Cree{" "}
        <span className="font-bold text-emerald-600 dark:text-emerald-500">
          contraseñas seguras
        </span>{" "}
        para mantener sus{" "}
        <span className="font-bold text-emerald-600 dark:text-emerald-500">
          cuentas seguras
        </span>
      </h2>
    </>
  );
});
