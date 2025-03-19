let arrayAmigos = []; //declara el array que contendra los nombres 

function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();
 
  // Verifica si el valor está vacío '' eso significa null
  if (nombre == ""){
    alert("Por favor, inserte un nombre.");
    return; // Detiene la ejecución de la función si el valor es inválido y muestra el mensaje
   } 
  
   if (arrayAmigos.includes(nombre)) {
    alert("Por favor, para una mejor jugabilidad del juego, no repita nombres.");
    
  }
  arrayAmigos.push(nombre); //agrega el elemento nuevo al final de la lista
  inputNombre.value = ""; // Limpia la caja para que el usuario pueda poner un nuevo nombre
  listaPersona();
}

//contenido de la lista de nombres
function listaPersona() {
  let elementosLista = document.getElementById("listaAmigos");
  elementosLista.innerHTML = ""; // borra

  for (let i = 0; i < arrayAmigos.length; i++) { //.LENGTH ES  LA CANTIDAD DE ELEMENTOS 
    //contador i
    elementosLista.innerHTML += "<li>" + arrayAmigos[i] + "</li>"; // Agrega cada nombre a la lista
  }
}

//sorteo de amigos
function sortearAmigo() {
  if (arrayAmigos.length <= 1) {
    alert("Por favor debe ingresar más amigos.");
    return;
  }

  let numeroRandom = Math.floor(Math.random() * arrayAmigos.length); //numero de posicion que se le asigna al nombre
  let resultado = document.getElementById('resultado');

  resultado.innerHTML = arrayAmigos[numeroRandom];
}
