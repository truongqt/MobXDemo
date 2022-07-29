import React from "react";
import { observer } from "mobx-react";

/*
 * Props are passed to this stateless function that again gets
 * wrapped in an observer
 */

const Todo = ({ delTodo, todo, toggleCompleted }) => (
  <div className="todo">
    {!todo.completed && (
      <input
        type="checkbox"
        name="completed"
        onClick={() => toggleCompleted(todo)}
      />
    )}
    <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
    <button onClick={() => delTodo(todo)}>&times;</button>
    <hr />
  </div>
);

export default observer(Todo);
