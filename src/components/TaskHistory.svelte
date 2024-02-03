<script>
  export let historial = [];

  let nuevaTarea = ""; // Nuevo estado local para el nombre de la tarea

  function formatTiempo(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  // Nueva función para manejar cambios en el input
  function handleInput(event) {
    nuevaTarea = event.target.value;
  }

  // Nueva función para agregar una tarea al historial
  function agregarTarea() {
    if (nuevaTarea.trim() !== "") {
      historial = [
        ...historial,
        {
          tarea: nuevaTarea,
          fechaInicio: new Date(),
          fechaFin: null,
          tiempoTotal: 0,
        },
      ];
      nuevaTarea = ""; // Limpiar el input después de agregar la tarea
    }
  }

  // Nueva función para manejar la fecha de fin del Pomodoro
  function handlePomodoroFin(fecha) {
    if (historial.length > 0) {
      const ultimaTarea = historial[historial.length - 1];
      ultimaTarea.fechaFin = fecha;
      ultimaTarea.tiempoTotal = calcularTiempoTotal(ultimaTarea.fechaInicio, fecha);
    }
  }

  // Calcular el tiempo total en minutos
  function calcularTiempoTotal(fechaInicio, fechaFin) {
    const tiempoMilisegundos = fechaFin - fechaInicio;
    const tiempoMinutos = tiempoMilisegundos / (1000 * 60);
    return tiempoMinutos;
  }
</script>

<div>
  <h1>Historial de Tareas</h1>

  <!-- Input para la nueva tarea -->
  <input type="text" bind:value={nuevaTarea} on:input={handleInput} placeholder="Nueva tarea..." />
  <button on:click={agregarTarea}>Agregar Tarea</button>

  {#if historial.length === 0}
    <p>No hay entradas en el historial.</p>
  {:else}
    {#each historial as entrada (entrada.fechaInicio)}
      <div class="historial-item">
        <p>{entrada.tarea}</p>
        <p>Fecha de inicio: {entrada.fechaInicio.toLocaleString()}</p>
        {#if entrada.fechaFin}
          <p>Fecha de fin: {entrada.fechaFin.toLocaleString()}</p>
          <p>Tiempo total: {formatTiempo(entrada.tiempoTotal)}</p>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<style>
  div {
    text-align: center;
  }

  h1 {
    font-size: 24px;
    color: #676666;
  }

  .historial-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>
