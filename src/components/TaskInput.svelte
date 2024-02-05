<!-- TaskInput.svelte -->
<script>
    import { timer } from '../store';
  
    let taskInput = "";
  
    const handleInputChange = (event) => {
      taskInput = event.target.value;
    };
  
    const setTask = () => {
      if (!timer.$isActive) {
        timer.update(t => ({ ...t, task: taskInput }));
        taskInput = "";
      }
    };
  </script>
  
  <style>
    /* Estilos para la entrada de texto de la tarea */
  
    section {
      margin-bottom: 10px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #222;
    }
  
    input {
      width: 30%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #07be20;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    button {
    padding: 8px 15px;
    background: linear-gradient(to top, #16b31b, #0a99af);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s; /* Agrega transición para suavizar el cambio de color */
}

button:hover {
    background: linear-gradient(to top, #143a3f, #15c51b); /* Cambia el color al hacer hover */
}

button:active {
    background: linear-gradient(to top, #77600e, #ff9900); /* Cambia el color al hacer clic */
}


  </style>
  
  <section>
    <label for="taskInput">Nombre de la Tarea:</label>
    <input type="text" id="taskInput" bind:value={taskInput} on:input={handleInputChange} />
    <button on:click={setTask}>Guardar</button>
  </section>
  