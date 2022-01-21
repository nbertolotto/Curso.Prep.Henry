// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // NO TENIA NI IDEA- toUpperCase() 

  return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma= 0
  for (i=0; i< numeros.length;i++)
  suma= suma+ numeros[i];
  return cb(suma);

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var suma= 0
  for (var i=0; i< array.length;i++)
cb(array[i]);
 // if (i[i]== 0) cb(array[0]);
  //if (i[i]== 1) cb(array[1]);
  //if (i[i]== 2) cb(array[2]);
  //if (i[i]== 3) cb(array[3]);
  //if (i[i]== 4) cb(array[4]);
  //if (i[i]== 5) cb(array[5]);
  //if (i[i]== 6) cb(array[6]);
  //if (i[i]== 7) cb(array[7]);
  //if (i[i]== 8) cb(array[8]);
  //if (i[i]== 9) cb(array[9]);
  //if (i[i]== 10) cb(array[10]);
  //if (i[i]== 11) cb(array[11]);
}

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
