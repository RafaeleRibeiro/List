import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("")
    // const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue("")
    }

    return (
        <div className='todo-form tarefa'>
            {/* <h2>Adicionar Projeto</h2> */}
            <form className='formzinho' onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Adicionar Projeto'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                {/* <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value="Selecione uma categoria">Selecione uma categoria</option>
                    <option value="Feito">Feito</option>
                    <option value="Não feito">Não feito</option>
                </select> */}
                <button type='submit'>+</button>
            </form>
        </div>
    )
}

export default TodoForm