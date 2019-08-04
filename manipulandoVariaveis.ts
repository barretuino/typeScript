/**
    Exemplo de Manipulação de Variáveis
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
var p = document.createElement('p');
var texto:string = "Declaracao de Variaveis";
p.textContent = texto;
document.body.append(p);

//Declaração de Variáveis
var numero:number = 10;
var booleano:boolean = true;
var textoConcat:String = texto + "Este e um texto longo que mostra concatenacao de texto";
var flutuante:number = 3.14;
var array:number[] = [1, 2, 3];
var lista:Array<String> = ["Paulo Barreto", "barretuino@gmail.com"];
var tuple:[string, number] = ["Paulo", 4];

enum DIAS{SEGUNDA=1, TERCA=2, QUARTA=3, QUINTA=4, SEXTA=5, SABADO=6, DOMINGO=7};
var hoje:DIAS = DIAS.DOMINGO;

console.log(`Hoje e ${hoje} | ${DIAS[7]}`);

p.textContent = "Numero " + numero.toString();
document.body.append(p);

/*p.textContent = "Booleano " + (booleano ? "Verdadeiro" : "Falso");
document.body.append(p);

p.textContent = flutuante.toString();
document.body.append(p);*/

console.log(textoConcat);
console.log(tuple[0].substr(1,4));
console.log(tuple[1]);

//Conversao de Variaveis
var var1:any = "abcDEF";

var stringLength:number = (<string> var1).length;
var stringUpperCase:string = (var1 as string).toUpperCase();

console.log(stringLength);
console.log(stringUpperCase);