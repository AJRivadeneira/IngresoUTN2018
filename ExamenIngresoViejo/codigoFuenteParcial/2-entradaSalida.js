//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var precio;
    var precioFin;
	
    precioFin= parseInt(document.getElementById("importe").value);

    precio= prompt("Ingrese precio del producto");

    precioFin= precio * 1.21;

    alert("El precio final es " + precioFin.toFixed(2));
}

