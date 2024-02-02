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

    import {onMount, afterUpdate} from 'svelte';

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

    let tiempoMostrado = convertirSegundosAMinutos(tiempoRestante);

    function convertirSegundosAMinutos(segundos) {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;

        return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }

    

    

    //Función para Iniciar Pomodoro
    function iniciarPomodoro() {
        if (inputTarea.trim() !== "") {
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

  onMount(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

  });

  function handleVisibilityChange() {
  console.log('Visibility changed:', document.hidden);
  if (document.hidden) {
    // La página está en segundo plano, pausar el temporizador
    pausarPomodoro();
  } else {
    // La página está de nuevo en primer plano, reanudar el temporizador si estaba en ejecución
    if (pomodoroRunning) {
      iniciarPomodoro();
    }
  }
}

  function mostrarNotificacion(mensaje) {
    // Verificar si las notificaciones son compatibles con el navegador
    if ('Notification' in window && Notification.permission === 'granted') {
      // Mostrar una notificación
      new Notification(mensaje);
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      // Solicitar permiso para mostrar notificaciones
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(mensaje);
        }
      });
    } else {
      // Alerta si las notificaciones no son compatibles
      alert(mensaje);
    }
  }

  function mostrarAlertaFinBloque() {
    mostrarNotificacion("¡Se ha completado un Bloque!  ¡Comienza el siguiente!");
  }

  function actualizarTiempoMostrado() {
    tiempoMostrado = convertirSegundosAMinutos(tiempoRestante);
  }

  afterUpdate(() => {
    // Manejar actualizaciones después de cada renderizado
    if (pomodoroRunning) {
      actualizarTiempoMostrado();
    }
  });

</script>

<section class="ContenedorTimer">

    <h1>{titulo}</h1>
    <section class="contenedor-tempo">
      <span>{tiempoMostrado}</span>

    </section>

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

</style>