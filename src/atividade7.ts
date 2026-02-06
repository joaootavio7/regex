const regex = /\b\w{4}\b/g;
const texto: string = "Eu viajei de carro para Minas Gerais";

const resultado = texto.match(regex);
console.log(resultado);