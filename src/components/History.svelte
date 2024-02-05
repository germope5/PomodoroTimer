<!-- History.svelte -->
<script>
    import { history } from '../store';
  
    let entries = [];
  
    $: {
      entries = $history;
    }
  </script>
  
  <style>
    /* Estilos para el componente de historial */
  
    section {
      text-align: center;
      padding: 20px;
      border-radius: 8px;
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    }
  
    h1 {
      font-size: 24px;
      color: white;
      margin-bottom: 20px;
    }
  
    p {
      font-size: 16px;
      color: #cbcbcb;
      margin-bottom: 10px;
    }
  
    section div {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
    }
  
    div div p {
      margin: 5px 0;
    }
  </style>
  
  <section>
    <h1>Historial de Tareas</h1>
    {#if entries.length > 0}
      {#each entries as entry (entry.startTime)}
        <div>
          <p>Nombre de la Tarea: {entry.task}</p>
          <p>Tiempo total: {entry.totalTime} minutos</p>
          <p>Hora de Inicio: {entry.startTime.toLocaleString()}</p>
          <p>Hora de Fin: {entry.endTime.toLocaleString()}</p>
        </div>
      {/each}
    {:else}
      <p>No hay entradas en el historial.</p>
    {/if}
  </section>
  