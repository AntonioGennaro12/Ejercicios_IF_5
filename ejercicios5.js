/* Psaseo de Mascotas "los devs"
Perros o gatos (no simultáneos)
hasta 3 por cliente
Preguntar e informar
*/

const CANT_MAX_MASCOTAS   =   3;

let cantPerros  = prompt("Cuantos Perros desea que paseemos?");
let cantGatos   = prompt("Cuantos Gatos desea que paseemos?");

/* Mejora para prevenir errores por no ingresar un número o presinar Enter*/
/* sin embargo todavía puede se rmejorado*/
if (cantPerros.trim()   != "") {cantPerros   = parseInt(cantPerros)}   else {cantPerros = 0};
if (cantGatos.trim()    != "") {cantGatos    = parseInt(cantGatos)}    else {cantGatos = 0};

if ((cantPerros + cantGatos) == 0) {
        document.write("Paseamos Perros ó Gatos, hasta "+
            CANT_MAX_MASCOTAS+ ".- de ellos por cliente. Muchas gracias por su consulta!");
    }
    else if (((cantPerros + cantGatos) <= CANT_MAX_MASCOTAS) && 
                ((cantPerros == 0)||(cantGatos == 0))) {
        document.write("Con gusto pasearemos sus Mascotas: ");
        if (cantPerros > 0) {document.write (cantPerros+ ".- Perro/s ")};
        if (cantGatos  > 0) {document.write (cantGatos+ ".- Gato/s ")};
        }
    else{ 
        document.write("Lo sentimos sólo podemos pasear hasta "+CANT_MAX_MASCOTAS+
         ".- perros ó gatos por cliente, en forma exclusiva.")
    };  
