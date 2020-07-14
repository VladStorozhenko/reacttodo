import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo, toggleComplete }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <TextField
          label="Task"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
          toggleComplete={toggleComplete}
        />
        <Button className="add-button" type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
