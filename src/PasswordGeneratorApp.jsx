import { Toaster, toast } from "sonner";
import { Options } from "./components/Options";
import { PasswordCard } from "./components/PasswordCard";
import { Titles } from "./components/Titles";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { Navbar } from "./components/Navbar";
import { useTheme } from "./hooks/useTheme";
import { Footer } from "./components/Footer";

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
    copyToClipboard,
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

  const { handleToggleTheme, theme } = useTheme();

  return (
    <>
      <div className="bg-white min-h-screen -z-10 dark:bg-gray-900">
        <Navbar handleToggleTheme={handleToggleTheme} />
        <Toaster duration={1000} richColors theme={theme ? "dark" : "light"} />
        <Titles />

        <PasswordCard
          copyToClipboard={copyToClipboard}
          handleClick={handleClick}
          password={password}
        />

        <Options params={params} />

        <Footer />
      </div>
    </>
  );
}

export default PasswordGeneratorApp;
