let opcion = prompt("Selecciona un producto:\n1. Gaseosa (S/2.00)\n2. Papitas (S/3.00)\n3. Galleta (S/1.00)\n4. Agua Mineral (S/4.00)");
let productos = { "1": ["Gaseosa", 2], "2": ["Papitas", 3], "3": ["Galleta", 1], "4": ["Agua Mineral", 4] };

if (productos[opcion]) {
    let moneda = parseFloat(prompt("Ingresa una moneda (máximo S/5.00):"));
    let [nombre, precio] = productos[opcion];

    if (moneda >= precio && moneda <= 5) {
        alert(`Compraste ${nombre}. Vuelto: S/${(moneda - precio).toFixed(2)}`);
    } else {
        alert("Saldo insuficiente o monto inválido.");
    }
} else {
    alert("Opción no válida.");
}

