const regex = /\b(car|bus)\b/gi;
let texto: string = "Eu vou de car para o Morumbi ver o São Paulo jogar e de bus para o trabalho";
const resultado = texto.match(regex);
console.log(resultado);