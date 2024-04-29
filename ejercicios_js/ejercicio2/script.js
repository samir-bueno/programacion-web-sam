//siempre las funciones deben de tener un valor de retorno

function number1() {
    let number1 = document.getElementById("number1").value;
    return parseInt(number1);
  
}

function number2() {
    let number2 = document.getElementById("number2").value;
    return parseInt(number2);
  
}


function calculate() {
    let resultado = number1() + number2(); //para ejecutar una funion al final debemos de poner los parentesis
    resultado = document.getElementById("resultado").textContent = resultado;

}















