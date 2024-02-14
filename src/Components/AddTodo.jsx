import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add} from '../Redux/actions/ActionTask'

export default function AddTodo() {
    const dispatch=useDispatch();
    
    const [TodoName,setTodoName]=useState("")

    const HandleChange=(e)=>{
        setTodoName(e.target.value)
    }
    const HandleAdd=(e)=>{
        e.preventDefault();
        
        
        dispatch(Add(
            {
                id:Date.now(),
                name:TodoName,
                check:false
            }
        ))
       
    }
  return (
    <div>
        <form >
            <input type='text' placeholder='add todo' onChange={(event)=>HandleChange(event)} />
            

            <button onClick={(event)=>HandleAdd(event)}>Add todo</button>
        </form>
       
    </div>
  )
}
