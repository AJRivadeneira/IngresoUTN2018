function Mostrar()
{

	var sumaPos=0;
	var sumaNeg=0;
	var contPos=0;
	var contNeg=0;
	var contCeros=0;
	var contPares=0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta;
	var numero;
	//declarar contadores y variables 

	do 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero > 0)
		{
			sumaPos = sumaPos + numero;
			contPos++
		}
		else if(numero < 0)
		{
			sumaNeg = sumaNeg + numero;
			contNeg++
		}
		else
		{
			contCeros++
		}
		if (numero % 2 == 0)
		{
			contPares++
		}
		respuesta = prompt("Ingrese s si desea continuar");
	}
	while(respuesta=="s")
	
	promPos = sumaPos / contPos
	promNeg = sumaNeg / contNeg
	diferencia = contPos - contNeg

	document.write("1-Suma de los negativos: " + sumaNeg + "<br/>");
	document.write("2-Suma de los positivos: " + sumaPos + "<br/>");
	document.write("3-Cantidad de positivos: " + contPos + "<br/>");
	document.write("4-Cantidad de negativos: " + contNeg + "<br/>");
	document.write("5-Cantidad de ceros: " + contCeros + "<br/>");
	document.write("6-Cantidad de numeros pares: " + contPares + "<br/>");
	docuemnt.write("7-Promedio de positivos: " + promPos + "<br/>");
	docuemnt.write("8-Promedio de negativos: " + promNeg + "<br/>");
	docuemnt.write("9-Diferencia entre positivos y negativos" + diferencia + "<br/>");


}//FIN DE LA FUNCIÓN