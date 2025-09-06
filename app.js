let amigos = [];


function agregarAmigo() {
    let amigo = document.querySelector('#amigo');
    let nombreAmigo = amigo.value;

    if(nombreAmigo.trim() === ""){
       alert('Por favor, ingrese un nombre válido.')
    } else{
        amigos.push(nombreAmigo);
        mostrarAmigo();
        
        amigo.value = "";
    }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert('Primero debes agregar amigos.')
    } else{
        let numeroSorteado = Math.floor(Math.random() * amigos.length);
    
        listaAmigos.innerHTML = '';
    
        mostrarAmigoSecreto(amigos[numeroSorteado]);
    }
}

function mostrarAmigo(){
    let listaAmigos = document.querySelector('#listaAmigos');

    //Limpia las listas, tanto la de resultado amigo como la de la lista de amigos
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
    let li = document.createElement('li');

    li.textContent = amigos[i];
    
    listaAmigos.appendChild(li); 
    }   
}

function mostrarAmigoSecreto(nombre){
    let resultado = document.querySelector('#resultado');
    let li = document.createElement('li');

    li.textContent = `Tu amigo secreto es: ${nombre}`;
    
    resultado.appendChild(li);

    //reinicia la lista para poder volver a sortear, teniendo que llenarla nuevamente
    amigos = [];    
}