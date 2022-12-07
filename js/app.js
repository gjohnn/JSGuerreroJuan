/*Variable, no puede comenzar con signos excepto _ ni números
var nombre;
var ape;
var nombre_C;
let apellido;
nombre = "Juan";
ape = "Guerrero";
nombre_C = nombre + " " +ape;
//Constante
const IVA = 1.21;
var preciofideo;
preciofideo = 100;
const total = preciofideo * IVA;
const final = nombre_C +" debe pagar $"+ total;
console.log(nombre)
console.log(ape)
console.log(nombre_C)
console.log(final)

//let ingnom = prompt("Ingresa tu nombre");
//let ingape = prompt("Ingresa tu apeliido");
//console.log(ingnom);
//console.log(ingape);
num1 = parseFloat(prompt("Ingresa el primer número"));
num2 = parseFloat(prompt("Ingresa el segundo número"));
resul= num1+num2
console.log(resul)*/

/*let colorpass = prompt("Ingresar color correspondiente")

if ((colorpass == "Rojo")||(colorpass == "120")){
    console.log("Bienvenido!")
}else{
    console.log("COLOR EQUIVOCADO")}*/

//Descuento precios
/*let precio = parseFloat(prompt("Ingresar precio"));
if((precio >= 300)&&(precio<=799)){
    console.log("Tiene un 10% de descuento: $", precio*0.90);
}else if(precio>=800){
    console.log("Tiene un 15% de descuento: $", precio*0.85);
}else if((precio<300)&&(precio>=0)  ){
    console.log("No tiene descuento");
}else{
    console.log("Ingrese el precio del producto")}*/
/*
let nom = prompt("Ingrese usuario")
let pass= prompt("Ingrese su contraseña")
let allgood= nom!="" && pass==123
let allbad = pass!=123 || nom==""

if(allgood){
    console.log("Bienvenido, ", nom)
}else if (allbad){
    console.log("Datos incorrectos")
}*/

/*let num =parseInt(prompt("Ingrese número"))
let limite =parseInt(prompt("Hasta..."))

for(let i=0;i<=limite;i++){
    console.log(num + " * " +i+" = " + num*i);
}*/

/*let lol = "nashe"
for(i=2;i>=0;i--){
    let ing = prompt("Adivina la palabra");
    if (ing==lol){
        console.log("adivinaste!!!!!!!");
        break;
    }else{
        console.log("Fallaste webooom");
    }
}*/

/*let ing=prompt("ya llegamos?")

while(ing !="si"){
    ing=prompt("y ahora?")
}
alert("a verr, sii")
let nomalum = prompt("Ingrese nombre del alumno")
let nota = parseInt(prompt("Ingrese nota del alumno"))
let cont=0
let nototal=0

while(nota!=0){
    nototal=nototal+nota
    cont=cont+1
    nota = parseInt(prompt("Ingrese otra nota del alumno. Si desea salir, ingrese 0"))
}
console.log("El alumno " + nomalum + " tiene un promedio de "+ nototal/cont)

*/
let nomprod = prompt("Ingrese el nombre del producto")
while (nomprod==""){
    nomprod = parseInt(prompt("Ingrese el precio correcto del producto"));
}
let precio = parseInt(prompt("Ingrese el precio del producto"));
let preciof= 0;
while (precio==0){
     precio = parseInt(prompt("Ingrese el precio correcto del producto"));
}
let cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
while((cuota<0) ||(cuota>12)|| (cuota==1) || (cuota==2) || (cuota>=4 && cuota<=5) || (cuota>=7 && cuota<=11)){
    cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
}

if (cuota == 0){
        preciof = precio*0.95
        console.log("El producto ",nomprod," tiene un 5% de descuento: ",preciof);
}else if (cuota == 3){    
            preciof = precio*1.15
            console.log("El producto ",nomprod," tiene un 15% de interés: $",preciof);
}else if (cuota == 6){
            preciof = precio*1.35
            console.log("El producto ",nomprod," tiene un 15% de interés: $",preciof);
}else if (cuota == 6){
            preciof = precio*1.35
            console.log("El producto ",nomprod," tiene un 35% de interés: $",preciof);
}else if (cuota == 12){
            preciof = precio*1.70
            console.log("El producto ",nomprod," tiene un 70% de interés: $",preciof);
}