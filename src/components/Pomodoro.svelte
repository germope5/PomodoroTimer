<!-- Pomodoro.svelte -->
<script>
  import Timer from './Timer.svelte';
  import TaskInput from './TaskInput.svelte';
  import History from './History.svelte';
</script>

<style>


  .container {
    display: flex;
    flex-direction:row-reverse;
    
  }

  .cont-tareas {
    width: 60%;
    /* display: flex;
    flex-direction: column; */
  }

  .cont-timer {
    width: 40%;

  }

  h1 {
    color: white;
    margin-bottom: 20px;
    font-size: 50px;
    text-align: center;
  }
</style>

<div>
  <h1>Pomodoro Timer ⏲️</h1>
  <div class="container">
    <div class="cont-tareas">
      <TaskInput />
      <History />
    </div>
    
    <div class="cont-timer">
      <Timer />
    </div>
  </div>

  
</div>