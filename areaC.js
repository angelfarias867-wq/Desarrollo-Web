// Importa el módulo 'readline' para manejar la entrada del usuario en la terminal
const readline = require('readline');

// Crea una interfaz para leer la entrada y escribir la salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Función principal para calcular el área del círculo.
 */
function calcularAreaCirculo() {
    // Pide al usuario que ingrese el radio
    rl.question("Por favor, introduce el radio del círculo: ", (radioInput) => {
        // Convierte la entrada del usuario a un número de punto flotante
        const radio = parseFloat(radioInput);

        // Verifica si la entrada es un número válido y positivo
        if (isNaN(radio) || radio <= 0) {
            console.log("⚠️ Error: Por favor, introduce un número positivo y válido para el radio.");
            // Cierra la interfaz y termina el programa
            rl.close();
            return; 
        }

        // Calcula el área usando la fórmula: Área = π * radio * radio
        // Usamos Math.PI para el valor de π (Pi)
        const area = Math.PI * radio * radio; 
        
        // También se puede usar: 
        // const area = Math.PI * Math.pow(radio, 2);

        // Muestra el resultado
        console.log(`---`);
        console.log(`✅ El radio introducido es: ${radio}`);
        console.log(`📐 El área del círculo es: ${area.toFixed(4)}`); // toFixed(4) limita a 4 decimales
        console.log(`---`);

        // Cierra la interfaz de lectura
        rl.close();
    });
}

// Llama a la función principal para iniciar el proceso
calcularAreaCirculo();