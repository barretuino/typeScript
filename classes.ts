/**
    Classes
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
class Pessoa{
    private _nome:string;
    private _idade: number;   
    private _peso?: number;
    
    constructor(nome:string, idade:number, peso?:number){
        this._nome = nome;
        this._idade = idade;
        if(peso !== undefined){
            this._peso = peso;
        }        
    }

    public get nome():string{
        return this._nome;
    }
    public set nome(nome:string){
        this._nome = nome;
    }

    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }

    public get peso(): number {
        return this._peso;
    }
    public set peso(value: number) {
        this._peso = value;
    }

    print():void{
        console.log("Nome: " + this._nome + " Idade: " + this._idade +
            (this._peso !== undefined ? " Peso: "  + this._peso : ""));
    }
}

class Empregado extends Pessoa{
    private _salario: number;    
    private _dataContratacao: Date;

    constructor(nome:string, idade:number, salario:number, dataContratacao:Date, peso?:number){
        if(peso !== undefined){
            super(nome, idade, peso);
        }else{
            super(nome, idade);
        }
        this._salario = salario;
        this._dataContratacao = dataContratacao;
    }

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }

    public get dataContratacao(): Date {
        return this._dataContratacao;
    }
    public set dataContratacao(value: Date) {
        this._dataContratacao = value;
    }

    print():void{
        super.print();
        console.log("Salario: " + this._salario + " Data Contratacao: " + this.dataContratacao);
    }
}

let pessoa:Pessoa = new Pessoa("Paulo Barreto", 37, 70);
let pessoa2:Pessoa = new Pessoa("Luiz", 31);
let professor:Empregado = new Empregado("José Silva", 45, 4_000, new Date(2016, 0, 11), 85);

pessoa.print();
pessoa2.print();
professor.print();

//Chamada de um objeto que imprementa herança. Sua construção define sua estrutura
let trabalhador:Pessoa = new Empregado("João Souza", 21, 984.22, new Date(2019, 3, 25));
trabalhador.print();

console.log(pessoa.nome);