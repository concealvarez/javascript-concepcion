const cuotasBancarizadas = {
    cuotaUno: 0/100,
    cuotaTres: 5/100,
    cuotaSeis: 15/100,
    cuotaDoce: 20/100,
}
const cuotasSinBancarizar = {
    cuotaUno: 10/100,
    cuotaTres: 20/100,
    cuotaSeis: 30/100,
}


let valordeCuota =(parseInt(prompt('ingrese un valor para calcular')));
let bancarizada = (prompt('¿su tarjeta pertenece a algun banco? si/no')).toLowerCase();


const menu = ['ver valor total por cada financiacion', 'ver el valor de las cuotas por cada financiacion', 'ver el valor de recargo por cada financiacion', 'ver el porcentaje de recargo por cada financiacion'];
let confirmar = true 
while (confirmar){
    for (i=0; i < menu.length; i++){
        console.log (menu[i])
    }
    let seleccion = (parseInt(prompt('seleccione la opcion (1 - 2 - 3 - 4)')));
    if ((seleccion == 1) && (bancarizada=='si')){
        function multiplicar (){
            let valorTot1= valordeCuota
            let valorTot3= valordeCuota*cuotasBancarizadas.cuotaTres
            let valorTot6= valordeCuota*cuotasBancarizadas.cuotaSeis
            let valorTot12= valordeCuota*cuotasBancarizadas.cuotaDoce
            function mostrar(){
                console.log('Su total a pagar en un pago es de $' + valorTot1)
                console.log('Su total a pagar en un pago es de $' + valorTot3)
                console.log('Su total a pagar en un pago es de $' + valorTot6)
                console.log('Su total a pagar en un pago es de $' + valorTot12)
            }
            mostrar()
        }
        multiplicar()
    }else if ((seleccion == 1) && (bancarizada == 'no')){
        function multiplicar (){
            valorTot1= valordeCuota*cuotasSinBancarizar.cuotaUno
            valorTot3= valordeCuota*cuotasSinBancarizar.cuotaTres
            valorTot6= valordeCuota*cuotasSinBancarizar.cuotaSeis
            function mostrar (){
                console.log ('Su total a pagar en un pago es de $' + valorTot1)
                console.log ('Su total a pagar en un pago es de $' + valorTot3)
                console.log ('Su total a pagar en un pago es de $' + valorTot6)
            }
            mostrar()
        }
        multiplicar()
    }else if ((seleccion == 2) && (bancarizada == 'si')){
        function multiplicar (){
            let recargo1 = valordeCuota*cuotasBancarizadas.cuotaUno+valordeCuota;
            let recargo2 = valordeCuota*cuotasBancarizadas.cuotaTres+valordeCuota;
            let recargo3 = valordeCuota*cuotasBancarizadas.cuotaSeis+valordeCuota;
            let recargo4 = valordeCuota*cuotasBancarizadas.cuotaDoce+valordeCuota;
            function mostrar (){
               console.log ('El valor de la cuota en un pago es ' + recargo1)
               console.log ('El valor de cada cuota en tres pagos es $' + recargo2/3)
               console.log ('El valor de cada cuota en seis pagos es %' + recargo3/6)
               console.log ('El valor de cada cuota en doce pagos es %' + recargo4/12)
            }
            mostrar();
        }
        multiplicar();
    }else if ((seleccion == 2) && (bancarizada == 'no')){
        function multiplicar (){
            recargo1 = valordeCuota*cuotasSinBancarizar.cuotaUno+valordeCuota;
            recargo2 = valordeCuota*cuotasSinBancarizar.cuotaTres+valordeCuota;
            recargo3 = valordeCuota*cuotasSinBancarizar.cuotaSeis+valordeCuota;
            function mostrar (){
               console.log ('El valor de la cuota en un pago es $' + recargo1)
               console.log ('El valor de cada cuota en tres pagos es $' + recargo2/3)
               console.log ('El valor de cada cuota en seis pagos es $' + recargo3/6)
            }
            mostrar();
        }
        multiplicar();
    }else if ((seleccion == 3) && (bancarizada == 'si')){
        function multiplicar (){
            recargo1 = valordeCuota*cuotasBancarizadas.cuotaUno;
            recargo2 = valordeCuota*cuotasBancarizadas.cuotaTres;
            recargo3 = valordeCuota*cuotasBancarizadas.cuotaSeis;
            recargo4 = valordeCuota*cuotasBancarizadas.cuotaDoce;
            function mostrar (){
               console.log ('El valor del recargo en un pago es de $' + recargo1)
               console.log ('El valor del recargo en tres pagos es $' + recargo2)
               console.log ('El valor del recargo en seis pagos es $' + recargo3)
               console.log ('El valor del recargo en seis pagos es $' + recargo4)
            }
            mostrar();
        }
        multiplicar();
    
    }else if ((seleccion == 3) && (bancarizada == 'no')){
        function multiplicar (){
            recargo1 = valordeCuota*cuotasSinBancarizar.cuotaUno;
            recargo2 = valordeCuota*cuotasSinBancarizar.cuotaTres;
            recargo3 = valordeCuota*cuotasSinBancarizar.cuotaSeis;
            function mostrar (){
               console.log ('El valor del recargo en un pago es de $' + recargo1)
               console.log ('El valor del recargo en tres pagos es $' + recargo2)
               console.log ('El valor del recargo en seis pagos es $' + recargo3)
            }
            mostrar();
        }
        multiplicar();
    
    }else if ((seleccion == 4) && (bancarizada == 'si')){
        const cuotasBancarizadas = [
            {cuotaUno: 0/100},
            {cuotaTres: 5/100},
            {cuotaSeis: 15/100},
            {cuotaDoce: 20/100},
        ]
        for (cuotas of cuotasBancarizadas){
            console.table (cuotas)
        }
    }else if ((seleccion == 4) && (bancarizada == 'no')){
        const cuotasSinBancarizar = [
            {cuotaUno: 10/100},
            {cuotaTres: 20/100},
            {cuotaSeis: 30/100},
        ]
        for (cuotas of cuotasSinBancarizar){""
            console.table (cuotas)
        }
    }else {
        console.log ('opcion no valida')
    }
    let continuar = (prompt('desea realizar otra accion? si/no')).toLowerCase
    if (continuar == 'no'){
        confirmar = false
        console.log ('Hasta Luego!')
    }
}

