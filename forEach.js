/**
    Uso de forEach
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.sayHello = function () {
        return "Hello, " + this.nome;
    };
    return Pessoa;
}());
var fulano = new Pessoa("fulano");
var beltrano = new Pessoa("beltrano");
var pessoas = new Array();
pessoas.push(fulano);
pessoas.push(beltrano);
pessoas.forEach(function (p) {
    return console.log(p.sayHello());
});
