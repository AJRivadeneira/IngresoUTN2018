function Mostrar()
{   var numero
    for(;;)
    {
        numero =parseInt(prompt("Ingrese un numero: "));
        
        if(numero == 9)
        {
            break;
        }

        alert(numero);
    }

    alert("Sali porque ingresaste un 9")


}//FIN DE LA FUNCIÓN