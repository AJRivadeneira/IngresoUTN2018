//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var importe;
	var maxImp;
    var minImp;
    var maxDia;
    var minDia;
    var flag = 0;

    for(var i = 1; i <= 7; i++)
    {
        importe = parseFloat(prompt("Ingrese importe de la venta"));

        while(importe <= 0)
        {
            importe = parseFloat(prompt("Error.El importe de venta debe ser mayor a 0. Reingrese importe de venta"));
        }

        if(importe > maxImp || flag == 0)
        {
            maxImp = importe;
            maxDia = i;
        }
        if(importe < minImp || flag == 0)
        {
            minImp = importe;
            minDia= i;
            flag = 1;
        }
    }

    alert("La mayor venta fue de $ " + maxImp + " en el dia " + maxDia + " mientras la menor venta fue de $ " + minImp + " en el dia " + minDia);
}

