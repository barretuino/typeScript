var numeroA = 50;
var numeroB = 20;

//Diferença entre == e ===
if(true == 1){ //força conversão
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

if(true === 1){ //compara de fato o conteúdo
    console.log("Verdadeiro");
}else{
    console.log("Falso");
}

//Decisão
if(numeroA > numeroB){
    console.info("NumeroA é maior que numeroB");
}else{
    console.info("NumeroB é maior que numeroA");
}