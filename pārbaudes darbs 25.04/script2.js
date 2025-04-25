let result;
let turpinat = true;


    function getResult()
{
let A = parseFloat(document.getElementById("input_A").value)
let B = parseFloat(document.getElementById("input_B").value)
let operators = document.getElementById("input_operator").value;


    switch(operators)
    {
    case "+":
    result.value = A + B;
    break;
    
    case "-":
    result.value = A - B;
    break;
    
    case "*":
    result.value = A * B;
    break;
    
    case "/":
        if(B != 0)
        {
    result.value = A / B;
        }
        else
        {
            console.warn("B = 0!!");
        }
    break;
    
    case "^":
    result.value = A ** B;
    break;
    
    case "%":
    result.value = A % B;
    break;
    
    case "!":
    for(let i = 1 ; i <= A ; i ++) 
    {
    
        result.value *= i;
    }
    break;
    
    default:
        console.log("Error: invalid operator");
    
}
}
