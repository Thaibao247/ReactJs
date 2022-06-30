import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import classnames from 'classnames'

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({todoList,onTodoClick}) {
   const HandleTodoClick = (todo,index) => {
        if(!onTodoClick) return;

        onTodoClick(todo, index)
   }
    return (
       <ul className="todo__list">
           {todoList.map((todo, index) => {
              return  <li key={todo.id} className={classnames({completed: todo.status === 'completed'})}
              onClick={() => HandleTodoClick(todo, index)}
              >{todo.title}</li>
           })}
       </ul>
    );
}

export default TodoList;