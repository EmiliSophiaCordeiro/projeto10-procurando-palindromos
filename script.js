const word = 'Digite uma palavra para verificar se é um palíndromo:'

  const formattedWord = word.toLowerCase().replace(/\s/g, "");

  return formattedWord === formattedWord.split("").reverse().join("");

if (ehPalindromo(word)) {
  console.log(`"${word}" é um palíndromo! 🎉`);
} else {
  const invertedWord = word.split("").reverse().join("");
  console.log(`"${word}" não é um palíndromo.`);
  console.log(`Lida da esquerda para a direita: ${word}`);
  console.log(`Lida da direita para a esquerda: ${formattedWord}`);
}
