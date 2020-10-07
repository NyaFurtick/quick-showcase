/*
*   Nya Furtick
*   Simple calculator using JavaScript
*/
var calcScreen = document.getElementById('screen');

function addNumber(num){
  calcScreen.value += num;
  numbers.push(num);
}

function clearScreen(){
  calcScreen.value = '';
}

function addOperator(oper){
  calcScreen.value += oper;
}

function result(){
  var answer = eval(calcScreen.value);
  calcScreen.value = answer;
}
