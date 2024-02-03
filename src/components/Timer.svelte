<script>
  import { onMount, afterUpdate, onDestroy } from 'svelte';
  import TimerComponent from './TimerComponent.svelte';

  export let historial;
  export let descansoLargo;
  export let descansoCorto;
  export let handleHistorial;
  export let handleConfiguracion;

  let tiempoTrabajo = 5; // 25 minutos
  let bloquesTrabajo = 0;

  let pomodoroRunning = false;
  let temporizador;

  onMount(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      // Limpiar el temporizador al destruir el componente
      clearInterval(temporizador);
    };
  });

  afterUpdate(() => {
    if (pomodoroRunning) {
      actualizarTiempoTrabajo();
    }
  });

  function handleVisibilityChange() {
    if (document.hidden) {
      pausarPomodoro();
    } else {
      if (pomodoroRunning) {
        iniciarPomodoro();
      }
    }
  }

  function iniciarPomodoro() {
    if (!pomodoroRunning && tiempoTrabajo > 0) {
      pomodoroRunning = true;
      temporizador = setInterval(() => {
        if (tiempoTrabajo > 0) {
          tiempoTrabajo--;
          actualizarTiempoTrabajo();
        } else {
          detenerPomodoro();
          const tarea = 'Tarea de trabajo'; // Puedes cambiar esto según tu lógica
          handleHistorial({
            fechaInicio: new Date(),
            fechaFin: new Date(),
            tarea,
            tiempoTotal: calcularTiempoTotal(),
          });

          if (bloquesTrabajo % 3 === 2) {
            tiempoTrabajo = descansoLargo;
          } else {
            tiempoTrabajo = descansoCorto;
          }
          bloquesTrabajo++;
        }
      }, 1000);
    }
  }

  function pausarPomodoro() {
    clearInterval(temporizador);
    pomodoroRunning = false;
  }

  function detenerPomodoro() {
    clearInterval(temporizador);
    pomodoroRunning = false;
    tiempoTrabajo = 5; // Reiniciar el tiempo a 25 minutos
    // iniciarPomodoro();
  }

  function siguienteCiclo() {
    detenerPomodoro();
    bloquesTrabajo = 0;
    tiempoTrabajo = 5; // Reiniciar el tiempo a 25 minutos
    iniciarPomodoro();
  }

  function actualizarTiempoTrabajo() {
    // Actualizar el tiempo visualizado en el componente TimerComponent.svelte
  }

  function calcularTiempoTotal() {
    // Calcular el tiempo total en minutos
    return (historial.reduce((total, entrada) => total + entrada.tiempoTotal, 0) + tiempoTrabajo) / 60;
  }

  function notificar(mensaje) {
  if (document.hidden) {
    // If the document is hidden, use Web Notifications API
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        Notification('Pomodoro App', {
          body: mensaje,
        });
      }
    });
  } else {
    // If the document is visible, use a simple alert
    alert(mensaje);
  }
}
</script>

<div>
  <TimerComponent
    {tiempoTrabajo}
    {pomodoroRunning}
    {iniciarPomodoro}
    {pausarPomodoro}
    {detenerPomodoro}
    {siguienteCiclo}
  />
  <button on:click="{handleConfiguracion}">Configuración</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top: 10px;
    padding: 8px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }
</style>