import React from 'react'
import {v4 as uuidV4} from "uuid"

const Form = ({input, setInput, todos, setTodos}) =>{
    const onInputChange = (event) =>{
        setInput(event.target.value)
    }
    
    const onFormSubmit = (event) =>{
        event.preventDefault()
        setTodos([...todos, {id:uuidV4(), title:input, completed: false}])
        setInput("")

    }
    return(
        <>
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder='Ingresa la Tarea' className='task-input' value={input} required onChange={onInputChange}/>
            <button className='button-add' type='submit'>
                Add
            </button>
        </form>
        </>
    )
}

export default Form 