function Mostrar()
{
//tomo el mes
    var mesDelAño = document.getElementById('mes').value;
    switch (mesDelAño) {
        case "Enero": alert("Que comienzes bien el año");
          break;
        case "Febrero":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre": alert("Nada interesante");
          break;
        case "Marzo": alert("Empiezan las clases");
          break;
        case "Julio": alert("Empiezan las vacaciones");
          break;
        case "Diciembre": alert("Felices fiestas");
          break;
    }

   

}//FIN DE LA FUNCIÓN