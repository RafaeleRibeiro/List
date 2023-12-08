import lixo from "../assets/trash.svg"
import marcadinho from "../assets/ph_check-square-thin.svg"
import desmarcadinho from "../assets/ph_square-thin.svg"
import { useState } from "react"

const Todo = ({ todo, removeTodo }) => {
    const [checked, setChecked] = useState(true)

    return (
        <div className='todo'>
            {/* <input className="complete" type="checkbox" name="" id="" /> */}

            {checked ? <img className="pointer" onClick={()=> setChecked(!checked)} src={marcadinho} alt="" /> : <img className="pointer" onClick={()=> setChecked(!checked)} src={desmarcadinho} alt="" />}

            <div className='content'>
                <p>{todo.text}</p>
                {/* <p className='category'>({todo.category})</p> */}
            </div>
            <div>
                <img className='pointer' src={lixo} alt="" onClick={()=> removeTodo(todo.id)}/>
            </div>
        </div>
    )
}

export default Todo