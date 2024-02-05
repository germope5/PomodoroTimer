<!-- Timer.svelte -->
<script>
    import { timer, addToHistory, settings } from '../store';
    import { onDestroy } from 'svelte';

    let interval;

    // Función para formatear el tiempo en MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    $: {
        // Actualiza el tiempo formateado cada vez que cambia el tiempo
        $timer.formattedTime = formatTime($timer.time);
    }

    const startTimer = () => {
        $timer.isActive = true;
        $timer.time = 0; // Reinicia el tiempo al inicio
        interval = setInterval(() => {
            $timer.time++;
            $timer.totalTime++;

            // Verifica si ha completado un bloque (25 minutos de trabajo o 5/15 minutos de descanso)
            if ($timer.time === 25 * 60 || $timer.time === 30 * 60 || $timer.time === 35 * 60) {
                // Realiza acciones específicas al finalizar un bloque (notificaciones, etc.)
                showNotification("Bloque completado", `¡Excelente trabajo en "${$timer.task}"!`);

                // Agrega la entrada al historial
                addToHistory({
                    startTime: new Date(),
                    endTime: new Date(),
                    task: $timer.task,
                    totalTime: $timer.totalTime,
                });

                // Reinicia el temporizador para el siguiente bloque
                $timer.time = 0;

                // Incrementa el contador de bloques completados
                $timer.completedBlocks++;

                // Verifica si se han completado tres bloques para activar el bloque de descanso más largo
                if ($timer.completedBlocks % 3 === 0) {
                    $timer.currentBreakTime = settings.longBreakDuration * 60; // Duración del descanso largo
                } else {
                    $timer.currentBreakTime = settings.shortBreakDuration * 60; // Duración del descanso corto
                }
            }

            // Verifica si ha completado el bloque de descanso
            if ($timer.time === $timer.currentBreakTime) {
                showNotification("Descanso completado", `¡Bien hecho! ¡Es hora de volver al trabajo!`);
                $timer.time = 0;
            }
        }, 1000);
    };

    const pauseTimer = () => {
        $timer.isPaused = true;
        clearInterval(interval);
    };

    const stopTimer = () => {
        $timer.isActive = false;
        $timer.isPaused = false;
        $timer.time = 0;
        $timer.formattedTime = "00:00"; // Restablece el formato del tiempo al detener el temporizador
        clearInterval(interval);
        $timer.completedBlocks = 0; // Reinicia el contador de bloques completados al detener el temporizador
    };

    const nextCycle = () => {
        // Lógica para pasar al siguiente ciclo
        // Por ejemplo, puedes reiniciar el temporizador para el próximo ciclo
        stopTimer();
        startTimer();
    };

    // Función para mostrar notificaciones
    const showNotification = (title, message) => {
        if (Notification.permission === "granted") {
            new Notification(title, { body: message });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, { body: message });
                }
            });
        }
    };

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section>
    
    <p>Tiempo: </p>
    <div class="Timer">
        <h1>
            { $timer.formattedTime }
        </h1>
    </div>
    <button on:click={startTimer} disabled={$timer.isActive}>Iniciar</button>
    <button on:click={pauseTimer} disabled={!$timer.isActive || $timer.isPaused}>Pausar</button>
    <button on:click={stopTimer} disabled={!$timer.isActive}>Detener</button>
    <button on:click={nextCycle} disabled={$timer.isActive}>Ciclo Nuevo</button>
    <h1>{ $timer.task || "No hay ninguna Tarea definida" }</h1>
</section>
  
<style>
    /* Estilos para el temporizador */
  
    section {
      text-align: center;
      /* padding: 20px; */
      border-radius: 8px;
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
      
    }
  
    h1 {
      font-size: 24px;
      color: #222;
      margin-bottom: 10px;
    }
  
    p {
      font-size: 18px;
      color: #222;
      margin-bottom: 10px;
      font-weight: bold; /* Establece el texto en negrita */
      font-size: 28px;
    }
  
    button {
      padding: 10px 15px;
      margin: 10px 5px;
      font-size: 16px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;

    }
  
    button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .Timer {
        display: flex;
    align-items: center; /* Alinea verticalmente en el centro */
    justify-content: center; /* Alinea horizontalmente en el centro */
    text-align: center;
    padding: 20px;
    background: linear-gradient(to top, #19c81f, #087b8d);
    color: #fff;
    border-radius: 50%;
    border-color: #222;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 250px;
    height: 250px;
    margin: auto;


    }

    .Timer h1 {
    font-size: 50px;
    margin-bottom: 10px;
    color: aliceblue;
}

  </style>
  

  