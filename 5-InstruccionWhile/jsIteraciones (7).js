function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="s";
	var promedio;

	while(respuesta=="s")	
	{
		numero = parseInt(prompt("Ingreso un numero"));
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("Ingrese s si desea continuar")
	}

	promedio = acumulador / contador;
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=promedio;

}//FIN DE LA FUNCIÓN