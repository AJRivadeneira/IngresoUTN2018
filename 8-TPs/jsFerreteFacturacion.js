/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var num1;
    var num2;
    var num3;
    var suma;
	num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);
    suma=(num1+num2+num3);
    alert("El precio total es " + suma);
}
function Promedio () 
{   var num1;
    var num2;
    var num3;
    var suma;
    var promedio;
	num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);
    suma=(num1+num2+num3);
    promedio = (suma) / 3;
    alert("El promedio entre estos es " + promedio);
	
}
function PrecioFinal () 
{   var num1;
    var num2;
    var num3;
    var suma;
    var precioIVA;
    var precioFinal;
    num1=document.getElementById("PrecioUno").value;
    num2=document.getElementById("PrecioDos").value;
    num3=document.getElementById("PrecioTres").value;
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);
    suma=(num1+num2+num3);
    precioIVA= suma * 21 /100;
    precioFinal= suma + precioIVA;
    alert("El precio final es " + precioFinal);
}// Esta bien (no se si es eficiente!!!)