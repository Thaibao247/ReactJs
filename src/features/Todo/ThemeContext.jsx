import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [Todo, setTodo] = useState([]);
    const HandleTodoClick = (todo, index) => {
       const newTodo = [...Todo]
       newTodo[index] = {
           ...newTodo[index],
           status: newTodo[index].status === 'new' ? 'completed' : 'new'
       }
       setTodo(newTodo)
    }

    const deleteTask = (index) => {
        const newTodo = [...Todo];
        const newList = newTodo.filter(item => item !== newTodo[index]);
        setTodo(newList);
    }

    const HandleAddTodo = (values) => {
        const item = 
            {
                id: Todo.length+1,
                title: values,
                status:'new'
            }
        const newTodo = [...Todo,item];
        setTodo(newTodo);
       
    }
    const value ={
        Todo,
        HandleTodoClick,
        deleteTask,
        HandleAddTodo
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider}