<?php
// Establecer la conexión a la base de datos (reemplaza los valores con los de tu configuración)
$servername = "hl1235.dinaserver.com";
$username = "BIJYadmin";
$password = "uYpZ4w52);.3";
$database = "event.aku";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener el id más alto de la tabla usuarios
$result = $conn->query("SELECT MAX(id) as max_id FROM usuarios");
$row = $result->fetch_assoc();
$maxId = $row['max_id'];

// Crear el formulario
echo '<form action="procesar_formulario.php" method="post">';
echo '<input type="hidden" name="id_usuario" value="' . $maxId . '">';
echo '<label for="evento">Selecciona un evento:</label>';
echo '<select name="evento">';
echo '<option value="evento1">Evento 1</option>';
echo '<option value="evento2">Evento 2</option>';
echo '<option value="evento3">Evento 3</option>';
echo '<option value="evento4">Evento 4</option>';
echo '<option value="evento5">Evento 5</option>';
echo '</select>';
echo '<input type="submit" value="Enviar">';
echo '</form>';

// Cerrar la conexión a la base de datos
$conn->close();
?>

--