<!-- Componente para el Temporizador Pomodoro  -->
<!--
    Se puede implementar la lógica del Temporizador.
    * Utilizar variables del estado para manejar el tiempo restante.Timer
    (Trabajando, Descansando, etc).

    * Agregar funciones para Iniciar, Pausar y Reinicar el Temporizador.Timer


    * Añadir opciones de configuración/personalización
    para que los usuarios puedan ajustar la duración de
    trabajo y descanso según sus preferencias.

-->
<script>

    const taskHistory = JSON.parse(localStorage.getItem('taskHistory')) || [];
    let inputTarea = "";

    //Variable para definir si el Timer esta activo o no
    let pomodoroRunning = false;

    //Variable para controlar el Tiempo Restante Predeterminado del Temporizador
    let tiempoRestante = 1500;
    let descansoCorto = 300; // Duración predeterminada del descanso corto: 5 minutos
    let descansoLargo = 900; // Duración predeterminada del descanso largo: 15 minutos

    let titulo = "Pomodoro Timer Aplicación";

    let bloquesTrabajo = 0; //Contador para seguir la pauta de intervalos.
    let temporizador;

    //Función para Cambiar de Tarea
    function cambiarTarea() {
    if (!pomodoroRunning) {
      // Cambiar la tarea solo si el pomodoro no está en ejecución
      taskHistory.push(inputTarea);
      localStorage.setItem('taskHistory', JSON.stringify(taskHistory));
      inputTarea = ""; // Limpiar el campo de entrada después de cambiar la tarea
    }
  }

    //Función para Iniciar Pomodoro
    function iniciarPomodoro() {
        if (inputTarea !== "") {
        // Iniciar el pomodoro solo si se ha definido una tarea
        pomodoroRunning = true;
        temporizador = setInterval(() => {
            if (tiempoRestante > 0) {
            tiempoRestante--;
            } else {
                //Intervalo de Trabajo y Descanso
                detenerPomodoro();
                if (bloquesTrabajo % 3 === 2) {
                    //Descanso largo después de tres bloques
                    tiempoRestante = descansoLargo;
                } else {
                    //Descanso corto despupes de cada bloque de trabajo
                    tiempoRestante = descansoCorto;
                }
                bloquesTrabajo++;
            }
        }, 1000);
        }
    }

    // Función para Pausar el POMODORO
    function pausarPomodoro() {
        clearInterval(temporizador);
        pomodoroRunning = false;
    }

    // Función para Detener el Programa
    function detenerPomodoro() {
        clearInterval(temporizador);
        pomodoroRunning = false;
        tiempoRestante = 1500; // Reiniciar el tiempo a 25 minutos
    }

    function siguienteCiclo() {
        // Puedes implementar lógica adicional para el siguiente ciclo aquí
        detenerPomodoro();
        bloquesTrabajo = 0; // Reiniciar el contador de bloques al pasar al siguiente ciclo
        // Por ejemplo, si quieres pasar al descanso, puedes ajustar el tiempo y llamar a iniciarPomodoro()
  }

</script>

<section class="ContenedorTimer">

    <h1>{titulo}</h1>
    <section class="botones">
        <button on:click={iniciarPomodoro} disabled={pomodoroRunning || inputTarea === ""}>Iniciar Pomodoro</button>
    <button on:click={pausarPomodoro} disabled={!pomodoroRunning}>Pausar Pomodoro</button>
    <button on:click={detenerPomodoro} disabled={!pomodoroRunning}>Detener Pomodoro</button>
    <button on:click={siguienteCiclo} disabled={pomodoroRunning}>Siguiente Ciclo</button>

    </section>
    

</section>

<style>

    .ContenedorTimer {
        margin:2%;
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

</style>