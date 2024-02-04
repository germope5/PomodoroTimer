// store.js
import { writable } from 'svelte/store';

export const timer = writable({
  isActive: false,
  isPaused: false,
  time: 0,
  formattedTime: '00:00',
  task: '',
  totalTime: 0,
  completedBlocks: 0,
  currentBreakTime: 5 * 60, // Duración inicial del descanso corto en segundos
});

export const history = writable([]);

export const settings = writable({
  shortBreakDuration: 5, // Duración del descanso corto en minutos
  longBreakDuration: 15, // Duración del descanso largo en minutos
  // Puedes agregar más configuraciones según tus necesidades
});

// Agrega la función addToHistory al store
export const addToHistory = (entry) => {
  history.update((entries) => [...entries, entry]);
};
