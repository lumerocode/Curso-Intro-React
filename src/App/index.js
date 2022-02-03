import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


/* const defaultTodos = [
  {text: 'Tomar el curso de intro a React 1', completed: true},
  {text: 'Tomar el curso de intro a React 2', completed: false},
  {text: 'Tomar el curso de intro a React 3', completed: false},
  {text: 'Tomar el curso de intro a React 4', completed: false},
]; >*/

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
                               
/*
  const [todos, setTodos] = React.useState(defaultTodos);
  Creamos una variable "todos" con su estado "setTodos" y como valor
  incial tendrá todo el contenido de la variable "defaultTodos"
  Esta const se crea debido a que en algún momento quedremos que los
  "todos" no sean estáticos sino, dinámicos.

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  Creamos una variable "completedTodos" para hacer un análisis de que 
  cada vez que se renderice nuestro componente, cada vez que cambien los 
  "todos" o nuestro searchValue, vamos a volver a hacer esta cuenta de
  ¿Cúantos todos se han marcado como completados?
  Llamamos a nuestro array de "todos" y llamamos a su método filter(),
  luego filtramos nuestro "todo" => examinando si cada "todo" tiene su
  propiedad como true, osea "!!todo.completed" y el ".length", para 
  saber cuantos "todos" tenemos pero solo los que filtramos y que el
  completed sea igual a true.
  !completed = falso
  !!completed = true
  En conclusión, utilizamos esta variable para contar cuantos "todos" 
  tenemos y cuantos hemos completado en el componente todoCounter.

  const totalTodos = todos.length;
  Contamos el total de "todos" que hay.
*/