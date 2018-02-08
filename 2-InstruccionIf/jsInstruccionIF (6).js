function Mostrar()
{
//tomo la edad  
    var edad;
    edad=document.getElementById("edad").value;

    if (edad >= 0 && edad <= 12)
    {
        alert("Usted es un niño");
    }
    else if (edad <=18)
    {
        alert("Usted es un adolecente");
    }
    else 
    {
        alert("Usted es mayor de edad");
    }



}//FIN DE LA FUNCIÓN