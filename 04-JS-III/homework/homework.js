// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
//var array = []
//for ( var i= 0; i < array.length ; array.push) {console.log ( array[0])}

return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array [array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // POR  PROFE = FOR ( VAR I = 0; I< ARRAY,LENGTH; I ++) {ARRAY [I] = ARRAY [I]+1;} RETURN ARRAY  
  // TAMBIEN CON UN MAP
  // VAR ARRAY 1=  ARRAY.MAP((ELEMENTO) => ELEMENTO +1) RETURN ARRAY1;
var b = []
  for ( var i= 0; i < array.length ; i++) {  b.push ( array[i]+1)} return b;

}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 // NuevoArray = [];
  //for ( var i= 0; i < elemento.length ; i++) {array.push (elemento); }
  //console.log(NuevoArray);
  array.push(elemento);
  return array;
      }


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); 
  return array;
    
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // return palabras.join(' ');
  //var array = [palabras]
  
  //return palabras.join ( ' ' );
  frases = palabras.join( ' ') ;
  return frases ;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  // OTRA FORMA : ARRAY.INCLUDES(ELEMENTO)
  // TAMBIEN SE PUEDE USAR UN FOR, SI ALGUNO DE LOS ELEMENTOS ES IGUAL RETORNA TRUE SINO FALSE

  // for ( i = 0 ; i < array.lenght; i ++)  
  //if (array[i] === elemento ) return true;} else return false;}

  if (array.includes(elemento)) return true; else return false;
 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código: SE PUEDE USAR DE DOS FORMAS
  // sino usar metodo REDUCE === es :   return numeros.reduce();
  var suma = 0;
  for ( i = 0; i < numeros.length; i ++) {suma = suma + numeros[i];
  }
 return suma; 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
 var suma = 0; // agregado por prof ( me habia faltado aagrerar una variable de acumilacion)
 var promedio = 0; // agregado por prof
   for (var i = 0; i < resultadosTest.length; i++)  { suma = suma + resultadosTest[i]}
     //resultadosTest[i] = resultadosTest[i] / resultadosTest[i].length;}
     promedio = suma / resultadosTest.length;
 return promedio;


}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeraso = 0;
  for ( i= 0 ; i < numeros.length; i++) {
  if (numeros[i] > numeraso){
    numeraso = numeros[i];
  } 
} 
  return numeraso;
}
// otra forma seria return Math.max (...numeros);

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0]; // cero porque solo tiene un elemento, retorna el unico, es decir 0

  let resultado = 1
for ( let i = 0; i < arguments.length; i++) { 
 // resultado = resultado * arguments[i];
  // como se repite el resultado = resultado , se puede poner asi 
   resultado *= arguments[i];
} return resultado;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // tres forma de nombrar variables: var, let, const( permite no reasignar nuevo valor)
  var resultado = 0;
  for ( var i = 0; i < arreglo.length; i++){ 
    
if ( arreglo[i] > 18) { 
resultado += 1; 
//resultado++;
  }
}
return resultado; 
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  var Sem = numeroDeDia
        if ( Sem === 2 || Sem === 3 || Sem  === 4 || Sem  === 5 || Sem  === 6 ) { 
    return "Es dia Laboral";}
    else if ( Sem === 1|| Sem  === 7) { 
      return "Es fin de semana";}
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  //var acu = 0
  //for ( var i = 0; i < n.length; i++){ 
  //if (n[i][0] == 9) return true ; else { acu += n[i];}
  
  //return false;
    //} 
    // para obtener el primer elemento de un string se puede usar toString para trasnformar el valor en un numero
    //, donde se pasa la funcion charAt ubica a el lugar del  valor, y el tostring lo convienrte en string.
    // el https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/toString

    var nString = n.toString();
    if ( nString.charAt(0) === "9") {return true ;} else {return false}
}

//var a = [(n[0])]
//if (a[0]  === 9) return true;
//}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
