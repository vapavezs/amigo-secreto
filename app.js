//Registrar lista de amigos
let listaDeAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value;

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

//Guardar nombre ingresado
    listaDeAmigos.push(nombre);
    mostrarLista();

//Limpiar input para ingresar otro nombre
    input.value = '';
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement('li'); //Crear un <li>
        li.textContent = listaDeAmigos[i]; //Asignar el nombre
        lista.appendChild(li); //Agregar al <ul>
    }
}

function sortearAmigo(){
    if (listaDeAmigos.length < 2){
        alert('Debes agregar al menos 2 amigos para sortear!');
    }
   
    let listaSorteo = [...listaDeAmigos];

//Mezclar lista
listaSorteo.sort(() => Math.random() - 0.5);

//Revisar que nadie se saca asi mismo
for(let i = 0; i < listaDeAmigos.length; i++){
    if (listaDeAmigos[i] === listaSorteo[i]){
        //Si alguien se saca asi mismo, se repite el sorteo
        return sortearAmigo();
    }
    }
    mostrarResultados(listaSorteo);
}

function mostrarResultados(listaSorteada){
    let ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ''; //Limpiar resultados anteriores

    for(let i = 0; i < listaDeAmigos.length; i++){
        let li = document.createElement('li');
        li.textContent = `${listaDeAmigos[i]} → ${listaSorteada[i]}`;
        ulResultado.appendChild(li);
    }
}

//Para comenzar un nuevo sorteo
function reiniciarJuego() {
    listaDeAmigos = [];
    document.getElementById("listaAmigos").innerHTML = '';
    document.getElementById("resultado").innerHTML = '';
    document.getElementById("amigo").value = '';
}

