import "./App.css";
import React, { useState } from "react";
import TodoListBoard from "./TodoListBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addList = () => {
    setTodoList([...todoList, inputValue]);
  };
  return (
    <>
      <div id="wrap">
        <div className="title">
          <h2>Todo List</h2>
        </div>
        <div className="addItem">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addList}>ADD</button>
        </div>
        <TodoListBoard todoList={todoList} />
      </div>
    </>
  );
}

export default App;
