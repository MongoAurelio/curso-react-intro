import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
//import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
// import logo from './platzi.webp';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'Tomar el curso de introducción a React.js', completed: false },
  { text: 'LALALALA', completed: false},
  { text: 'Cuarto', completed: false }
];

function App() {
  return (
    <>

    <TodoCounter completed={16} total={25} />
    <TodoSearch />

    <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
    </TodoList>
    
     <CreateTodoButton /> 

    </>
  );
}

export default App;
