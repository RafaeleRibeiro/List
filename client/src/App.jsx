import './App.css'
import bar from "./assets/barinha.svg"
import sol from "./assets/sol.svg"
import Menu from './components/footer/footer'
import dia from "./assets/dia.png"
import { useState } from 'react'
import Todo from "./components/Todo"
import TodoForm from './components/TodoForm'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [todos, setTodos] = useState([

  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      isCompleted: false,
    }
    ]

    setTodos(newTodos)
  }

  const removeTodo= (id)=>{
    const newTodos= [...todos]
    const filteredTodos= newTodos.filter(todo => 
      todo.id !== id ? todo : null);
      setTodos(filteredTodos);
  }

  return (
    <>
      <div className='App'>
        <img className="dia" src={dia} alt="" />
        <div className='container'>
          <h1>TO DO</h1>
          <div className='icon'>
            <img src={sol} alt="" />
            <img src={bar} alt="" onClick={handleMenu} />
            {isMenuOpen && <Menu click={handleMenu} />}
          </div>

        </div>
        <TodoForm addTodo={addTodo} />

        <div className='tarefa'>
          <div className='todo-list'>
            {todos.length < 1 ? <>
            <span className='todo'>Você não tem tarefas hoje!</span>
            </> :

              todos.map((todo) => (
                <Todo key={todo.id} todo={todo}  removeTodo={removeTodo}/>
              ))
            }
          </div>
        </div>

        <div className='final'>
          Good Day
        </div>

      </div>
    </>
  )
}

export default App