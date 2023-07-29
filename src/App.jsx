import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de react', completed:false},
  {text:'Cortar papa', completed:false},
  {text:'cortar zapallo', completed:false},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={5} total={12}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

    </React.Fragment>

  );
}


export default App;
