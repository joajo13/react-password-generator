import React from "react";

export const Titles = React.memo(() => {
  return (
    <>
      <h1 className="mt-24 text-center text-7xl font-Roboto font-bold text-gray-800">
        Generador de contraseñas
      </h1>
      <h2 className="p-5 text-center font-Roboto text-gray-600 text-lg">
        Cree{" "}
        <span className="font-bold text-emerald-600">contraseñas seguras</span>{" "}
        para mantener sus{" "}
        <span className="font-bold text-emerald-600">cuentas seguras</span>
      </h2>
    </>
  );
});
