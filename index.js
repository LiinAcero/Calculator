function updateScreen(value){
    document.getElementById("screen").innerHTML = value;
}

let number1 = null;
let operator = "";
let number2 = null;


function display(num){
    number1 = num;
    const result = number1 + operator + number2;
    updateScreen(result);
}

