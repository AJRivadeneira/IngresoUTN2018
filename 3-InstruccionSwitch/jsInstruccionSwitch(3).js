function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
        case "Enero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        alert("Este mes tiene 30 o 31 dias");
        break; 
        case "Febrero":
        alert("Este mes tiene como mucho 29 dias")
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN
}