import React from 'react'
import '../styles/Todo.css'
import TextBubble from './TextBubble'
import { useState, useEffect } from "react";

const Todo = () => {
    const [showTodoBubble, setShowTodoBubble] = useState(false);
    const [checked, setChecked] = useState(false);

    // const [todos, setTodos] = useState([
    //     {
    //       text: "Learn about React",
    //       isCompleted: false
    //     },
    //     {
    //       text: "Meet friend for lunch",
    //       isCompleted: false
    //     },
    //     {
    //       text: "Build really cool todo app",
    //       isCompleted: false
    //     }
    //   ]);

    useEffect(() => {
if(localStorage.getItem('todo') !== null && localStorage.getItem('todo') !== "[]"){
  setShowTodoBubble(true)
}

    }, []);

    const checkLSTodo = (e) => {
      if(e === null){
        return []
      }
      else{
        const test2 = JSON.parse(e)
        return(test2)
      }
      }

      const [todos, setTodos] = useState(checkLSTodo(localStorage.getItem('todo')));

    const changeCheck = () => {

    }

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
              className={`todo-text ${
                todo.isCompleted ? "todo-text-completed" : ""
              }`}
            >
              {todo.text}
            </p>
            <button onClick={() => removeTodo(index)}>
              <i class="fa fa-trash todo-icon" aria-hidden="true"></i>
            </button>
          </div>
        );
      }

      const changeChecked = index => {
        const newTodos = [...todos];
        return newTodos[index].isCompleted
      };

      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
        // console.log(newTodos)
        localStorage.setItem('todo', JSON.stringify(newTodos));
      };
    
      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted =   !newTodos[index].isCompleted;
        setTodos(newTodos);
        setChecked(!checked)
        localStorage.setItem('todo', JSON.stringify(newTodos));
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todo', JSON.stringify(newTodos));
      };

      function TodoForm({ addTodo }) {
        const [value, setValue] = useState("");
      
        const handleSubmit = e => {
          e.preventDefault();
          if (!value) return;
          addTodo(value);
          setValue("");
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <input
ref={(input) => { textInput = input; }}
              type="text"
              className="todo-input"
              value={value}
              placeholder="New Todo"
              onChange={e => setValue(e.target.value)}
            />
          </form>
        );
      }


      let textInput = null;

      function handleClick() {
        textInput.focus();
      }
    

    return (
        <div className="todoContainer">

            <p className="todo-btn" onClick={() => setShowTodoBubble(!showTodoBubble)}><i class="fa fa-list-ul" aria-hidden="true"></i> Todo</p>
            <TextBubble todoTextBubble={`speech-bubble bottom-speech-bubble todo-bubble ${showTodoBubble ? "speech-bubble-show" : ""}`}>
                <div className="todo-bubble-content">
                    <div className="todo-header">
                <h3>Todo<i class="fa fa-pencil" aria-hidden="true"></i></h3>
                </div>
                <div className="todo-list">
                {todos.length > 0 ? (todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))) : (
            <div className="no-todo-container">
                <p className="no-todo">Add a todo to get started</p>
                <button className="no-todo-btn" onClick={handleClick}>New Todo</button>
            </div>
        )}
        <TodoForm addTodo={addTodo} />
        </div>
                </div>
                </TextBubble>
        </div>
    )
}

export default Todo
