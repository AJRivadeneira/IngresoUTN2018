function Mostrar()
{   var numero;
    var contDiv = 0;
    var i;

    numero = parseInt(prompt("Ingrese un numero"));

    for (i = 1;i <= numero; i++) {
        
        if(numero % i == 0) {
            contDiv++;
            alert(i);
        }
    }

    alert("Se encontraron " + contDiv + " divisores de " + numero);


}//FIN DE LA FUNCIÓN