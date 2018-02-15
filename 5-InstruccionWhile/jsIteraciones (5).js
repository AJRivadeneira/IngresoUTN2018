function Mostrar()
{   var sexo = prompt("ingrese f ó m .");
    var sexoF = "F";
    var sexoM = "M";
    while(!(sexoF || sexoM))
    {
        sexo=prompt("Error. Sexo incorrecto. Ingreso un Sexo correcto");
    }

    alert("Usted es " + sexo);

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN