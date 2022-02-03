import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search Task..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };

/*
Línea 5 -->  const [searchValue, setSearchValue] = React.useState('');
             Creamos un estado con useState que por defecto será un
             String vacío, que estamos guardando en la variable
             searchValue.
             Además hay una función setSearchValue para actualizar 
             el valor.

Línea 7 -->  const onSearchValueChange
             Tenemos una función onSearchValueChange que cada vez que
             los usuarios escriban algo en el input de búsqueda, va a
             llamar a la función setSearchValue para actualizar 
             nuestro estado de searchValue.

Línea 17 --> onChange={onSearchValueChange}
             Lo llamamos en el método onChange del input para 
             conectarlo. Le decimos que el valor de nuestro input
             tiene que ser igual a nuestro estado, al valor que
             guardamos.

*/