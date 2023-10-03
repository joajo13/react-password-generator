import { Toaster, toast } from "sonner";
import { Options } from "./components/Options";
import { PasswordCard } from "./components/PasswordCard";
import { Titles } from "./components/Titles";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { Navbar } from "./components/Navbar";

function PasswordGeneratorApp() {
  const {
    password,
    handleClick,
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
  } = usePasswordGenerator();

  const params = {
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
  };

  const copyToClipboard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
      toast.success("Copiado al portapapeles");
    } catch (error) {
      toast.error("Error al copiar al portapapeles");
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen -z-10 dark:bg-gray-900">
        <Navbar />
        <Toaster richColors />
        <Titles />

        <PasswordCard
          copyToClipboard={copyToClipboard}
          handleClick={handleClick}
          password={password}
        />

        <Options params={params} />
      </div>
    </>
  );
}

export default PasswordGeneratorApp;
