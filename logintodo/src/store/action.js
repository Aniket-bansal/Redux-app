import {COMPLETE_TODO,DELETE_TODO,UPDATE_TODO,COUNTER_INCREMENT, COUNTER_DECREMENT,GET_TODOS_SUCCESS, GET_TODOS_LOADING, GET_TODOS_ERROR, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS} from './action.types'
import axios from 'axios'
export const counterInc =()=> ({type:COUNTER_INCREMENT});
export const counterDec =()=> ({type:COUNTER_DECREMENT});


// TODO App
export const todoAdd =(payload)=> (dispatch)=>{
   dispatch({type: ADD_TODO_LOADING})

      axios.post("http://localhost:8080/todos",payload).then(r=>{
         dispatch({type: ADD_TODO_SUCCESS,payload:r.data})
       })
       .catch(()=>{
       dispatch({type: ADD_TODO_ERROR})

       })

}
export const todoComplete = (id)=>({type: COMPLETE_TODO, payload:id})
export const todoUpdate = (payload)=>({type: UPDATE_TODO, payload})
export const todoDelete = (id)=>({type: DELETE_TODO, payload:id})


export const getTodos=() => (dispatch)=>{
   dispatch({type: GET_TODOS_LOADING})

     return axios
     .get("http://localhost:8080/todos")
     .then((r)=>{ 
      setTimeout(()=>{
         dispatch({type: GET_TODOS_SUCCESS,payload:r.data})
         console.log(r.data)
      },1000)
      
   
   })
     .catch(()=>{dispatch({type: GET_TODOS_ERROR});}); 

}



