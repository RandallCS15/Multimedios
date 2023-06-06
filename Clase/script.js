var botonLimpiar = document.getElementById('limpiar');

botonLimpiar.addEventListener('click', function() {
  var campoNombre = document.getElementById('nombre');
  var campoEmail = document.getElementById('email');
  var campoMensaje = document.getElementById('mensaje');

  campoNombre.value = '';
  campoEmail.value = '';
  campoMensaje.value = '';
});
 
