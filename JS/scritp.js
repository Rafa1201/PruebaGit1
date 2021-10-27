
// function calculadora() {

//     let num1 = Number(prompt("ingrese un numero"));
//     let num2 = parseInt(prompt("Otro numero:"));

//     let resul = num1 + num2;
    
//     return (resul);
// }

// // calculadora();
// console.log(calculadora());

// function listadofrutas(fruta1, fruta2, ...resto) {
//     console.log(`Fruta 1, ${fruta1}`);
//     console.log(`Fruta 2, ${fruta2}`);
//     console.log(resto);
// }


// listadofrutas("Mango","Pera", "manzana", "piña");

// function sumar(num1, num2, sumaymuestra, suemapordos) {
//     let suma = num1 + num2;
//     sumaymuestra(suma);
//     suemapordos(suma);

//     return suma;
    
// }

// sumar(4,3, function (dato) { //Funcion anonima y de Callback
//     console.log("la suma es: ", dato);
// }, 
// function (dato) {
//     console.log("la suma de dos es", (dato*2));
// });


// function holamundo(texto) {
   
//     console.log(texto);

// }

// var texto = "soy un texto";

// holamundo(texto);

//Transformación de textos de cadenas
var numero = 444;
var texto1 = "Soy un texto";
var texto2 = "soy otro texto";

// var dato = numero.toString(); //Se convierte el numero en un string
// console.log(dato); //typeof = es para saber que tipo de texto es... string o numero
// dato = texto1.toUpperCase(); //Convierte el texto a Mayuscula
// console.log(dato);
// dato = texto1.toLocaleLowerCase(); //Convierte el texto a Minuscula
// console.log(dato);

// //Calacular la longitud de un texto

// let nombre = "saber cuanto es la longitud de este texto"
// let nom = "solo";

// console.log(nombre.length);//Propiedad Length para saber la cantidad de letras o elementos dentro de un array
// console.log(nom.length);

// //Concatenar - unir texto (String)

// var textototal = nombre.concat(" "+ nom); //concat, sirve para concatenar
// console.log(textototal);


//BUSQUEDA DE TEXTO

var busqueda = texto1.replace("un", "hola"); //el metodo indexof o search buscar la ultima conincidencia de la palabra
console.log(busqueda);

//METODOS DE BUSQUEDA
/*
.indexof -> Busqueda 
.search ->
.march ->
.sTartWith -> te dice false o true, si encuentra la palabra del inicio
.endWith -> te dice false o true, si encuentra la palabra al final
.includes -> te muestra si la palabra que escribiste exite y muestra un false o true (palabra completa)
*/

//Funcion para remplazar un texto

// .remplace
// .slice -> permite separar un string del caracter que escojas
// .split -> perminte meter los caracteres en un array
// .trim -> quita los espacios sobrantes por delante y por detras del string





