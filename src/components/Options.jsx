import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";

export const Options = React.memo(({ params }) => {
  const {
    length,
    useLettersMin,
    useLettersMayus,
    useNumbers,
    useSymbols,
    handleLettersMinChange,
    handleLettersMayusChange,
    handleNumbersChange,
    handleSymbolsChange,
    handleLengthChange,
  } = params;

  const [security, setSecurity] = useState("Baja");

  useEffect(() => {
    if (length <= 8) {
      setSecurity("Baja");
    } else if (length <= 16) {
      setSecurity("Media");
    } else if (length <= 24) {
      setSecurity("Alta");
    } else {
      setSecurity("Muy Alta");
    }
  }, [length]);

  const securityColor = () => {
    if (security === "Baja") {
      return "text-red-600";
    } else if (security === "Media") {
      return "text-yellow-600";
    } else if (security === "Alta") {
      return "text-green-600";
    } else {
      return "text-emerald-600";
    }
  };

  const securityStyle = securityColor();

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-col md:grid md:grid-cols-2 p-4 font-bold text-gray-600 mt-4 text-center items-center ">
        <div className="w-72 md:text-start">
          <label htmlFor="length" className="font-Roboto p-2 dark:text-white">
            Longitud de la contraseña:
          </label>
          <span className="md:mr-6 text-emerald-600">{length}</span>
        </div>

        <div className="mt-2">
          <input
            type="range"
            name="length"
            id="length"
            min={4}
            max={32}
            value={length}
            onChange={handleLengthChange}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="w-72 md:text-start font-bold text-center justify-center flex items-center">
        <label
          htmlFor="length"
          className="font-Roboto p-2 text-gray-600 dark:text-white"
        >
          Seguridad:
        </label>
        <span className={`md:mr-6 text-emerald-600 ${securityStyle}`}>
          {security}
        </span>
      </div>

      <div className="flex flex-wrap justify-around md:grid md:grid-cols-4 md:justify-start md:gap-2 text-center mt-8 w-11/12 md:w-10/12 lg:w-6/12">
        <Checkbox
          especs={useLettersMin}
          name="Minúsculas"
          onChange={handleLettersMinChange}
        />

        <Checkbox
          especs={useLettersMayus}
          name="Mayúsculas"
          onChange={handleLettersMayusChange}
        />

        <Checkbox
          especs={useNumbers}
          name="Números"
          onChange={handleNumbersChange}
        />

        <Checkbox
          especs={useSymbols}
          name="Símbolos"
          onChange={handleSymbolsChange}
        />
      </div>
    </div>
  );
});
