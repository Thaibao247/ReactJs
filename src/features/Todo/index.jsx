import React, { useContext } from "react";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.scss";
import { ThemeContext } from "./ThemeContext";

function TodoFeature(props) {
  const context = useContext(ThemeContext);
  console.log("-------");
  console.log(context.Todo);
  console.log(context.todoFilter);
  //useReducer: Chạy lần đầu nhận reducer(nhưng chưa gọi), nhận initState và trả về cho countTodo

  return (
    <div className="todoApp">
      <h2> Todo List</h2>
      <h3>{context.countTodo} Todo</h3>
      <TodoForm handleAddTodo={context.HandleAddTodo} />
      <TodoList />
      {/* todoList={context.Todo}  onTodoClick={context.HandleTodoClick} deleteTask={context.deleteTask} */}
      <TodoFilter />
    </div>
  );
}

export default TodoFeature;
