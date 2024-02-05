

# Pomodoro Timer

Esta es una aplicación simple de Pomodoro para gestionar tu tiempo de trabajo y descanso.


## Descripción del Proyecto
El Pomodoro Timer es una aplicación de temporizador diseñada para ayudarte a mejorar tu productividad mediante la técnica de gestión del tiempo conocida como "Pomodoro". Esta técnica implica dividir tu trabajo en intervalos de tiempo cortos, llamados "pomodoros", seguidos de descansos breves. El objetivo es maximizar la concentración y mantener la frescura mental.

## Funcionalidades

- **Temporizador Pomodoro:** Inicia un temporizador de trabajo de 25 minutos.
- **Descanso corto:** Después de cada ciclo de trabajo, disfruta de un descanso corto de 5 minutos.
- **Descanso largo:** Después de tres ciclos de trabajo, toma un descanso largo de 15 minutos.


## Uso

1. **Definir tarea:**
   - Ingresa el nombre de la tarea en el campo "Nombre de la Tarea" en la sección "Tarea" y haz clic en "Guardar".

2. **Iniciar el Pomodoro:**
   - Haz clic en el botón "Iniciar" para comenzar el temporizador de trabajo.

3. **Pausar y Detener:**
   - Puedes pausar el temporizador en cualquier momento haciendo clic en "Pausar".
   - Para detener completamente el temporizador, haz clic en "Detener".

4. **Historial de Tareas:**
   - Consulta el historial de tareas completadas en la sección "Historial de Tareas".

## Requisitos
1. **Node.js y npm:**
    - Asegúrate de tener Node.js instalado. npm (Node Package Manager) se instalará automáticamente con Node.js.

2. **Svelte:**
    - Asegúrate de tener Svelte instalado en el proyecto de desarrollo.
```bash
    npm create svelte@latest my-app
```
```bash
    cd my-app
```
```bash
    npm install
```
```bash
    npm run dev
```


3. **Contar con un Editor de texto de tu elección:**
    - Contar con un editor de texto completo para manejar y estructurar de manera adecuada tu proyecto.

## Comenzar / Instalación

Clonar el Repositorio

```bash
git clone https://github.com/username/PomodoroTimer.git
```

Instalar las dependencias...

```bash
cd svelte-app
```

```bash
npm install
```
...a continuación inicie [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navega a [localhost:8080](http://localhost:8080). Deberías ver tu aplicación ejecutándose. Edita un fichero de componentes en `src`, guárdalo y recarga la página para ver los cambios.

Por defecto, el servidor sólo responderá a peticiones desde localhost. Para permitir conexiones desde otros ordenadores, edita los comandos `sirv` en package.json para incluir la opción `--host 0.0.0.0`.

Si utiliza [Visual Studio Code](https://code.visualstudio.com/) le recomendamos que instale la extensión oficial [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). Si utilizas otros editores, puede que necesites instalar un plugin para obtener el resaltado de sintaxis y el intellisense.

## Compilar y ejecutar en modo de Producción

Para crear una versión optimizada de la aplicación:

```bash
npm run build
```

Puedes ejecutar la aplicación recién construida con `npm run start`. Esto utiliza [sirv](https://github.com/lukeed/sirv), que se incluye en las `dependencias` de tu paquete.json para que la aplicación funcione cuando la despliegues en plataformas como [Heroku](https://heroku.com).









