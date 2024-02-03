<script>
    export let tiempoTrabajo;
    export let pomodoroRunning;
    export let iniciarPomodoro;
    export let pausarPomodoro;
    export let detenerPomodoro;
    export let siguienteCiclo;

    function formatTiempo(segundos) {
      const minutos = Math.floor(segundos / 60);
      const segundosRestantes = segundos % 60;
      return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    }
  </script>
  
  <div>
    <h1>Pomodoro Timer Aplicación</h1>
    <section class="contenedor-tempo">
      <span>{formatTiempo(tiempoTrabajo)}</span>
    </section>
    <section class="botones">
      <button on:click="{iniciarPomodoro}" disabled="{pomodoroRunning || tiempoTrabajo <= 0}">Iniciar Pomodoro</button>
      <button on:click="{pausarPomodoro}" disabled="{!pomodoroRunning}">Pausar Pomodoro</button>
      <button on:click="{detenerPomodoro}" disabled="{!pomodoroRunning}">Detener Pomodoro</button>
      <button on:click="{siguienteCiclo}" disabled="{!pomodoroRunning}">Siguiente Ciclo</button>
    </section>
  </div>
  
  <style>
    div {
      text-align: center;
    }
  
    h1 {
      font-size: 24px;
      color: #676666;
    }
  
    .contenedor-tempo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .botones {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
    }
  
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 5px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      color: #fff;
      background: linear-gradient(to right, #f4845f, #c2bdbd);
      border-color: #342300;
      transition: background-color 0.3s, color 0.3s;
    }
  
    button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  
    button:hover {
      background: linear-gradient(to right, #ff3e00, #808080);
      border-color: #251900;
    }
  
    button:active {
      background: linear-gradient(to left, #258fd6, #676767);
      border-color: #011c2f;
    }
  
    span {
      font-size: 60px;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      color: #ff3e00;
      background: linear-gradient(to top, #011c2f, #8e8d8d);;
      max-width: 100%;
      width: 300px;
      height: 300px;
      border-color: #000a10;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  </style>
  
