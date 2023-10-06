function convertir() {
    let valore = parseFloat(document.getElementById("valor").value);

    const tasasDeCambio = {
        uno: 347.5, // Tasa de cambio para Dólares a Pesos
        dos: 367    // Tasa de cambio para Euros a Pesos
    };

    let monedaSeleccionada = "";

 
    if (document.getElementById("uno").checked) {
        monedaSeleccionada = "uno"; // Dólares
    } else if (document.getElementById("dos").checked) {
        monedaSeleccionada = "dos"; // Euros
    }

    if (monedaSeleccionada && !isNaN(valore)) {
        let resultado = 0;

        for (let moneda in tasasDeCambio) {
            if (moneda === monedaSeleccionada) {
                resultado = valore * tasasDeCambio[moneda];
                break; 
            }
        }

        alert("El cambio a pesos es: $" + resultado.toFixed(2));
    } else {
        alert("Debes elegir una moneda e ingresar el monto.");
    }
}
