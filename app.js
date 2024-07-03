let numeroSecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }
    

function validarIntento() {
        let numeroUser = parseInt(document.getElementById('valorUser').value);
        
        console.log(intentos);
        if (numeroUser === numeroSecreto) {// === Es para igual en valor y tipo de dato.
                asignarTextoElemento('p',`¡Acertaste! Has encontrado el número secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                    //Usuario no acertó.
                if (numeroUser > numeroSecreto) {
                asignarTextoElemento('p','El número secreto es menor.');
                } else {
                asignarTextoElemento('p','El número secreto es mayor.');
                }
                intentos++;
                limpiarCaja();
            }
                
        return;
    }

    function limpiarCaja() {
        document.getElementById('valorUser').value = '';
        
            }

    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
                
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        // si ya sorteamos todos los n+umero:
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p','Has llegado al máximo número de intentos');
        } else {
            //Si el número generado está en la lista:
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                    return generarNumeroSecreto();
                } else {
                    listaNumerosSorteados.push(numeroGenerado);
                    return numeroGenerado;
                }
                }
        }

    function condicionesIniciales() {
        asignarTextoElemento('h1','Juego del número secreto.');
        asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}.`);
        numeroSecreto = generarNumeroSecreto();
        console.log(numeroSecreto);
        intentos = 1;
    }

    function reiniciarJuego() {
        //Limpiar caja
        limpiarCaja();
        //Indicar mensaje del número.
        condicionesIniciales();
        //Generar el número aleatorio.
        //Reiniciar el contador de intentos
        //Deshabilitar el botón "Nuevo Juego".
        document.getElementById('reiniciar').setAttribute('disabled','true');
    }

    condicionesIniciales();