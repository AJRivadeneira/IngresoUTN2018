//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var num1;
    var num2;
    var multiplicacion;
    var suma;
    var resta;

    num1= parseInt(prompt("Ingrese un numero"));
    num2= parseInt(prompt("Ingrese otro numero"));

    if (num1 == num2) {
        multiplicacion= num1 * num2;
    }
    else if (num1 < num2) {
        suma= num1 + num2;
    }
    else {
        resta= num1 - num2;
    }
    
    document.write("La multiplicacion de los numero da " + multiplicacion + "<br/>")
    document.write("La suma de los numeros da " + suma + "<br/>");
	document.write("La resta de los numeros da " + resta);
}

