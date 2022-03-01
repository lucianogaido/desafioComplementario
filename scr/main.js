/***********************************************************************************************************************************ALGORITMOS CON CONDICIONAL *****************************************/



/**************************** ALGORITMO AÑO BISIESTO*******************************************/

// let numero = Number (prompt('Ingrese el año'));

// if ((numero % 4 === 0) && ((numero % 100 !== 0) || (numero %400 === 0))){
//     alert('Es un año Bisiesto');
// } else{
//     alert( 'No es un año bisiesto');
// }

/************************** ALGORITMO SIGNOS DEL ZODIACO *************************************/

// let dia = Number (prompt('Ingrese el dia de su cumpleaños. Solo el dia'));
// let mes = Number (prompt('Ingrese el numero del Mes de su cumpleaños'));

// if (((dia >= 21) && (mes === 3)) || ((dia<=21) && (mes === 4))){
//     alert('Sos de Aries');
// } else if (((dia >= 21) && (mes === 4)) || ((dia<=21) && (mes === 5))){
//     alert ('Sos de Tauro');
// } else if (((dia >= 21) && (mes === 5)) || ((dia<=21) && (mes === 6))){
//     alert ('Sos de Geminis');
// } else if (((dia >= 21) && (mes === 6)) || ((dia<=21) && (mes === 7))){
//     alert ('Sos de Cancer');
// } else if (((dia >= 21) && (mes === 7)) || ((dia<=21) && (mes === 8))){
//     alert ('Sos de Leo');
// } else if (((dia >= 21) && (mes === 8)) || ((dia<=21) && (mes === 9))){
//     alert ('Sos de Virgo');
// } else if (((dia >= 21) && (mes === 9)) || ((dia<=21) && (mes === 10))){
//     alert ('Sos de Libra');
// } else if (((dia >= 21) && (mes === 10)) || ((dia<=21) && (mes === 11))){
//     alert ('Sos de Escorpio');
// } else if (((dia >= 21) && (mes === 11)) || ((dia<=21) && (mes === 12))){
//     alert ('Sos de Sagitario');
// } else if (((dia >= 21) && (mes === 12)) || ((dia<=21) && (mes === 1))){
//     alert ('Sos de Capricornio');
// } else if (((dia >= 21) && (mes === 1)) || ((dia<=21) && (mes === 2))){
//     alert ('Sos de Acuario');
// } else if (((dia >= 21) && (mes === 2)) || ((dia<=21) && (mes === 3))){
//     alert ('Sos de Piscis');
// } else {
//     alert('Ingresaste mal los datos');
// }

/************************        ALGORITMOS CON CICLOS   **********************************
 ************************************************************************************************* */

/************************ Mostrar en consola si el alumno esta aprobado o no *********************/


const proyectosFinales = [10, 6, 3, 6, 8, 2];

for (i = 0; i < 6; i++) {
    if (proyectosFinales[i] <= 4) {
        console.log(`Tu nota es: ${proyectosFinales[i]}. APLAZO. Tenes que recursar :'(`);
    } else if (proyectosFinales[i] <= 6) {
        console.log(`Tu nota es: ${proyectosFinales[i]}. Desaprobaste. Podes hacer el recuperatorio`);
    } else if (proyectosFinales[i] === 10) {
        console.log(`Tu nota es: ${proyectosFinales[i]}. FELICITACIONES LA ROMPISTE!`)
    } else {
        console.log(`Tu nota es: ${proyectosFinales[i]}. Aprobaste! Felicitaciones!`);
    }
}

/*************************     PIDO UN NUMERO Y HAGO UNA OPERACION ******************************/

// let numero = Number (prompt('Ingrese un número'));

// for ( i = 0; i <=10; i++) {
//     alert(`Su numero mas ${i} es = ${numero + i}`); 
// }

/************************************* INGRESO DE DATOS CON WHILE ********************************/

// let entrada = prompt('Ingrese sus datos. Un dato por entrada. Al finalizar ingresar "ESC"');
// while (entrada != 'ESC'){
//     alert('Usted ingreso : '+ entrada);
//     entrada = prompt('Ingrese el siguiente dato');    
// }