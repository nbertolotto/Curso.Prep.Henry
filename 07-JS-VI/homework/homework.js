// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // NO TENIA NI IDEA- toUpperCase() 

// 26:01... ES RARO PORQUE EN LA PAGINA ESTA PUESTO DE LA SIGUIENTE FIRMA **
//return nombre[0].toUpperCase() + nombre.slice(1);
//** RETURN nombre.charAt(0).toUpperCase()+nombre.slice(1); */

  return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
//26/01: """return cb();"" BIEN

  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback 
  //junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
// 26/01: return cb(n1,n2); +++ PERFECTO+++
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 
  // 26/01 : var sumaReduce= numeros.reduce(cb(acc, curr)) {
    //return acc + curr},0);
 // } mm no termine de hacerlo bien
 // puse: var sumaReduce= numeros.reduce(cb(arrayNuevo, numeros)) {return arrayNuevo 
 //+ array},0} cb(sumaReduce) ((((CURR SIGNIFICA CURRENT, QUE ES EL ACTUAL))))
 
 
  var suma= 0
  
  for (i=0; i< numeros.length;i++)
  
  suma= suma+ numeros[i];
  
  return cb(suma);

}
// OTRA FORMA SERIA USANDO EL .REDUCE:
//var sumaTotal = numeros.reduce(function(acc, curr) {
  //return acc + curr;
//},0);
//cb(sumaTotal);
//}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:


  //for (var i=0; i< array.length;i++)
//cb(array[i]);  PERFECTO"""

// 26/01: forEach.forEach(function(array,cb)){console.log(array)};
//MAL.. no termino de entender.  porq elemento e indice.. 



 array.forEach(function (elemento){
cb(elemento);

//una forma de simplificarlo seria 
// array.forEach(cb);se da cuando se ejecuta el mismo elemento que esta en el (array,CB)
})  
} // FORMO UTILIZANDO EL .FOREACH, ES IGUALMENTE VALIDA QUE LA FOR.

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:






















  var array2= []
  var suma = 0

  for (var i=0; i< array.length;i++)

  { cb(array[i]) 
   suma = cb(array[i]) 
   array2.push(suma);
  };

   if ( i == array.length) return array2 ;
   
 
}

//var nuevoArray = array.map(function(el) {
  //return cb(el);
//});
//return nuevoArray;
//} ESTA FORMA ES UTILIZANDO EL .MAP



function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
















  var argu= []
  var mento = []
  

  for (var i=0; i< array.length;i++)
  {
    argu.push(array[i])

  if( argu [i][0] == 'a' ) mento.push( argu[i]);
  };

  if( i == array.length) return mento;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
