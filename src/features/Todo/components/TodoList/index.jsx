import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import classnames from "classnames";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  deleteTask: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
  deleteTask: null,
};

// {todoList,onTodoClick,deleteTask}
function TodoList() {
  const todoContext = useContext(ThemeContext); // Phương thức giao tiếp giữa View và context

  //    const HandleTodoClick = (todo,index) => {
  //         if(!onTodoClick) return;

  //         onTodoClick(todo, index)
  //    }

  //     const HandleDeleteItem = (index) => {
  //         if(!deleteTask) return;
  //         deleteTask(index);
  //     }
  return (
    <div className="todo__list">
      {todoContext.todoFilter.map((todo, index) => {
        return (
          <div className="list-wrapper">
            <p
              className={classnames({ completed: todo.status === "completed" })}
              onClick={() => todoContext.HandleTodoClick(index)}
            >
              {todo.title}
            </p>
            <button
              className="custom-btn btn-1"
              onClick={() => {
                todoContext.deleteTask(index);
              }}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
