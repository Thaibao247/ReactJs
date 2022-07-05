import React, { useState, useContext} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';
import {ThemeContext} from './ThemeContext';

function TodoFeature(props) {
    const context = useContext(ThemeContext);

    return (
        <div className='todoApp'>
            <h2>Todo List</h2>
            <TodoForm handleAddTodo = {context.HandleAddTodo}  />
            <TodoList />
            {/* todoList={context.Todo}  onTodoClick={context.HandleTodoClick} deleteTask={context.deleteTask} */}
        </div>
    );
} 

export default TodoFeature;