// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Holaaa';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático: *****NO LA ENTIENDO *******
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) { return str;
  // "Return" la string provista: str
  // Tu código: 
  
}

function suma(x, y) { return x + y;
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código: 
  
}

function resta(x, y) {  return x - y;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

function multiplica(x, y) { return x * y;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

function divide(x, y) { return x / y;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

function sonIguales(x, y) { if (x===y) {return true;} else  {return false;}
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2)  {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.lenght === str2.lenght){return true;} else {return false;} ;
}

function menosQueNoventa(num) { if (num < 90) { return true;} else {return false;}
  
  
}

function mayorQueCincuenta(num) { if (num > 50) {return true;} else {return false;} 
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function obtenerResto(x, y) { return x % y;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

function esPar(num) { if (num % 2 === 0) {return true;} else {return false;}
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {if (num % 3===1) {return true;} else {return false;}
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) { return Math.pow (num,2);
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código: ESTA LA HABIA PUESTO RETURN NUM **
  
}

function elevarAlCubo(num) {
var elevarAlCubo = num * num * num; return elevarAlCubo
  // Devuelve el valor de "num" elevado al cubo
  // Tu código: ESTA LA HABIA PUESTO RETURNO NUM*** { return num * num * num;
  
}

function elevar(num, exponent) { 
  var elevar = Math.pow (num,exponent)
  return elevar;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:(Exponent = 2); return Num ** exponent;

}

function redondearNumero(num) { 
  var redondearNumero = math.round(num);
  return redondearNumero;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código: 
  
}

function redondearHaciaArriba(num) { 
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código: return math.round.ceil(num);
  return Math.ceil(num);
}

function numeroRandom() { 
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
 return Math.random ( 0,1);
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> ""
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0) {
     return false;
    }
  else if (numero > 0) {return 'Es positivo';} else { return 'Es negativo';} 
}

function agregarSimboloExclamacion(str) { return str + "!"
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinados= nombre +  apellido;
  return nombre + ' ' + apellido ;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:{ return "Hola" + nombre + "!" };console.log('Hola' + '' + nombre)
  console.log('"Hola '+''+ nombre +'!"');
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código: NI IDEA NO LA HABIA ENTENDIDO.
return alto * ancho;  
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí o return{ base * altura};console.log( base * altura);
  return (base * altura)/2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí  var cantidad = 1;  euro = cantidad * 1.2; {return cantidad * euro}
 return euro * 1.2;
}
 

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí NO TENIA IDEA DEL || hubiera hecho cinco if.
  if (letra.lenght > 1){
    return "Dato incorrecto"} 
    if (letra === 'a'|| letra === 'e'|| letra === 'i'|| letra === 'o'|| letra ==='u') {return "Es vocal"} 
    else { return "Dato incorrecto"}


}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
