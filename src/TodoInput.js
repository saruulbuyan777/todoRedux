import React,{useState} from "react";
import {  useDispatch} from 'react-redux';

const TodoInput = () => {
  const dispatch = useDispatch();
  const[newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value)
  const handleClick = () => dispatch({
    type: 'ADD_TODO',
    payload: {
      label:newTodo,
      id:Math.ceil(Math.random()*100),
    }
  })
  return (
    <div>
      <input value = {newTodo} onChange = {handleChange} type = "text"/>
      <button onClick = {handleClick}>Жагсаалтад нэм</button> 
    </div>

  )

  
}

export default TodoInput