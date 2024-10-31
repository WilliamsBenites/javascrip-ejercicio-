## Solicitud de Opción de Producto:
    let opcion = prompt("Selecciona un producto:\n1. Gaseosa (S/2.00)\n2. Papitas (S/3.00)\n3. Galleta (S/1.00)\n4. Agua Mineral (S/4.00)");
    Se muestra una lista de productos con sus precios. El usuario debe escribir un número (1, 2, 3 o 4) para seleccionar el producto deseado. La entrada del usuario se guarda en la variable opcion.

## Objeto de Productos: 
    let productos = { "1": ["Gaseosa", 2], "2": ["Papitas", 3], "3": ["Galleta", 1], "4": ["Agua Mineral", 4] };
    Creamos un objeto llamado productos, que contiene cada producto con un número como clave ("1", "2", etc.). Cada clave tiene un arreglo con dos valores:

    El nombre del producto (por ejemplo, "Gaseosa").
    El precio del producto (por ejemplo, 2).
    Esto permite acceder a los datos de cada producto fácilmente con productos[opcion].

 if (productos[opcion]) {
    Validación de la Opción: Se verifica si opcion existe en el objeto productos. Si el usuario ingresó un número válido (1, 2, 3 o 4), entonces productos[opcion] no estará vacío y el programa continúa.


    let moneda = parseFloat(prompt("Ingresa una moneda (máximo S/5.00):"));
    Solicitud de Moneda: Si la opción es válida, el programa pide al usuario que ingrese una cantidad de dinero para pagar el producto. parseFloat convierte la entrada en un número decimal, y el valor se guarda en moneda.

    let [nombre, precio] = productos[opcion];
    Desestructuración del Producto: Utilizando let [nombre, precio] = productos[opcion];, extraemos el nombre y el precio del producto elegido y los guardamos en las variables nombre y precio.
==========================
    if (moneda >= precio && moneda <= 5) {
        alert(`Compraste ${nombre}. Vuelto: S/${(moneda - precio).toFixed(2)}`);
    } else {
        alert("Saldo insuficiente o monto inválido.");
    }
    Validación de la Moneda y Cálculo del Vuelto:
    Se verifica que la moneda sea suficiente para cubrir el precio (moneda >= precio) y que no supere los S/5.00 (moneda <= 5).
    Si la condición se cumple, calcula el vuelto como moneda - precio y lo muestra junto con el nombre del producto.
    Si la moneda es insuficiente o supera S/5.00, muestra el mensaje "Saldo insuficiente o monto inválido."
===========================
    } else {
    alert("Opción no válida.");
    }
    Opción Inválida: Si el usuario ingresó un número fuera de las opciones, se muestra "Opción no válida."