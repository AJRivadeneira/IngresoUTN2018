function Mostrar()
{	
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	while(numero < 0 || numero > 9 || isNaN(numero) )
	{
		numero = prompt("Error. Numero incorrecto. Ingrese un numero correcto");
	}

	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN