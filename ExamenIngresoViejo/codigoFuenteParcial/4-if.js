//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var num1;
    var num2;
    var suma;
    var resta;

    num1= parseInt(prompt("Ingrese un numero"));
    num2= parseInt(prompt("Ingrese otro numero"));

    if (num1 > num2) {
        resta= num1 - num2;
    }
    else {
        suma= num1 + num2;
    }
    
    document.write("La suma de los numeros da " + suma + "<br/>");
	document.write("La resta de los numeros da " + resta);
}

