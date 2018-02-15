function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
        case "Febrero":
        alert("Tiene 28 dias");
        break;
        default:
        alert("Tiene 31 dias");
        break;
        case "Septiembre":
        case "Noviembre":
        case "Junio":
        case "Abril":
        alert("Tiene 30 dias");
        break;
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
}