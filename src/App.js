import React from "react";
import Todos from "./Todos";
import TodoInput from "./TodoInput";
import './App.css';


function App() {
  return (
    <div className="App">
      <p style = {{fontSize: '2rem', fontWeight:"bold"}}>Хийх ажлын жагсаалт</p>
      <Todos/>
      <TodoInput/>
    </div>
  );
}

export default App;
