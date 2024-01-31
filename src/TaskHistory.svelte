<!-- Componente para mostrar el Historial de Tareas -->

<!-- 
    *El componente mostrará el historial de tareas.TaskHistory

    * Se puede hacer uso de una lista o tabla para mostrar información sobre cada Tarea, 
    como el Nombre, la duración,entre otros. 
-->

<!--
	Utilizar el almacenamiento local o algún servicio de bases de datos
	para almacenar el historial de tareas de usuario. 

	Se puede utilizar 'localStorage' para simplificar las cosas al principio. 
-->

<script>
    //Ejemplo de cómo almacenar en localStorage

    const taskHistory = JSON.parse(localStorage.getItem('taskHistory')) || [];

</script>

