import React from "react";
import "../styles/Todo.css";
import "../styles/TextBubble.css";
import "../styles/CustomCheckmark.css";
import TextBubble from "./TextBubble";
import { useState, useEffect } from "react";

const Todo = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [checked, setChecked] = useState(false);

  let focusInput = null;

  const checkLSTodo = (e) => {
    if (e === null) {
      return [];
    } else {
      const LStodo = JSON.parse(e);
      return LStodo;
    }
  };

  const [todos, setTodos] = useState(checkLSTodo(localStorage.getItem("todo")));

  useEffect(() => {
    if (
      localStorage.getItem("todo") !== null &&
      localStorage.getItem("todo") !== "[]"
    ) {
      setShowBubble(true);
    }
  }, []);

  function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div className="todo">
        <label className={`todo-checkmarkContainer`}>
          <input
            id="myCheck"
            type="checkbox"
            checked={changeChecked(index)}
            onClick={() => completeTodo(index)}
          />
          <span className="todo-checkmark"></span>
        </label>
        <p
          className={`todo-content ${
            todo.isCompleted ? "todo-text-completed" : ""
          }`}
        >
          {todo.text}
        </p>
        <button onClick={() => removeTodo(index)}>
          <i class="fa fa-trash todo-content" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  const changeChecked = (index) => {
    const newTodos = [...todos];
    return newTodos[index].isCompleted;
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    setChecked(!checked);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          ref={(input) => {
            focusInput = input;
          }}
          type="text"
          className="todo-input todo-content"
          value={value}
          placeholder="New Todo"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    );
  }

  return (
    <div className="todoContainer">
      <p className="todo-btn" onClick={() => setShowBubble(!showBubble)}>
        <i class="fa fa-list-ul" aria-hidden="true"></i> Todo
      </p>
      <TextBubble
        bubbleClassName={`speech-bubble bottom-speech-bubble todo-bubble ${
          showBubble ? "bottom-bubble-show" : ""
        }`}
      >
        <div>
          <div className="todo-header">
            <h3 className="todo-content">
              Todo<i class="fa fa-pencil todo-content" aria-hidden="true"></i>
            </h3>
          </div>
          <div className="todo-list">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              ))
            ) : (
              <div className="no-todo-container">
                <p className="todo-content">Add a todo to get started</p>
                <button
                  className="no-todo-btn"
                  onClick={() => focusInput.focus()}
                >
                  New Todo
                </button>
              </div>
            )}
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
      </TextBubble>
    </div>
  );
};

export default Todo;
