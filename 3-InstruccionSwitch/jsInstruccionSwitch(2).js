function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
        default:
        alert("Falta para el Invierno");
        break;
        case "Julio":
        case "Agosto":
        alert("Abrigate hace frio");
        break;
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        alert("Ya pasamos el frio ahora hace calor");
        break;
    }

}//FIN DE LA FUNCIÓN