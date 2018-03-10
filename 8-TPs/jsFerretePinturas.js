/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var Fahrenheit;
    var grados;

    Fahrenheit= parseInt(document.getElementById("Temperatura").value);
    
    grados= Fahrenheit - 32;

    alert(Fahrenheit + " Fahrenheit son " + grados + " centigrados");
}

function CentigradosFahrenheit () 
{   var Fahrenheit;
    var grados;

    grados= parseInt(document.getElementById("Temperatura").value);

    Fahrenheit= grados + 32;

    alert(grados + " centigrados son " + Fahrenheit + " Fahrenheit");
}
