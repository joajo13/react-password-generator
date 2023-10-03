import React from "react";
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

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex flex-col md:grid md:grid-cols-2 p-4 font-bold text-gray-600 mt-4 text-center items-center ">
        <div className="w-72 md:text-start">
          <label htmlFor="length" className="font-Roboto p-2 dark:text-white">
            Longitud de la contraseña:
          </label>
          <span className="mr-6 text-emerald-600">{length}</span>
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center mt-8 w-full md:w-6/12">
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
