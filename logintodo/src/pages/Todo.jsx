import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getTodos, todoAdd } from "../store/action"
// import axios from 'axios'
const Todo = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  const {loading,error, data:todos} = useSelector((state)=>state.todo.getTodos);


  const {loading:addButtonLoading} = useSelector((state)=>state.todo.addTodo)



  const addNew = ()=>{
    let value = ref.current.value;
    // console.log(value)
    todoAdd(dispatch,{
      value:value,
      isCompleted:false
    })
    ref.current.value = null
  }



  useEffect(()=>{
    getTodos(dispatch)
 
},[])

if(loading) return <h1>Loading...</h1>
if(error) return  <h1>Something went wrong</h1>
  return (
    <div>TodoApp:<br/>
     <div>
       <input ref={ref} type="text" placeholder="Your Text Here...."  />
      <button onClick={addNew} disabled={addButtonLoading}>ADD</button>
      </div>
      {todos.map((todo)=>
        (
        <div key={todo.id}>
         {todo.value}
        </div>
      ))}
    </div>
  )
}

export default Todo