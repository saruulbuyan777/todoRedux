import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    console.log(todos);
    const handleClick = id => dispatch({
      type:'DELETE_TODO',
      payload: id,
    })
    if(!todos || !todos.length){
      return <p>Одоохондоо жагсаалт байхгүй...</p>
    }
    return (
      <ul>
        {todos.map((todo,index) => <li key = {index} onClick = {() => handleClick(todo.id)} >{todo.label}</li>)}
      </ul>
    )
  }

  export default Todos


