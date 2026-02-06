const regex = /\d+/g;
let texto: string  = "Tenho 3 mundiais, 22 paulistas e 6 brasileiros.";

const resultado = texto.match(regex);
console.log(resultado);