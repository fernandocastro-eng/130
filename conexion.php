<?php
$servidor = "localhost";
$usuario  = "root"; 
$password = ""; 
$dbname   = "sistema_tareas";

$conexion = mysqli_connect($servidor, $usuario, $password, $dbname);

if (!$conexion) {
    die("Error al conectar con la base de datos: " . mysqli_connect_error());
}
?>