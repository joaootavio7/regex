"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regex = /\((.*?)\)/g;
const texto = "O São Paulo(é tricampeão do mundo) e o (maior campeao)!";
for (const match of texto.matchAll(regex)) {
    console.log(match[1]);
}
//# sourceMappingURL=atividade10.js.map