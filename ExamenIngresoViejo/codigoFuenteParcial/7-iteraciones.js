//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var sexo;
    var nota;
    var promedio;
    var notaBaja;
    var acumNotas = 0;
    var varArriba6 = 0;
    var flag = 0;
	
    for(var i = 0;i < 6; i++)
    {
        nota = parseInt(prompt("Ingrese nota"));

        while (nota < 0 || nota >10)
        {
            nota = parseInt(prompt("Error. Reingrese una nota entre el 0 al 10"));
        }

        sexo = prompt("Ingrese sexo");

        while (sexo != "f" && sexo != "m")
        {
            sexo = prompt("Error. Reingrese un sexo correcto (f o m)");
        }
        acumNotas += nota;

        if (nota < notaBaja || flag == 0)
        {
            notaBaja = nota;
            flag = 1;
        }

        if (sexo == "m" && nota >= 6)
        {
            varArriba6++;
            acumNotas++;
        }

        promedio = acumNotas / 6
    }   
    alert("El promedio de las notas es " + promedio.toFixed(2) + " \nMientras la nota mas baja fue " + notaBaja + " \nTambien " + varArriba6 + " varones tuvieron entre 6 o mas de nota...")
}

