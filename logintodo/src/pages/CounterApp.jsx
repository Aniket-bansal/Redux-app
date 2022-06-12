import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {counterInc,counterDec} from '../store/action'
const CounterApp = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.count);
  return (
    <div>
      <h1>CounterApp:{count}</h1>
      <div>
        <button onClick={()=>{
          dispatch(counterInc())
        }}>+</button>
        <button onClick={()=>{
          dispatch(counterDec())
        }}>-</button>
      </div>
    </div>
  )
}

export default CounterApp