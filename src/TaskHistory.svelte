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
    let inputTarea = "";

    //Variable para definir si el Timer esta activo o no
    let pomodoroRunning = false;

    //Función para Cambiar de Tarea
    function cambiarTarea() {
      if(!pomodoroRunning) {
        //Cambia la tarea solo si el POMODORO no está en ejecución.
        taskHistory.push(inputTarea);
        localStorage.setItem('taskHistory', JSON.stringify(taskHistory));
        inputTarea = ""; //Limpiar el campo de entrada despúes de cambiar de tarea
      }
    }

    //Función para Iniciar Pomodoro
    function iniciarPomodoro () {
      if (inputTarea !== "") {
        //Iniciar el Pomodoro solo si se ha definido una tarea
        //Implementare la lógica para Iniciar el Pomodoro
        pomodoroRunning = true;
      }
    }

    // Función para Detener el Programa
    function detenerPomodoro() {
      // Lógica para la detención del POMODORO
      pomodoroRunning = false;
    }
</script>

<!-- Componente para introducir el nombre de la tarea. -->
<section class="contenedor-fila">
    <label for="inputTarea">Nombre de la tarea:</label>
    <input type="text" id="inputTarea" name="inputTarea" placeholder="Ingresa el nombre de la tarea" required>
    <button on:click={cambiarTarea} disabled={pomodoroRunning}>Cambiar Tarea</button>
</section>

<section>
  <button on:click={iniciarPomodoro} disabled={pomodoroRunning || inputTarea === "" }>Iniciar Pomodoro</button>
  <button on:click={detenerPomodoro} disabled={!pomodoroRunning}>Detener Pomodoro</button>
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


