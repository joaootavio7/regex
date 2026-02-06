const regex = /\b\d{3}\b/g;
let texto: string = "Eu comprei o meu PS5 a 2 anos e 319 dias";

const resultado = texto.match(regex);
console.log(resultado);