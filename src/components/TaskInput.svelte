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
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row; /* Cambiado a dirección de fila */
    align-items: center; /* Centra los elementos verticalmente en la fila */
   justify-content: center;
  }

  label {
    margin-top: 15px;
    font-weight: bold;
    color: white;
    margin-right: 12px; /* Añadido margen a la derecha para separar el label del input */
  }

  input {
    width: 400px; /* Ocupa todo el ancho disponible */
    padding: 10px 15px;
    border: 1px solid #07be20;
    border-radius: 4px 0 0  4px;
    box-sizing: border-box;
    color: aliceblue;
    background: linear-gradient(to right, #33b037, #303030);
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    background: linear-gradient(to top, #16b31b, #0a99af);
    color: #fff;
    border: 1px solid #07be20;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    transition: background 0.9s;
  }

  button:hover {
    background: linear-gradient(to top, #143a3f, #15c51b);
  }

  button:active {
    background: linear-gradient(to top, #77600e, #ff9900);
  }
</style>

<section>
  <label for="taskInput">Nombre:</label>
  <input type="text" id="taskInput" bind:value={taskInput} on:input={handleInputChange} />
  <button on:click={setTask}>Guardar</button>
</section>
