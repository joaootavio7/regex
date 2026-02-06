const regex = /\((.*?)\)/g;
const texto = "O São Paulo(é tricampeão do mundo) e o (maior campeao mundial)!";

for (const match of texto.matchAll(regex)) {
  console.log(match[1]);
}