import React from "react";

function TodoListBoard(props) {
  return (
    <div className="board">
      {props.todoList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
export default TodoListBoard;
