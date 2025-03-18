
function calculate(){
     var num1 = parseFloat(document.getElementById("input1").value);
     var num2 = parseFloat(document.getElementById("input2").value);
     var display = document.getElementById("result");
     // var answer = num1 + num2;



if (isNaN(answer = num1 + num2)){
     document.getElementById("result").innerHTML = "your answer is " + answer;
} 
     display.innerHTML = answer;



if (isNaN(answer = num1 - num2)){
     document.getElementById("result").innerHTML = "your answer is " + answer;
} 
     display.innerHTML = answer;



if (isNaN(answer = num1 * num2)){
     document.getElementById("result").innerHTML = "your answer is " + answer;
} 
     display.innerHTML = answer;

}


