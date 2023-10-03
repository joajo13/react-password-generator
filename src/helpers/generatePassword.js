
const lettersMin = "abcdefghijklmnopqrstuvwxyz";
const lettersMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{};':\",./<>?`~";

export const generatePassword =
  (
    passwordLength,
    useLettersMinus,
    useLettersMayus,
    useNumbers,
    useSymbols
  ) => {
    let characters = "";
    if (useLettersMinus) characters += lettersMin;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
    if (useLettersMayus) characters += lettersMayus;
    if (!characters) {
      return "No se puede generar una contraseña con los parámetros seleccionados";
    }
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
  }

