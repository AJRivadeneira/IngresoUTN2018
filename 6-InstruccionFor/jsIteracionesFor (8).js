function Mostrar()
{   var num;
    var i;
    var esPrimo = true;

    num = parseInt(prompt("Ingrese un Numero"));

    for(i = 2; i < num; i++) {
        if (num % i == 0) {
            esPrimo = false;
            break;
        
        }
    }
    if (esPrimo == true) {
        alert(num + " es primo");
    }
    else {
        alert(num + " no es primo");
    }
}//FIN DE LA FUNCIÓN