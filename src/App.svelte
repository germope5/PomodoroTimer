<!-- Componente Principal para la Aplicación -->
<!-- 
	* Integrar los componentes de Timer y TaskHistory
	en la App.svelte 
	Utilizar el estado global para compartir información entre ellos, como
	las tareas completadas y el historial hasta ese momento. 
-->



<script>
	import TaskHistory from "./TaskHistory.svelte";
	import Timer from "./Timer.svelte";
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Bienvenidos a la App <a href="/">Pomodoro Timer </a> para administrar tu tiempo y tareas.</p>
</main>
<section>
	<TaskHistory/>
	<Timer/>
</section>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background: linear-gradient(to bottom, #313131, #6a6a6a);
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		color: whitesmoke;
		/* text-transform: lowercase; */
		font-size: 1.5em;
		font-weight: 20;

	}

	p a {
		color:#ff3e00;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>