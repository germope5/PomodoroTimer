// main.js
import Pomodoro from './components/Pomodoro.svelte';
import 'svelte-spa-router';

const app = new Pomodoro({
  target: document.body,
  props: {
    // propiedades si es necesario
  },
});

export default app;
