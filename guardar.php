<?php

include("conexion.php");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    
    $titulo       = $_POST['titulo'];
    $prioridad    = $_POST['prioridad'];
    $descripcion  = $_POST['descripcion'];
    $fecha_limite = $_POST['fecha_limite']; 

    
    $titulo       = mysqli_real_escape_string($conexion, $titulo);
    $prioridad    = mysqli_real_escape_string($conexion, $prioridad);
    $descripcion  = mysqli_real_escape_string($conexion, $descripcion);
    $fecha_limite = mysqli_real_escape_string($conexion, $fecha_limite);

    
    $sql = "INSERT INTO tareas (titulo, descripcion, prioridad, fecha_limite) 
            VALUES ('$titulo', '$descripcion', '$prioridad', '$fecha_limite')";

    if (mysqli_query($conexion, $sql)) {
        echo "<script>
                alert('Tarea guardada exitosamente en la tabla');
                window.location.href='index.html';
              </script>";
    } else {
        echo "Error al guardar: " . mysqli_error($conexion);
    }

    mysqli_close($conexion);
}
?>