<!-- Pomodoro.svelte -->
<script>
  import Timer from './Timer.svelte';
  import TaskInput from './TaskInput.svelte';
  import History from './History.svelte';
</script>

<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  div {
    text-align: center;
    /* background: radial-gradient(circle, #3498db, #c0392b); */
    /* border-radius: 8px; */
    padding: 20px;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: #333;
    margin-bottom: 20px;
    font-size: 52px;
  }
</style>

<div>
  <h1>Pomodoro Timer</h1>

  <TaskInput />
  <Timer />
  <History />
</div>