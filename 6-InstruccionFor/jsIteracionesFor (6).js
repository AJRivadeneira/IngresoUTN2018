function Mostrar()
{   var numero;
    var contPar = 0;
    var i;

    numero = parseInt(prompt("Ingrese un numero"));

    for (i = 1;i <= numero; i++) {
        
        if(i % 2 ==1) {
            continue;
        }
        contPar++;
        alert(i);
    }

    alert("Se encontraron " + contPar + " numeros pares");
}//FIN DE LA FUNCIÓN