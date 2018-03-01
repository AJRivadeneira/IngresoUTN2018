/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var celsius;
    var fahrenheit;

    fahrenheit = parseInt(document.getElementById("Temperatura").value);
    celsius = fahrenheit - 32;
    alert(fahrenheit + " Fahrenheit son " + celsius + " centigrados");
}

function CentigradosFahrenheit () 
{   var celsius;
    var fahrenheit;

    celsius= parseInt(document.getElementById("Temperatura").value);
    fahrenheit = celsius + 32;
    alert(celsius + " centigrados son " + fahrenheit + " fahrenheit");
	
}
