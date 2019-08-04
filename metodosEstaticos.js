/**
    Métodos Estáticos
    Autor: Paulo Barreto
    Data: 04/08/2019
**/
var SystemAlert = /** @class */ (function () {
    function SystemAlert() {
    }
    SystemAlert.alert = function (message) {
        alert(message);
    };
    SystemAlert.warm = function (message) {
        alert("Atenção: " + message);
    };
    SystemAlert.error = function (message) {
        alert("Erro: " + message);
    };
    return SystemAlert;
}());
SystemAlert.alert("Oi");
SystemAlert.error("Não foi possível conectar na base de dados");
