<!-- Componente para el Temporizador Pomodoro  -->
<!--
    Se puede implementar la lógica del Temporizador.
    * Utilizar variables del estado para manejar el tiempo restante.Timer
    (Trabajando, Descansando, etc).

    * Agregar funciones para Iniciar, Pausar y Reinicar el Temporizador.Timer


    * Añadir opciones de configuración/personalización
    para que los usuarios puedan ajustar la duración de
    trabajo y descanso según sus preferencias.

    * Para mantener el temporizador activo en segundo plano, se puede hacer uso
    de la API de Page Visibility, que proporciona eventos y propiedades que  detectan
    cuando una página esta activa o no.



-->


<script>

    import { afterUpdate} from 'svelte';


    const taskHistory = JSON.parse(localStorage.getItem('taskHistory')) || [];
    let inputTarea = "";


  // Variables para el temporizador
  let pomodoroRunning = false;
  let tiempoRestante = 1500;
  let descansoCorto = 300;
  let descansoLargo = 900;
  let bloquesTrabajo = 0;
  let temporizador;
  let tiempoMostrado = convertirSegundosAMinutos(tiempoRestante);


     //Función para Iniciar Pomodoro
  function iniciarPomodoro() {
    console.log('Iniciando el Pomodoro...');
    // pomodoroRunning = true;
    if (inputTarea.trim() !== "") {
      console.log('Tarea definida. Iniciando temporizador...');
      // Iniciar el pomodoro solo si se ha definido una tarea
      pomodoroRunning = true;
      temporizador = setInterval(() => {
        if (tiempoRestante > 0) {
          tiempoRestante--;
          actualizarTiempoMostrado();
        } else {
          detenerPomodoro();
          mostrarAlertaFinBloque();
          if (bloquesTrabajo % 3 === 2) {
            tiempoRestante = descansoLargo;
          } else {
            tiempoRestante = descansoCorto;
          }
          bloquesTrabajo++;
        }
      }, 1000);
    }
  }

    
    function convertirSegundosAMinutos(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;

        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    // Función para Pausar el POMODORO
    function pausarPomodoro() {
      console.log('Se ha pausado el POMODORO...');
        clearInterval(temporizador);
        pomodoroRunning = false;
    }

    // Función para Detener el Programa
    function detenerPomodoro() {
      console.log('Se ha detenido el POMODORO Definitivamente...');
        clearInterval(temporizador);
        pomodoroRunning = false;
        tiempoRestante = 1500; // Reiniciar el tiempo a 25 minutos
    }

    function siguienteCiclo() {
      console.log('Se procede a comenzar un nuevo CICLO...');
        // Puedes implementar lógica adicional para el siguiente ciclo aquí
        detenerPomodoro();
        bloquesTrabajo = 0; // Reiniciar el contador de bloques al pasar al siguiente ciclo
        // Por ejemplo, si quieres pasar al descanso, puedes ajustar el tiempo y llamar a iniciarPomodoro()
  }


  function actualizarTiempoMostrado() {
    tiempoMostrado = convertirSegundosAMinutos(tiempoRestante);
  }



  // Función para Cambiar de Tarea
  function cambiarTarea() {
    if (!pomodoroRunning) {
      // Cambiar la tarea solo si el pomodoro no está en ejecución
      taskHistory.push(inputTarea);
      localStorage.setItem('taskHistory', JSON.stringify(taskHistory));
      inputTarea = ""; // Limpiar el campo de entrada después de cambiar la tarea
    }
  }

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
  console.log('Hay una tarea en Ejecución');
    return pomodoroRunning; // Acceder al valor reactivamente
  }

  afterUpdate(() => {
    // Manejar actualizaciones después de cada renderizado
    if (pomodoroRunning) {
      actualizarTiempoMostrado();
    }
  });
</script>

<section class="contenedor-fila">
  <label for="inputTarea">Nombre de la tarea:</label>
  <input type="text" bind:value={inputTarea} id="inputTarea" name="inputTarea" placeholder="Ingresa el nombre de la tarea..." required>
  <button 
  on:click={cambiarTarea}
   
   >
   Cambiar Tarea
  </button>
  <button 
  on:click={definirYGuardarTarea}
   >
   Definir Tarea
  </button>
</section>


<section class="ContenedorTimer">

    
    <section class="contenedor-tempo">
      <span>{tiempoMostrado}</span>
    </section>

    <section class="botones">
      <button on:click={iniciarPomodoro} >Iniciar Pomodoro</button>
      <button on:click={pausarPomodoro} >Pausar Pomodoro</button>
      <button on:click={detenerPomodoro} >Detener Pomodoro</button>
      <button on:click={siguienteCiclo} >Siguiente Ciclo</button>

    </section>
    

</section>

<style>

    .ContenedorTimer {
        margin:2%;

    }

    .contenedor-tempo{
      display: flex;
        justify-content: center;
        align-items: center;
    }

    .botones {
        display: flex;
        justify-content: center; /* Para centrar horizontalmente los botones */
        align-items: center; /* Para centrar verticalmente los botones */
        height: 10vh; /* Ajusta según la altura que desees */
    }

    h1 {
        font-size: 24px;
        color: #676666;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        margin: 5px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        color: #fff; /* Color del texto del botón */
        background: linear-gradient(to right, #f4845f, #c2bdbd);
        border-color: #342300;
        transition: background-color 0.3s, color 0.3s; /* Agregamos una transición para suavizar los cambios */
    }

    button:disabled {
        opacity: 0.7; /* Opacidad reducida para botones deshabilitados */
        cursor: not-allowed;
    }

    button:hover {
        background: linear-gradient(to right, #ff3e00, #808080);
        border-color: #251900; /* Cambiar color de fondo al pasar el mouse sobre el botón */
    }

    button:active {
        background:linear-gradient(to left, #258fd6, #676767); /* Cambiar color de fondo cuando se hace clic en el botón */
        border-color: #011c2f; 
    }

    span {
    font-size: 60px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    color: #ff3e00;
    background: linear-gradient(to top, #011c2f, #8e8d8d);;
    max-width: 100%;
    width: 300px;
    height: 300px;
    border-color: #000a10;
    justify-content: center; /* Centra horizontalmente dentro del span */
    align-items: center; /* Centra verticalmente dentro del span */
    border-radius: 50%;
}

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