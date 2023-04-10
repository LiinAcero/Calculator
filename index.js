function updateScreen(){
    const result = number1 + operator + number2;
    document.getElementById("screen").innerHTML = result;
}

let number1 = "";
let operator = "";
let number2 = "";


function display(num){
    if( operator == "") {
        number1 += num;
    } else{
        number2 += num;
    };
    updateScreen();
}

function display2(opr){
    if (number1 != ""){
        operator = opr;
    };
    updateScreen();
}

function calculate(){
    let equation = 0;
    if(operator == '+'){
        equation = parseInt(number1) + parseInt(number2) 
    } else if(operator == '-'){
        equation = parseInt(number1) - parseInt(number2) 
    } else if(operator == '/'){
        equation = parseInt(number1) / parseInt(number2) 
    } else if(operator == '*'){
        equation = parseInt(number1) * parseInt(number2) 
    }
    
    number1 = equation; 
    number2 = "";
    operator = "";
    document.getElementById("screen").innerHTML = equation;
}

function empty(){
    // number1 = "";
    operator = "";
    number2 = "";
    updateScreen();
}
