import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { BiCopyAlt } from "react-icons/bi";

function PasswordGeneratorApp() {
  const {
    password,
    length,
    useLettersMin,
    useLettersMayus,
    useNumbers,
    useSymbols,
    handleClick,
    handleLengthChange,
    handleLettersMinChange,
    handleLettersMayusChange,
    handleNumbersChange,
    handleSymbolsChange,
  } = usePasswordGenerator();

  const copyToClipboard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      console.log("copied");
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="flex justify-center mt-10">
        <div className="box rounded-full max-w-full w-full mx-4 md:w-2/4 md:mx-auto mt-6 mb-6 inline-flex justify-between h-14 items-center">
          <button className="flex hover:bg-emerald-600 hover:bg-opacity-40 rounded-2xl p-2 ml-2 h-10 w-10 items-center font-semibold active:scale-90 duration-75">
            <BiCopyAlt size={32} onClick={() => copyToClipboard(password)} />
          </button>
          <p className="p-2 text-center font-Roboto font-semibold text-gray-700">
            {password || "Contraseña"}
          </p>
          <button
            onClick={handleClick}
            className="flex hover:bg-sky-600 font-semibold active:scale-90 duration-75 hover:bg-opacity-40 rounded-2xl p-2 mr-2 items-center"
          >
            Generar
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex flex-col md:grid md:grid-cols-2 p-4 font-bold text-gray-600 mt-4 text-center items-center ">
          <div className="w-72 md:text-start">
            <label htmlFor="length" className="font-Roboto p-2">
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
              className="in-range:border-green-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center mt-8 w-full md:w-6/12">
          <div className="flex flex-col items-center text-center justify-center">
            <label
              className="control control-checkbox m-0 p-0"
              htmlFor="lettersMin"
            >
              Minúsculas
              <input
                type="checkbox"
                checked={useLettersMin}
                name="lettersMin"
                id="lettersMin"
                onChange={handleLettersMinChange}
              />
              <div className="control_indicator "></div>
            </label>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <label
              className="control control-checkbox m-0 p-0"
              htmlFor="lettersMayus"
            >
              Mayúsculas
              <input
                type="checkbox"
                checked={useLettersMayus}
                name="lettersMayus"
                id="lettersMayus"
                onChange={handleLettersMayusChange}
              />
              <div className="control_indicator"></div>
            </label>
          </div>

          <div className="flex flex-col items-center text-center justify-center">
            <label
              className="control control-checkbox m-0 p-0"
              htmlFor="numbers"
            >
              Números
              <input
                type="checkbox"
                checked={useNumbers}
                name="numbers"
                id="numbers"
                onChange={handleNumbersChange}
              />
              <div className="control_indicator"></div>
            </label>
          </div>

          <div className="flex flex-col items-center text-center justify-center">
            <label
              className="control control-checkbox m-0 p-0"
              htmlFor="symbols"
            >
              Símbolos
              <input
                type="checkbox"
                checked={useSymbols}
                name="symbols"
                id="symbols"
                onChange={handleSymbolsChange}
              />
              <div className="control_indicator"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGeneratorApp;
