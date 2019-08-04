/**
    Classes
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
class Pessoa {
    constructor(nome, idade, peso) {
        this._nome = nome;
        this._idade = idade;
        if (peso !== undefined) {
            this._peso = peso;
        }
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    get peso() {
        return this._peso;
    }
    set peso(value) {
        this._peso = value;
    }
    print() {
        console.log("Nome: " + this._nome + " Idade: " + this._idade +
            (this._peso !== undefined ? " Peso: " + this._peso : ""));
    }
}
class Empregado extends Pessoa {
    constructor(nome, idade, salario, dataContratacao, peso) {
        if (peso !== undefined) {
            super(nome, idade, peso);
        }
        else {
            super(nome, idade);
        }
        this._salario = salario;
        this._dataContratacao = dataContratacao;
    }
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    get dataContratacao() {
        return this._dataContratacao;
    }
    set dataContratacao(value) {
        this._dataContratacao = value;
    }
    print() {
        super.print();
        console.log("Salario: " + this._salario + " Data Contratacao: " + this.dataContratacao);
    }
}
let pessoa = new Pessoa("Paulo Barreto", 37, 70);
let pessoa2 = new Pessoa("Luiz", 31);
let professor = new Empregado("José Silva", 45, 4000, new Date(2016, 0, 11), 85);
pessoa.print();
pessoa2.print();
professor.print();
//Chamada de um objeto que imprementa herança. Sua construção define sua estrutura
let trabalhador = new Empregado("João Souza", 21, 984.22, new Date(2019, 3, 25));
trabalhador.print();
console.log(pessoa.nome);
