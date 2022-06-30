import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'sleep',
            status: 'new'
        },
        {
            id: 2,
            title: 'eat',
            status: 'completed'
        },
        {
            id: 3,
            title: 'code',
            status: 'completed'
        }
    ];
    const [Todo, setTodo] = useState(initTodoList);
    const [filteredTodo, setfilteredTodo] = useState('all')
    const HandleTodoClick = (todo, index) => {
       const newTodo = [...Todo]
       newTodo[index] = {
           ...newTodo[index],
           status: newTodo[index].status === 'new' ? 'completed' : 'new'
       }
       setTodo(newTodo)
    }
    const handleAllClick = () =>{
        setfilteredTodo('all')
    };
    const handleCompletedClick = () =>{
        setfilteredTodo('completed')
    };
    const handlenewClick = () =>{
        setfilteredTodo('new')
    }
    const renderTodo = Todo.filter(data => filteredTodo === 'all' || filteredTodo === data.status)
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={renderTodo} onTodoClick={HandleTodoClick}/>
            <button onClick={handleAllClick}>all</button>
            <button onClick={handleCompletedClick}>completed</button>
            <button onClick={handlenewClick}>new</button>
        </div>
    );
} 

export default TodoFeature;