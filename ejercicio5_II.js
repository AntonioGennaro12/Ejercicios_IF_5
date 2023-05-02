/* Psaseo de Mascotas "los devs"
Parte #1: Perros o gatos (no simultáneos)
hasta 3 por cliente
Preguntar e informar
Parte #2: Se agrega pedir el tiempo 
de paseo qu epuede ser de 30 a 60 minutos.
Parte #3 se le agrega el precio 
y la posibilida de pago vía la página feriaCoin. 
Si paga por feriaCoin se informa el monto total a pagar.
Parte #4 se pide agregar el Costo 
del tiempo del paseo y paseo extendido también. 
El tiempo de paseo es 45 minutos o más tiene un recargo del 50% 
Parte 5 se pide poder pasear hasta 2 perros y 2 gatos simultáneo
El costo de pasear gatos es 70% más caro que pasear perros.
*/
const canDePerros   = document.querySelector ("#lbl-perros");
const canDeGatos    = document.querySelector ("#lbl-gatos");
const duracPaseo    = document.querySelector ("#lbl-tiempo");
const pagaFcoin     = document.querySelector ("#lbl-fcoin");
const miSalida1     = document.querySelector ("#mi-salida1")
const miSalida2     = document.querySelector ("#mi-salida2")
const miSalida3     = document.querySelector ("#mi-salida3")

const CANT_MAX_MASCOTAS   =   4;
const CANT_MAX_PERROS     =   2;
const CANT_MAX_GATOS      =   2;
const PASEO_MINIMO_MIN    =  30;
const PASEO_MAXIMO_MIN    =  60;
const PASEO_EXTENDIDO     =  45;
const PRECIO_PASEO_PERRO  = 400;
const PRECIO_PASEO_GATO   = 680;
const FACTOR_PASEO_EXTEND = 1.5;
const ELIGE_NO            = "N";

function verificaDatos() {

    let cantPerros      = canDePerros.value;
    let cantGatos       = canDeGatos.value;
    let tiempoPaseo     = duracPaseo.value;
    let pagoFeriaCoin   = pagaFcoin.value;

    /* Mejora para prevenir errores por no ingresar un número o presionar Enter*/
    /* sin embargo todavía puede ser mejorado*/
    if (cantPerros.trim()   != "") {cantPerros   = parseInt(cantPerros)}   else {cantPerros = 0};
    if (cantGatos.trim()    != "") {cantGatos    = parseInt(cantGatos)}    else {cantGatos = 0};
    if (tiempoPaseo.trim()  != "") {tiempoPaseo  = parseInt(tiempoPaseo)}  else {tiempoPaseo = 0};
    pagoFeriaCoin = pagoFeriaCoin.toUpperCase();
    
    miSalida3.textContent = canDePerros +"/"+canDeGatos+"/"+tiempoPaseo+"/"+pagoFeriaCoin;
    
    if((tiempoPaseo >= PASEO_MINIMO_MIN) && (tiempoPaseo <= PASEO_MAXIMO_MIN)) {
        if ((cantPerros + cantGatos) == 0) {
            miSalida1.textContent = "Paseamos Perros y Gatos hasta " +CANT_MAX_MASCOTAS+
                    " de ellos por cliente y hasta " +PASEO_MAXIMO_MIN+ " minutos."; 
            miSalida2.textContent = "Muchas gracias por su consulta!";
            miSalida3.textContent = "";        
            }
            else if (((cantPerros + cantGatos) <= CANT_MAX_MASCOTAS) && 
                    ((cantPerros <= CANT_MAX_PERROS)&&(cantGatos<=CANT_MAX_GATOS))) {
            miSalida1.textContent = "Con gusto pasearemos sus Mascotas: " + (cantPerros > 0 ? cantPerros + " Perro/s " : "") + 
                    (cantGatos > 0 ? cantGatos + " Gato/s " : "") + ", por un tiempo de "+tiempoPaseo+"minutos. ";           
            miSalida2.textContent = (tiempoPaseo < PASEO_EXTENDIDO ? "El precio total del paseo es: $ " + (((cantPerros*PRECIO_PASEO_PERRO)+(cantGatos*PRECIO_PASEO_GATO))*1)+".-" :
                "Por ser de 45 minutos o más, el precio total del paseo es: $ " + (((cantPerros*PRECIO_PASEO_PERRO)+(cantGatos*PRECIO_PASEO_GATO))*FACTOR_PASEO_EXTEND)+".-");        
            miSalida3.textContent = "";
            if (pagoFeriaCoin != ELIGE_NO) {miSalida3.textContent = "El pago sera realizado mediante feriaCoin. Muchas gracias por su compra."}
            else {miSalida3.textContent = "Muchas gracias por su compra!!";}
            }
        else { 
            miSalida1.textContent = "Lo sentimos sólo podemos pasear hasta "+CANT_MAX_MASCOTAS+".- Mascotas por cliente.";
            miSalida2.textContent = "Hasta " +CANT_MAX_PERROS+".- perros y hasta "+CANT_MAX_GATOS+ ".- gatos.";
            miSalida3.textContent = "";
        } 
    }
    else {
        miSalida1.textContent = "Lo sentimos sólo hacemos paseos por un mínimo de "+PASEO_MINIMO_MIN+
            " minutos y un máximo de "+PASEO_MAXIMO_MIN+" minutos. Si el paseo es de 45 minutos o más, tendrá un cargo adicional.";
        miSalida2.textContent = "";
        miSalida3.textContent = "";
    }; 
}