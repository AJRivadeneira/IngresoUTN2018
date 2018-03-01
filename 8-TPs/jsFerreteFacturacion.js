/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var suma
  
    var precio1
    var precio2
    var precio3

    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    suma= precio1 + precio2 + precio3;
}
function Promedio () 
{
    var suma;
    var promedio;
    var precio1;
    var precio3;
    var suma
    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    suma= precio1 + precio2 + precio3;
    promedio= suma / 3;
    
}
function PrecioFinal () 
{
    var suma
    var PrecioFinal
    var precio1
    var precio2
    var precio3

    precio1= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);
    suma= precio1 + precio2 + precio3;
    PrecioFinal= suma * 1.21;

}