function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta;

	do
	{
		numero=parseInt(prompt("Ingrese un numero"));
		
		if(numero >= 0)
		{
			positivo = positivo + numero;
		}
		else
		{
			negativo = negativo * numero;
		}
		respuesta = prompt("Ingrese s si desea continuar");
	} while(respuesta == "s");


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN