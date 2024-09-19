let word = prompt('Digite uma palavra.')
let inversedWord = ''

for (let i = word.length - 1; i >= 0; i--) {
    inversedWord += word[i]
}

if (word === inversedWord) {
    alert(`A palavra ${word} é um palíndromo`)
} else {
    alert(`A palavra ${word} não é um palíndromo.
Porque ${word} ao contrário é: ${inversedWord}, então não pode ser um palíndromo.`)
}
