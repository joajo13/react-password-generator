import { useCallback, useState } from "react";
import { generatePassword } from "../helpers/generatePassword";
import { toast } from "sonner";

export const usePasswordGenerator = () => {

    const [password, setPassword] = useState("");
    const [length, setLength] = useState(4);
    const [useLettersMin, setUseLettersMin] = useState(true);
    const [useLettersMayus, setUseLetterMayus] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

    const handleClick = useCallback(() => {
        setPassword(generatePassword(length, useLettersMin, useLettersMayus, useNumbers, useSymbols));
    }, [length, useLettersMin, useLettersMayus, useNumbers, useSymbols]);

    const handleLengthChange = (e) => {
        setLength(e.target.value);
        handleClick()
    };

    const handleLettersMinChange = (e) => {
        setUseLettersMin(e.target.checked);
    };

    const handleLettersMayusChange = (e) => {
        setUseLetterMayus(e.target.checked);
    };

    const handleNumbersChange = (e) => {
        setUseNumbers(e.target.checked);
    };

    const handleSymbolsChange = (e) => {
        setUseSymbols(e.target.checked);
    };

    const copyToClipboard = async (str) => {
        try {
            await navigator.clipboard.writeText(str);
            toast.success("Copiado al portapapeles");
        } catch (error) {
            toast.error("Error al copiar al portapapeles");
        }
    };

    return {
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
        copyToClipboard
    }
}
