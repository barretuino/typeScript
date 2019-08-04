/**
    Exemplo de Manipulação de Variáveis
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
var p = document.createElement('p');
var texto = "Declaracao de Variaveis";
p.textContent = texto;
document.body.append(p);
//Declaração de Variáveis
var numero = 10;
var booleano = true;
var textoConcat = texto + "Este e um texto longo que mostra concatenacao de texto";
var flutuante = 3.14;
var array = [1, 2, 3];
var lista = ["Paulo Barreto", "barretuino@gmail.com"];
var tuple = ["Paulo", 4];
var DIAS;
(function (DIAS) {
    DIAS[DIAS["SEGUNDA"] = 1] = "SEGUNDA";
    DIAS[DIAS["TERCA"] = 2] = "TERCA";
    DIAS[DIAS["QUARTA"] = 3] = "QUARTA";
    DIAS[DIAS["QUINTA"] = 4] = "QUINTA";
    DIAS[DIAS["SEXTA"] = 5] = "SEXTA";
    DIAS[DIAS["SABADO"] = 6] = "SABADO";
    DIAS[DIAS["DOMINGO"] = 7] = "DOMINGO";
})(DIAS || (DIAS = {}));
;
var hoje = DIAS.DOMINGO;
console.log("Hoje e " + hoje + " | " + DIAS[7]);
p.textContent = "Numero " + numero.toString();
document.body.append(p);
/*p.textContent = "Booleano " + (booleano ? "Verdadeiro" : "Falso");
document.body.append(p);

p.textContent = flutuante.toString();
document.body.append(p);*/
console.log(textoConcat);
console.log(tuple[0].substr(1, 4));
console.log(tuple[1]);
