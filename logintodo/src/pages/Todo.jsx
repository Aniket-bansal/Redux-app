import React, { useEffect, useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getTodos, todoAdd } from "../store/action"
// import axios from 'axios'
const Todo = () => {
  const ref = useRef()
  const dispatch = useDispatch()
  const {getTodos:gTodos,addTodo:aTodo, data:todos} = useSelector((state)=>state.todo);


  // const {loading:addButtonLoading} = useSelector((state)=>state.todo.addTodo)



  const addNew = ()=>{
    let value = ref.current.value;
    // console.log(value)
    dispatch(todoAdd({
      value:value,
      isCompleted:false
    }))
    ref.current.value = null
  }



  useEffect(()=>{
    // getTodos(dispatch)
    dispatch(getTodos())
 
},[])

if(gTodos.loading) return <h1>Loading...</h1>
else if(gTodos.error) return  <h1>Something went wrong</h1>
  return (
    <div>TodoApp:<br/>
     <div>
       <input ref={ref} type="text" placeholder="Your Text Here...."  />
      <button onClick={addNew} disabled={aTodo.loading}>ADD</button>
      </div>
      {todos.map((todo)=>
        (
        <div key={todo.id}>
         <div style={{ 
          width: "20%",
           margin: "auto",
          border: '1px solid',
          display: 'flex',
          gap: "15px",
          flexDirection: 'row'
         }}>
          
          <input type="checkbox" id="check" onClick={()=>{
            var checkbox = document.getElementById("check");
            var text = document.getElementById("task");
            if(checkbox.checked == true)
            {
              text.style.textDecoration = "line-through"
              text.style.color = "grey"
            }
            else{
              text.style.textDecoration = "line-through"
                text.style.color = "grey"
            }
          }} />
          <br/>
         <h3 id="task">{todo.value}</h3>
          </div> 
         
        </div>
      ))}
    </div>
  )
}

export default Todo