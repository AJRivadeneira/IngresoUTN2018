/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{   var sueldo;
    var nuevosueldo;
    var resultado;

    sueldo=document.getElementById("sueldo").value;
    sueldo=parseFloat(sueldo);
    resultado= sueldo * 10 / 100; 
    nuevosueldo= sueldo + resultado
        //Este comando sirve para mostra en un cuadro de texto (el de abajo)
        document.getElementById("resultado").value =nuevosueldo;
        
}
