

//console.log(typeof(a));// Izvada mainiga a 
//console.log(typeof(b));
let result;
let turpinat = true;


while(turpinat)
    function getResult()
{
let a = parseFloat(document.getElementById("a_var"));
let b = parseFloat(document.getElementById("b_var"));
let operators = document.getElementById("operator").value;

    switch(operators)
    {
    case "+":
    result.value = a + b;
    break;
    
    case "-":
    result.value = a - b;
    break;
    
    case "*":
    result.value = a * b;
    break;
    
    case "/":
        if(b != 0)
        {
    result.value = a / b;
        }
        else
        {
            console.warn("b = 0!!");
        }
    break;
    
    case "^":
    result.value = a ** b;
    break;
    
    case "%":
    result.value = a % b;
    break;
    
    case "!":
    for(let i = 1 ; i <= a ; i ++) 
    {
        //result = result * i;
        result.value *= i;
    }
    break;
    
    default:
        console.log("Error: invalid operator");
    
    }
    
    
    console.log("Result: ", result);
    //let user = prompt("turpinat ? (Y/N)");
    //if (user == "n" || user == "N")
    //{
      //  turpinat = false;
    //}
}

