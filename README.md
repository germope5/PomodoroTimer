

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
1. **Node.js y npm**
    - Asegúrate de tener Node.js instalado. npm (Node Package Manager) se instalará automáticamente con Node.js.

2. **Svelte**
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


3. **Definir tarea:**

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
...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Compilar y ejecutar en modo de Producción

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).









