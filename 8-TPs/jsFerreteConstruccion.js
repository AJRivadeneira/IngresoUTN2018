/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    var largo 
    var ancho 
    var perimetro

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    perimetro = [(largo + ancho) *2] *3
    alert("Se necesitan " + perimetro + " de alambre")
}
function Circulo () 
{
    var radio=parseFloat(document.getElementById("Radio").value);
    var perimetro

    perimetro= radio * 3 * (Math.PI);
    alert("Se necesitan " + perimetro + " de alambre")
}
function Materiales () 
{
	var largo 
    var ancho 
    var perimetro
    var cal
    var cemento

    largo = parseFloat(document.getElementById("Largo").value);
    ancho = parseFloat(document.getElementById("Ancho").value);
    perimetro = largo * ancho;
    cal = perimetro * 3
    cemento= perimetro * 2


    alert("Se necesitan " + cal + " de cal" + " y " + cemento+ " de cemento")
}