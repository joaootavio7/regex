const texto = "eu vou para o Morumbi em jogos de libertadores";
const regex = /\b[A-Z][a-zA-Z]*\b/g;

const resultado = texto.match(regex);
console.log(resultado);