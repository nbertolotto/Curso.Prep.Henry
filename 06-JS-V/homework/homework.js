// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 
  //'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:


  //26/01:
//function Usuario (opciones) { // recurdar que el Mayus da la nota a una clase o prototypo.
  //this.usuario = opciones.usuario;
  //this.nombre=opciones.nombre;
  //this.email=opciones.email;
  //this.password=opciones.password;
//}
//function saludar (){ return this.nombre;}// NOOOO
  //Usuario.prototype.saludar = function(){
    //return'Hola, mi nombre es ' + this.nombre; 
  //}
  //return Usuario;

//}
 function Usuario(opciones){
  this.usuario = opciones.usuario;
  this.nombre = opciones.nombre;
  this.email = opciones.email;
  this.password = opciones.password;
}
Usuario.prototype.saludar = function() {  
  return 'Hola, mi nombre es ' + this.nombre;
};
return Usuario;
}

//QUISE HACERLO CON ESTE MEDIO
//class Usuario {
  //constructor(opciones){
    //this.usuario=opciones.usuario;
    //this.nombre=opciones.nombre;
    //this.email=opciones.email;
    //this.password=opciones.password;
  //}

  //Saludar (){
   // console.log('Hola, mi nombre es ' + this.nombre);
  //};
//return Usuario;
//}  (NO TERMINA DE FUNCIONAR BIENG)



function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código: 
  
    //26/01: 
  //Constructor.prototype.saludar = function(){
    //return 'Hello World!';
    //};
  
  Constructor.prototype.saludar= function () {
    return 'Hello World!'};
} 

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres,
  // pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"

//26/01: 
// String.prototye.reverse= function(){
//for ( var i = this.length - 1; i==0 ;i--)  /// casi, me falto el -1 y el this.
// reverso= reverso + this.charAt(i);   // habia hecho reverso[], reverso.push(this[i])
//}; return reverso;

  String.prototype.reverse = function(){
    var stringInvertida = '';
    for( var i = this.length - 1; i >= 0; i--){

    stringInvertida = stringInvertida + this.charAt(i);
  }
  return stringInvertida;
};
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }


















  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
     this.nombre= nombre;
     this.apellido= apellido;
     this.edad= edad;
     this.domicilio= domicilio;
     this.detalle = function(){ // no habia puesto esto, sino que habia puesto detalle(){ 'nombre' + this.nombre} y return Persona
     console.log(
         'Nombre:'+ this.nombre ,
          'Apellido:' + this.apellido,
          'Edad:' + this.edad,
          'Domicilio:'+ this.domicilio ) };
          
} 
    } 


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  // LA HICE CASI BIEN, ERROR PUESTO INGRESE LOS DATOS DIRECTAMENTE... JUAN, PEREZ, 22, SAAVEDRA












  var juan = new Persona(nombre,apellido,edad,dir);
return juan;

}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //LA HICE BIENN














  Persona.prototype.datos= function(){
  return this.nombre+ ', '+ this.edad  + ' años';
}

}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
