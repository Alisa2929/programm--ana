
function myFunction()
{
    let name = document.getElementById("input_name");
    let surname = document.getElementById("input_surname");
    let h1_name = document.getElementById("name");
    let age = document.getElementById("input_age");
    

    h1_name.innerText ="Hello,"+ name.value + " " + surname.value;

    if (name.value == "" || !name.value.match(/[A-z]/))
    {
       alert("Error: incorrect name!");
       return;
    }

    else
    {
        //alert("name.value");
    }

    if (surname.value == "" || !surname.value.match(/[A-z]/))
        {
           alert("Error: incorrect surname!");
           return;
        }
    
        else
        {
            //alert("surname.value");
        }

    if (age.value <= 0 || age.value == "" || !age.value.match( /[0-9]/ ))
    {
    alert("Error: incorrect age!");
       return;
    }
    else
    {
        (name.value + "is" + age.value + "y.o.");
    }


    let table = document.getElementById("myTable");
    let row = table.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();

    cell1.innerHTML = name.value;
    cell2.innerHTML = surname.value;
    cell3.innerHTML = age.value;
}



