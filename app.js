let resultados = {}; 

function convertir() {
    let valore = parseFloat(document.getElementById("valor").value);

    const tasasDeCambio = {
        dolar: 347.5, 
        euro: 367    
    };

    let monedaSeleccionada = "";

    const radios = document.getElementsByName("cambio");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            monedaSeleccionada = radios[i].id;
            break;
        }
    }

    if (monedaSeleccionada && !isNaN(valore)) {
        let resultado = 0;

        for (let moneda in tasasDeCambio) {
            if (moneda === monedaSeleccionada) {
                resultado = valore * tasasDeCambio[moneda];
                resultados[moneda] = resultado; 
                break;
            }
        }

        mostrarResultados(); 
    } else {
        alert("Debes elegir una moneda e ingresar el monto.");
    }
}

function mostrarResultados() {
    let resultadoHTML = "<h4>Resultados:</h4>";

    for (let moneda in resultados) {
        let nombreMoneda = (moneda === "dolar") ? "Dólar" : "Euro"; 
        resultadoHTML += `<p>Resultado para ${nombreMoneda}: $${resultados[moneda].toFixed(2)}</p>`;
    }

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
