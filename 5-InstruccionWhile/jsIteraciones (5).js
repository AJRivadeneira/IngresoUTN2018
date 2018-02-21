function Mostrar()
{   var sexo = prompt("ingrese f ó m .");
    while(!(sexo=="f" || sexo=="m"))
    {
        sexo=prompt("Error. Reingrese Sexo");
    }
    if(sexo=="f")
    {
        alert("Femenino");
    }
    else
    {
        alert("Masculino");
    }
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN