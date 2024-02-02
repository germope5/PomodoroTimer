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
  // Importa la función cambiarTarea desde Timer.svelte
  import { cambiarTarea } from '../src/Timer.svelte';

  const taskHistory = JSON.parse(localStorage.getItem('taskHistory')) || [];
  let inputTarea = "";

  // Nueva función para definir y guardar la tarea actual
  function definirYGuardarTarea() {
    // Cambiar la tarea solo si no hay tareas en ejecución actualmente
    if (!tareaEnEjecucion()) {
      // Asegurarse de que hay un nombre de tarea válido antes de cambiar
      if (inputTarea.trim() !== "") {
        taskHistory.push(inputTarea.trim());
        localStorage.setItem('taskHistory', JSON.stringify(taskHistory));
        inputTarea = ""; // Limpiar el campo de entrada después de cambiar la tarea
      }
    }
  }

  // Función que verifica si hay una tarea en ejecución actualmente
  function tareaEnEjecucion() {
    // Puedes agregar lógica adicional aquí según tus necesidades
    // Por ejemplo, si estás implementando el temporizador Pomodoro, podrías verificar si está en ejecución
    return false; // Cambia esto según tu implementación
  }
</script>

<!-- Componente para introducir el nombre de la tarea. -->
<section class="contenedor-fila">
  <label for="inputTarea">Nombre de la tarea:</label>
  <input type="text" bind:value={inputTarea} id="inputTarea" name="inputTarea" placeholder="Ingresa el nombre de la tarea..." required>
  <button on:click={cambiarTarea} disabled={tareaEnEjecucion()}>Cambiar Tarea</button>
  <button on:click={definirYGuardarTarea} disabled={tareaEnEjecucion()}>Definir Tarea</button>
</section>


<style>

  .contenedor-fila {
    margin: 2%;
    display: flex;
    align-items: center;
  }

  label {
    margin-right: 1%; /* Ajusta el margen según tus necesidades */
    flex-shrink: 0; /* Evita que la etiqueta se reduzca si hay poco espacio */
    font-size: 18px;
  }

  input {
    max-width: 100%;
    width: 390px;
  }

  button {
    background: linear-gradient(to right, #ff3e00, #808080);
    color: whitesmoke;
    border-color: #342300;
    cursor: pointer;
    transition: background-color 0.3s; /* Agregamos una transición para suavizar el cambio de color */
  }

  button:active {
    background:linear-gradient(to left, #258fd6, #676767);
    border-color: #011c2f; 

  }

</style>


