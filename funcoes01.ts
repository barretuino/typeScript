/**
    Exemplo de Funções
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
//Função sem parâmetro e sem retorno
function simples():void{
    console.log("Execucao de uma Funcao Simples");
    for(let i=10; i > 0; i--){
        console.warn("Contagem " + i);
    }
}

//Função sem retorno
function calcular(pA:number, pB:number):void{
    console.log(pA + pB);
}

//Função com retorno
function quantosPares(fim:number):number{
    let contador = 0;
    for(let i=0; i<=fim; i++){
        if(i%2 == 0){
            contador++;
        }        
    }
    return contador;
}

//Função com retorno e argumento opcional
function funcaoSomar(vA:number, vB:number, vC?:number):number{
    if(vC !== undefined){
        return vA+vB+vC;
    }else{
        return vA+vB;
    }
}

//Função com multi argumentos (...)
function multi(var1:string, ...var2:number[]):void{
    var sum=0;
    for(var i=0; i < var2.length; i++){
        sum += var2[i]; 
    }
    console.log(var1 + sum);
}

let sumAnonymous = function(n1:number, n2:number):void{
    console.log("Resultado e: " + (n1 + n2));
}

let sumArrow = (n1:number, n2:number) => console.log("Resultado e: " + (n1 + n2));

simples();
calcular(5.4, 3.2);
console.log(quantosPares(100));
console.log(funcaoSomar(100, 14, 13));
console.log(funcaoSomar(100, 14));
multi("Resultado ", 1, 2, 3, 4, 5);
sumAnonymous(25,14);
sumArrow(25,14);