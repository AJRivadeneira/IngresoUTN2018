/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca; 
    var descuento;
    const precio= 35;
    var IIBB;
    var importeFinal;
    var precioConDescuento;
      
 cantidad= document.getElementById("Cantidad").value;
 marca = document.getElementById("Marca").value;

 switch(cantidad)
 {
   case "1":
   case "2":
     descuento= 0;
     alert("el descuento es : " + descuento);
     break;

  case "3":
  if (cantidad == 3 && marca == "ArgentinaLuz")
  {
      descuento= precio * .15;

  }
else if (cantidad == 3 && marca == "FelipeLamparas" )
{
   descuento = precio * .10;
}
else{
    descuento= precio * .05;

    break;
}
 case "4":
 if ( cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
  {
    descuento= precio * .25;

  } 
else {
    descuento = precio * .20;

    break;
}
case "5":
if ( cantidad == 5 && marca == "ArgentinaLuz")
{
    descuento= precio * .40;

}
else {
    descuento = precio * .30;

    break;
}
default:
descuento= precio * .50;

break;

if (importeFinal>120)
{
   IIBB= importeFinal*.10
   alert("Importe final $ " + importeFinal + " de los cuales $ " + IIBB + " es impuesto ingresos brutos");

}
else{
alert("el importe final no suma mas de $ 120 ");
}
document.getElementById("PrecioConDescuento").value = precioConDescuento;
precioConDescuento= precio - descuento
 }
 

}
