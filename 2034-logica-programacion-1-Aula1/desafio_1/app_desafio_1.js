let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

function alert_f(){
    alert("El botón fue clicado");
}

function alert_amo(){
    alert("Yo amo JS");
}

function ciudad(){
    nombre_ciudad = prompt("Escribe el nombre de una ciudad");
    alert(`Estuve en ${nombre_ciudad} y me acordé de ti`);
}

function suma(){
    let [num1, num2] = prompt("Escribe dos numeros").split(" ");
    num1 = Number(num1);
    num2 = Number(num2);
    alert(`La suma entre ${num1} y ${num2} es: ${num1 + num2}`);
}