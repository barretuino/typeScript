/**
    Uso de forEach
    Autor: Paulo Barreto
    Data: 04/08/2019
**/

class Pessoa{
    nome:string;
    constructor(nome:string){
        this.nome = nome;
    }
    sayHello():string{
        return "Hello, " + this.nome;
    }
}

var fulano = new Pessoa("fulano");
var beltrano = new Pessoa("beltrano");

var pessoas:Pessoa[]= new Array();
pessoas.push(fulano);
pessoas.push(beltrano);

pessoas.forEach( (p:Pessoa)=>
    console.log(p.sayHello())
    );