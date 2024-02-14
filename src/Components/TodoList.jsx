import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { DeleteTodo } from '../Redux/actions/ActionTask';

export default function TodoList() {
    const todos = useSelector(state => state) ; 
    const dispatch=useDispatch();
    const HandleDelete=(id)=>{
        dispatch(DeleteTodo(id))
    }
    return (
        <div>
            {todos&&todos.map((e) => (<div>
                <span>{e.name}</span>
                <button onClick={()=>HandleDelete(e.id)}>delete</button>
            </div>))}
        </div>
    )
}
