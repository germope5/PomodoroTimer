<script>
  import Timer from '../components/Timer.svelte';
  import TaskHistory from '../components/TaskHistory.svelte';

  let pomodoroRunning = false; // Initialize with the desired value
</script>

<section>
  <!-- <Timer {pomodoroRunning} /> -->
  <TaskHistory {pomodoroRunning} />
</section>

<style>
  /* Add your styles as needed */
</style>
