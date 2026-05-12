document.getElementById('registroForm').addEventListener('submit', function(event) {
   
    event.preventDefault();

  
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const foto = document.getElementById('foto').files[0];

    
    console.log("Datos del Compañero:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Archivo de foto:", foto ? foto.name : "No seleccionada");

    alert(`¡Datos de ${nombre} guardados correctamente!`);

    
    
});