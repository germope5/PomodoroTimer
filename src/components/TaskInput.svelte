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
      margin-bottom: 15px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  
    button {
      padding: 8px 15px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
  
  <section>
    <label for="taskInput">Nombre de la Tarea:</label>
    <input type="text" id="taskInput" bind:value={taskInput} on:input={handleInputChange} />
    <button on:click={setTask}>Guardar</button>
  </section>
  