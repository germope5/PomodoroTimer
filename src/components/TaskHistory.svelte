<script>
  import Timer from "./Timer.svelte";

  export let historial = [];
  let nuevaTarea = "";

  function formatTiempo(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  function handleInput(event) {
    nuevaTarea = event.target.value;
  }

  function handlePomodoroFin(fecha) {
    if (historial) {
      const tareaGuardada = {
        tarea: nuevaTarea,
        fechaInicio: pomodoroInicio,
        fechaFin: fecha,
        tiempoTotal: calcularTiempoTotal(pomodoroInicio, fecha),
      };

      historial.push(tareaGuardada);
      localStorage.setItem('historial', JSON.stringify(historial));
      nuevaTarea = ""; // Limpiar el campo de entrada después de guardar la tarea
    }
  }

  function calcularTiempoTotal(fechaInicio, fechaFin) {
    const tiempoMilisegundos = fechaFin - fechaInicio;
    const tiempoMinutos = tiempoMilisegundos / (1000 * 60);
    return tiempoMinutos;
  }

  function guardarTarea() {
    if (nuevaTarea.trim() !== "") {
      const tareaGuardada = {
        tarea: nuevaTarea,
        fechaInicio: new Date(),
        fechaFin: null, // No hay fecha de fin aún
        tiempoTotal: 0, // Aún no se ha completado
      };

      historial.push(tareaGuardada);
      localStorage.setItem('historial', JSON.stringify(historial));
      nuevaTarea = ""; // Limpiar el campo de entrada después de guardar la tarea
    }
  }
</script>

<div>
  <h1>Historial de Tareas</h1>
  <input type="text" bind:value={nuevaTarea} on:input={handleInput} placeholder="Nueva tarea..." />
  <button on:click={guardarTarea}>Guardar Tarea</button>
  <Timer on:pomodoroFin={handlePomodoroFin} />

  {#if historial.length === 0}
    <p>No hay entradas en el historial.</p>
  {:else}
    {#each historial as entrada (entrada.fechaInicio)}
      <div class="historial-item">
        <p>{entrada.tarea}</p>
        <p>Fecha de inicio: {entrada.fechaInicio.toLocaleString()}</p>
        <p>Fecha de fin: {entrada.fechaFin.toLocaleString()}</p>
        <p>Tiempo total: {formatTiempo(entrada.tiempoTotal)}</p>
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
