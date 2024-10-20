/*variable (se pueden variar-cambiar sus valores)*/
let nombre1 = 'conce';
/*constantes (no se pueden camboiar su valor)*/
const identificadores = 'nombres';
/*prompt (se va a guardar con un string) asignar a alguna variable*/
let respuesta = prompt('cual es tu nombre?');
/*alert*/ 
alert('debes aceptar terminos y condiciones');
/*confirm (booleano true false) asignar a alguna variable*/
let confirmar = confirm('desea aceptar los terminos y condiciones?')
/*console*/
console.warn('El recurso remoto ha sido precargado pero luego de unos segunos no se ha utilizado') /*visible en la pantalla*/
console.log /*consola*/
/*concatenacion*/
let nombre = prompt('cual es tu nombre?');
alert( 'que lindo nombre tienes, '+ nombre);
let apellido = prompt ('cual es tu apellido?')
alert('es un placer conocerte ' + nombre + " " + apellido)
console.log('bienvenide ' + nombre + ' ' + apellido)
/*funciones matematicas*/
let conce = 100;
let valen = 200;
let valcon = conce + valen;
/*if-else == -igual a la condicion-*/
let comida = 'sopa'
if (comida == 'pizza'){
    console.log('que rico')
}else if(comida == 'carne'){
    console.log('no es tan rico')
}else{
    console.log('lo demas esta bien')
} 
/*if-else <> -mayor, menor que la condicion-*/
let edadminima= 20

if(edadminima >= 20){
    console.log('esta autorizado')
}else if(edadminima < 20){
    console.log('no esta autorizado')
}
/*if-else && -ambas condiciones deben de cumplirse-*/
let altura = 1.80
let nacionalidad = 'japon'
if((altura == 1.80)&&(nacionalidad=='japon')){
    console.log('es apto')
}else{
    console.warn('no esta en condiciones')
}
/*if-else || -una de las condiciones debe de cumplirse-*/
let altura = 1.85
let nacionalidad = 'japon'
if((altura == 1.80)||(nacionalidad=='japon')){
    console.log('es apto')
}else{
    console.warn('no esta en condiciones')
}
/*if-else || y && combinados*/
let altura = 1.80
let nacionalidad = 'japon'
if((altura == 1.80)||(altura == 1.85)&&(nacionalidad=='japon')){
    console.log('es apto')
}else{
    console.warn('no esta en condiciones')
}
/*for ciclos. desde-hasta-actualizacion*/
//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
for(let x=0;x<=10;x++){
    console.log('iteracion n° '+ x)
}
/*ciclo for combinado con if*/
for(let i=1; i<10;i++){
    console.log(i)
    if(i==10){
        console.log('hemos terminado')
    }
} 
/*for ciclos. interrupcion del ciclo*/
for(let x=0;x<=10;x++){
    if(x==8){
        console.warn('conteo ' + x + ' interrumpido por la sentencia break')
        break
    }
    alert(x)
}
/*for ciclos. saltear ciclos*/
for(let x=0;x<=10;x++){
    if(x==8){
        console.warn('conteo ' + x + ' interrumpido por la sentencia continue')
        continue
    }
    alert(x)
}
/*while*/
let i = 1
while(i<2){
    console.log('iteracion n° '+ i)
    i++
}
/*while*/
let continuar = true 
while(continuar){
    let numero = parseInt(prompt('bienvendios! que tablda de multiplicar desea?'));

    for(let i=1; i<=15; i++){
        let resultado = i*numero
        console.log(resultado)

    }
    let confirmacion = prompt('desea hacer otra multiplicacion?')
    if(confirmacion=='no'){
        continuar = false
        console.log('gracias!')
    }
}
/*do-while*/
do{
    numero = prompt('ingresar numero');
    console.log(numero);
}while(parseInt(numero))
/*switch*/
let tiempo = prompt('ingrese un valor')

switch (tiempo){
    case 'rosado':
        alert('pink');
        break;
    case 'azul':
        alert('blue');
        break;
    case 'negro':
        alert('black');
        break;
    case 'verde':
        alert('green');
        break;
}


/*funciones*/

/*funciones declaradas*/
function MiFuncion(){
    alert('hola')
}

MiFuncion()

function retornar(){
    let a = 8;
    let b = 9;
    return a*b;   
}

console.log(retornar());

/*con parametros*/
function parametros(numero,numero2,numero3){
    console.log(numero + ' + ' + numero2 + ' es igual a ' + numero3)
}
parametros(15, 2, 15*2);
//
let resultado = 0
function sumar(numeroa,numerob){
    resultado = numeroa+numerob;
}

function mostrar(mensaje){
    console.log(mensaje)
}

sumar(10,15);
mostrar (resultado);

/*funciones explicitas*/
 const expresadas = function(){
    console.log('funcion expresada');
 }
 expresadas();

 /*scope*/
//
/*esto son variables globales porque estan fuera de un bloque de codigo*/
let auto = 'fiat';
var auto2 = 'honda';
const auto3 = 'toyota';

function pasear(){
    let auto2 = 'volskvagen'/*esto es una variable local, esta dentro de un bloque de codigo*/
    console.log('hoy salgo a pasear en '+ auto2 );
    
}
pasear()
//
function lavar(){
    var unauto = 'gol'
    if(true){
        let otroauto = 'golf'
    }
    console.log ('hoy salgo a pasear en mi '+ unauto)
    console.log('hoy tengo que lavar mi '+ otroauto); /*esta variable, al estar fuera del bloque de codigo donde se declaró, no funciona. Es una variable local y solo funciona dento de su bloque de codigo*/
    
}
lavar()
//
function lavar(){
    var unauto = 'gol'
    if(true){
        var otroauto = 'golf' /*si la variable esta declarada con VAR, esta si funcionara fuera de su bloque de codigo*/
    }
    console.log ('hoy salgo a pasear en mi '+ unauto)
    console.log('hoy tengo que lavar mi '+ otroauto);
}
lavar()
//
/*los bloques de codigo toman variables de sus bloques contenedores o de las variables globales*/

function lavar(){
    let unauto = 'gol'
    console.log('tengo que lavar mi '+unauto);
    
    function pasear(){
        console.log('tengo que salir a pasear en mi '+unauto);/*al ser hija de la funcion anterior, toma la variable de su padre*/
    }
    pasear()
}
lavar()

/*funciones anonimas y funciones en flecha*/
const multiplicacion = function(num1, num2) {
    console.log(num1*num2)
    
}
multiplicacion(3,5)
//
const multiplicacion = (num1, num2) => {
    console.log(num1*num2)
    
}
multiplicacion(3,5)
//
const multiplicacion = num1 => {
    console.log(num1*3)
    
}
multiplicacion(3)
//
const multiplicacion = num1 => console.log(num1*8)
multiplicacion(3)

/*arrays (sirve para almacenar valores en forma de lista)*/

/**/const productos = ['harina', 'manteca', 'azucar'];
console.log (productos [1]) /*los arrays comienzan a contar desde el cero*/

/**/const productos = ['harina', 'manteca', 'azucar'];
console.table (productos) /*aparece en forma de tabla*/

/**/const productos = ['harina', 'manteca', 'azucar'];

for (i=0; i < 5; i++){
    console.log (productos[i]) /*recorre la list*/
}
/**/ const productos = ['harina', 'manteca', 'azucar'];

/**/for (i=0; i < productos.length; i++){
    console.log (productos[i]) /*con "length" le decimos al ciclo FOR que se base en la cantidad de componentes que tenga el array para determinar su fin*/
}
//NOTA: debemos garantizar que rodos los elementos del array sean del mismo tipo (string, number o boolean)

/**/const frutas = ['manzana', 'banana', 'naranja']
frutas.push('uvas') /*push sirve para agregar items al final del array*/

console.log(frutas)

/**/ const frutas = ['manzana', 'banana', 'naranja']
frutas.unshift('uvas') /*unshift permite agregar elementos al comienzo del array*/

console.log(frutas)

/**/ const frutas = ['manzana', 'banana', 'naranja']
frutas.shift() /*con shift eliminamos el primer item del array*/

console.log(frutas)

/**/ const frutas = ['manzana', 'banana', 'naranja']
frutas.pop() /*pop elimina el ultimo elemento del array*/

console.log(frutas)

/**/const nombres = ['juan', 'martin', 'santiago', 'luis']

console.log (nombres.join ('-')) /*join genera un string con los elementos del array separados con el valor que le pasemos por parametro*/

/**/const nombres = ['juan', 'martin', 'santiago', 'luis']

console.log (nombres.indexOf ('martin')) /*indexof permite obtener el indice de un elemento de un array*/

/**/ const nombres = ['juan', 'martin', 'santiago', 'luis']

console.log (nombres.includes ()) /*includes nos permite averiguar si el elemento indicado por el parametro existe o no dentro de un array, retornando un valor booleano*/

/**/ const nombres = ['juan', 'martin', 'santiago', 'luis']

console.log (nombres.sort ()) /*sort ordena los elementos de manera alfabetica*/

/**/const nombres = ['juan', 'martin', 'santiago', 'luis']

console.log (nombres.sort().reverse())/*reverse sirve para ordenarlos de manera reversa*/

//OBJETO LITERAL: Nos permite almacenar datos de distintos valores en un formato textual
const alejandra = [
    {id : 1, nombre: 'alejandra'},
    {id: 2, apellido: 'farias'},
    {id: 3, edad: 50},
    {id: 4, casada: false},
]

for (const mama of alejandra){
    console.log(mama)
}
//
const alejandra = [
    {id : 1, nombre: 'alejandra'},
    {id: 2, apellido: 'farias'},
    {id: 3, edad: 50},
    {id: 4, casada: false},
]

for (const mama of alejandra){
    console.table(mama)
}
continuar = prompt('¿Desea realizar otra acción? si/no').toLowerCase() === 'si';
    if (!continuar) {
        console.log('¡Hasta Luego!');
    }