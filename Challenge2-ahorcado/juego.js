/*Funcion necesaria para poder reemplazar*/
String.prototype.replaceAt = function (index, character) { return this.substring(0, index) + character + this.substring(index + character.length); }

/*Array con palabras*/
const palabras = ['ARBOL', 'GATO', 'LORO', 'SOL', 'POLICIA', 'HOGAR', 'ZOMBIE', 'LIBRO', 'FARO', 'MURCIELAGO', 'MIRAR', 'LEON','MINECRAFT', 'WERNER'];

/*Selecciona palabra random del Array*/
const palabra = palabras[Math.floor(Math.random() * palabras.length)];
console.log(palabra);

/*Selecciona letra random dentro de la palabra random seleccionada*/
const aver = [palabra[Math.floor(Math.random() * palabra.length)]];
console.log(aver)

/*Reemplazo palabra random por guiones*/
let palabraConGuiones = palabra.replace(/./g, "_ ");

/*Reemplazo ion por la letra de ayuda*/
for (let i = 0; i < palabra.length; i++) {
    if (aver == palabra[i]) {
        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, aver);
        console.log(palabraConGuiones)
    }
}



/*Muestro los guiones y letras acertadas*/
document.querySelector('#mostrarPalabra').innerHTML = palabraConGuiones;

/*Teclado en Pantalla*/
let botones = Array.from(document.getElementById('teclado').children);
let letrasElegidas = [];
let numeroMaximoDeIntentos = 8;
let numeroDeAciertos = 0;
let numeroDeErrores = 0;
let numeroDeintentos = 8;
let palabraConGuioness = [];
let ganar = false;
let acerto = false;
let error = false;


let abc = "qwertyuiopasdfghjklñzxcvbnm"

let imgl = document.getElementById("imgl");
let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");
let img6 = document.getElementById("img6");
let img7 = document.getElementById("img7");


botones.forEach(button => {

    button.addEventListener('click', ({ target }) => {

        /*Desactiva la tecla seleccionada*/
        button.disabled = true;

        /*Guarda la tecla seleccionada en un array de letras ingresadas*/
        let letra = target.value;
        letrasElegidas.push(letra)

        /*Muestra las letras ingresadas*/
        let letraSelec = document.getElementById("letra");
        letraSelec.innerHTML = letrasElegidas;

        /*Letras acertadas remplazan los guiones*/
        for (const i in palabra) {
            if (letra == palabra[i]) {
                error = false;
                acerto = true;
                palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
                numeroDeAciertos++;
                numeroDeErrores -= 1;
                numeroDeintentos++;

            }
        }
        contadorDeErrores()
        ganador()
        perdedor()
        
        /*Reemplazo guiones por la letra seleccionada*/
        document.querySelector('#mostrarPalabra').innerHTML = palabraConGuiones;
    })


})

/*Funcion para GAME OVER*/
function perdedor() {
    if (numeroDeErrores == numeroMaximoDeIntentos) {
        console.log("perdiste")
    }
    return true;

}
/*Funcion para WINNER*/
function ganador() {
    if (numeroDeAciertos == palabra.length) {
        console.log("ganaste")
    }
}

/*Funcion para contar errores y mostrar mensaje en pantalla*/
function contadorDeErrores() {
    if (error = true) {
        numeroDeErrores += 1;
        console.log("error numero " + numeroDeErrores)
        numeroDeintentos--;
        alert = document.getElementById("alerta");
        alert.innerHTML = "TE QUEDAN " + numeroDeintentos + " INTENTOS";
        console.log("te quedan " + numeroDeintentos + "intentos")

    }
    /*CAMBIO DE IMAGEN*/
    if (numeroDeErrores == 1) {
        imgl.style.display = "none";
        img0.style.display = "block";
        console.log("dibujo1");
    }
    if (numeroDeErrores == 2) {
        img0.style.display = "none";
        img2.style.display = "block";
        console.log("dibujo2");
    }
    if (numeroDeErrores == 3) {
        img0.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "block"
        console.log("dibujo3");
    }
    if (numeroDeErrores == 4) {
        img0.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "block";
        console.log("dibujo4");
    }
    if (numeroDeErrores == 5) {
        img0.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "block";
        console.log("dibujo4");
    }
    if (numeroDeErrores == 6) {
        img0.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "block";

        console.log("dibujo4");
    }
    if (numeroDeErrores == 7) {
        img0.style.display = "none";
        img2.style.display = "none";
        img3.style.display = "none";
        img4.style.display = "none";
        img5.style.display = "none";
        img6.style.display = "none";
        img7.style.display = "block"
        console.log("dibujo4");
    }

}

