function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';

	do {

		numero =parsent(prompt("Ingrese un numero"));

		if (numero > max || flag == 0) {
			max = numero;
		
	}

		if (numero < min || flag == 0) {
		min = numero;
		}

		respuesta= prompt("Desea continuar?: ");

	} while(respuesta =='s');
	




}//FIN DE LA FUNCIÓN