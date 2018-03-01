//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var ancho
    var largo
    var alambrado

    ancho= parseInt(document.getElementById("ancho").value);
    largo= parseInt(document.getElementById("largo").value);

    alambrado= (largo * 2 + ancho * 2) * 6;

    alert("Se necesitan " + alambrado + " metros de alambrado"); 
	
}

