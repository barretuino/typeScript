function printPessoa(param) {
    console.log("Nome: " + param.nome + " Idade: " + param.idade +
        (param.peso !== undefined ? " Peso: " + param.peso : ""));
}
function printEmpregado(param) {
    console.log("Nome: " + param.nome + " Idade: " + param.idade +
        (param.peso !== undefined ? " Peso: " + param.peso : "") +
        " Salario: " + param.salario +
        (param.dataContratacao !== undefined ? " Contratado em: " + param.dataContratacao : ""));
}
var individuo = { nome: "Paulo Barreto", idade: 37, peso: 70 };
var motorista = { nome: "João", idade: 45, salario: 1350.14, dataContratacao: new Date() };
printPessoa(individuo);
printPessoa(motorista);
printEmpregado(motorista);
