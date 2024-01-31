<!-- Componente para mostrar el Historial de Tareas -->

<!-- 
    *El componente mostrará el historial de tareas.TaskHistory

    * Se puede hacer uso de una lista o tabla para mostrar información sobre cada Tarea, 
    como el Nombre, la duración,entre otros. 
-->

<!--
	Utilizar el almacenamiento local o algún servicio de bases de datos
	para almacenar el historial de tareas de usuario. 

	Se puede utilizar 'localStorage' para simplificar las cosas al principio. 
-->

<script>
    //Ejemplo de cómo almacenar en localStorage

    const taskHistory = JSON.parse(localStorage.getItem('taskHistory')) || [];
    const inputTarea = "";
</script>

<section class="contenedor-fila">
    <label for="nombre-tarea">Nombre de la tarea:</label>
    <input type="text" id="nombre-tarea" name="nombre-tarea" placeholder="Ingresa el nombre de la tarea" required>
</section>

<style>

  .contenedor-fila {
    margin: 1%;
    display: flex;
    align-items: center;
  }

  label {
    margin-right: 1%; /* Ajusta el margen según tus necesidades */
    flex-shrink: 0; /* Evita que la etiqueta se reduzca si hay poco espacio */
  }

  input {
    max-width: 100%;
    width: 390px;
  }

</style>


