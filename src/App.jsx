import React from 'react'
import { useReducer } from 'react'

const ACTION = {
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    default :
      return state.count
    }

}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment(){
    dispatch({type: ACTION.INCREMENT})
  }
  function decrement(){
    dispatch({type: ACTION.DECREMENT})
  }

  return (
    <div>
        <h2>count: {state.count}</h2>
        <button onClick={increment}>increment</button><br /><br />
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
