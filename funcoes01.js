/**
    Exemplo de Funções
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
//Função sem parâmetro e sem retorno
function simples() {
    console.log("Execucao de uma Funcao Simples");
    for (var i = 10; i > 0; i--) {
        console.warn("Contagem " + i);
    }
}
//Função sem retorno
function calcular(pA, pB) {
    console.log(pA + pB);
}
//Função com retorno
function quantosPares(fim) {
    var contador = 0;
    for (var i = 0; i <= fim; i++) {
        if (i % 2 == 0) {
            contador++;
        }
    }
    return contador;
}
//Função com retorno e argumento opcional
function funcaoSomar(vA, vB, vC) {
    if (vC !== undefined) {
        return vA + vB + vC;
    }
    else {
        return vA + vB;
    }
}
//Função com multi argumentos (...)
function multi(var1) {
    var var2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        var2[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < var2.length; i++) {
        sum += var2[i];
    }
    console.log(var1 + sum);
}
var sumAnonymous = function (n1, n2) {
    console.log("Resultado e: " + (n1 + n2));
};
var sumArrow = function (n1, n2) { return console.log("Resultado e: " + (n1 + n2)); };
simples();
calcular(5.4, 3.2);
console.log(quantosPares(100));
console.log(funcaoSomar(100, 14, 13));
console.log(funcaoSomar(100, 14));
multi("Resultado ", 1, 2, 3, 4, 5);
sumAnonymous(25, 14);
sumArrow(25, 14);
