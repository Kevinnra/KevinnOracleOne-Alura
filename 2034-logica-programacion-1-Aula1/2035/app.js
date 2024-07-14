//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego del Numero Secreto";

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Indica un numero del 1 al 10";



let numero_secreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10


function  generar_numero_secreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignar_texto_elemento("p", "se sortearon todos los numeros posibles")
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generar_numero_secreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }

    }
    
}

// .getElementById identifica el id que pusimos en el elemento "input" en el archivo HTML
function user_input(){
    let numero_de_usuario = parseInt(document.getElementById("valor_de_usuario").value);
    
    if(numero_secreto === numero_de_usuario){
        asignar_texto_elemento("p", `acertaste el numero en ${intentos} ${(intentos==1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(numero_secreto>numero_de_usuario){
            asignar_texto_elemento("p", "el numero secreto es mayor")
        } else{
            asignar_texto_elemento("p", "el numero secreto es menor")
        }
        intentos++;
        limpiar_caja();
    }
    
}
    
function limpiar_caja(){
    document.querySelector("#valor_de_usuario").value = "";
}

function asignar_texto_elemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
function condiciones_iniciales() {
    asignar_texto_elemento("h1","Juego del Numero Secreto!");
    asignar_texto_elemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numero_secreto = generar_numero_secreto();
    intentos = 1;
}

function reiniciar_juego(){
    //limpiar caja
    limpiar_caja();

    // indicar mensaje de inicio de numeros
    // generar numero aleatorio
    //inicializar el numero de intentos
    condiciones_iniciales();
    
    // deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")

}

condiciones_iniciales();