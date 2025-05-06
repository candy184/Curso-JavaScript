function calcularDescuento() {
    let precioOriginal = parseFloat(document.getElementById("precio").value);
    let descuento = parseFloat(document.getElementById("descuento").value);
    let resultadoDiv = document.getElementById("resultado");

    if (isNaN(precioOriginal) || isNaN(descuento)) {
        resultadoDiv.innerHTML = "Por favor, ingrese valores numéricos válidos.";
        return;
    }

    let cantidadDescontada = (precioOriginal * descuento) / 100;
    let precioFinal = precioOriginal - cantidadDescontada;

    resultadoDiv.innerHTML = `
        <p>Precio Original: $${precioOriginal.toFixed(2)}</p>
        <p>Descuento: ${descuento}%</p>
        <p>Cantidad Descontada: $${cantidadDescontada.toFixed(2)}</p>
        <p>Precio Final: $${precioFinal.toFixed(2)}</p>
    `;
}
