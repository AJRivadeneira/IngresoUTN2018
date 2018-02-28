/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var largoTer;
    var anchoTer;
    var cantAlam;
    largoTer=document.getElementById("Largo").value;
    anchoTer=document.getElementById("Ancho").value;
    largoTer=parseInt(largoTer);
    anchoTer=parseInt(anchoTer);
    cantAlam= (largoTer * 2 + anchoTer * 2) * 3;
    alert("Se necesita comprar " + cantAlam + " metros de alambre");

}
function Circulo () 
{   var radioTer;
    var cantAlam;
    radioTer=document.getElementById("Radio").value;
    radioTer=parseInt(radioTer);
    cantAlam= (2 * Math.PI * radioTer);
    alert("Se necesita comprar " + cantAlam.toFixed(2) + " metros de alambre");
	
}
function Materiales () 
{   var largoTer;
    var anchoTer;
    var cem;
    var cal;
    var superficie;
    largoTer=document.getElementById("Largo").value;
    anchoTer=document.getElementById("Ancho").value;
    largoTer=parseInt(largoTer);
    anchoTer=parseInt(anchoTer);
    superficie= largoTer * anchoTer;
    cal= superficie * 3;
    cem= superficie * 2;
    alert("La superficie es " + superficie + " m2 y necesita " + cal + " de cal y " + cem + " de cemento");
}