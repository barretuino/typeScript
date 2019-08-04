/**
    Interfaces
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
interface Pessoa{
    nome:string;
    idade:number;
}

interface Pessoa{
    peso?:number;
}

interface Empregado extends Pessoa{
    salario:number;
    readonly dataContratacao?:Date;
}

function printPessoa(param:Pessoa){
    console.log("Nome: " + param.nome + " Idade: " + param.idade +
            (param.peso !== undefined ? " Peso: "  + param.peso : ""));
}

function printEmpregado(param:Empregado){
    console.log("Nome: " + param.nome + " Idade: " + param.idade +
            (param.peso !== undefined ? " Peso: "  + param.peso : "") + 
            " Salario: " + param.salario +
            (param.dataContratacao !== undefined ? " Contratado em: " + param.dataContratacao : ""));
}

let individuo:Pessoa = {nome:"Paulo Barreto", idade:37, peso:70};
let motorista:Empregado = {nome:"João", idade:45, salario:1350.14, dataContratacao: new Date()};

printPessoa(individuo);
printPessoa(motorista);
printEmpregado(motorista);