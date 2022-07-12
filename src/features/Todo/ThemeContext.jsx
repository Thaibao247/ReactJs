import { useState, useReducer, createContext } from "react";

const ThemeContext = createContext();
// const initStateTodo = [
//   {
//     id: 0,
//     name: "hello",
//     status: "new",
//   },
// ];
function ThemeProvider({ children }) {
  const [Todo, setTodo] = useState([]);
  const [filterTodo, setFilterTodo] = useState("all");
  //-----Filter-Todo-----

  //----useReducer-----

  //1.Giá trị khởi tạo
  const initState = 0;
  //2.Tạo các action
  const UP_TODO = "up";
  const DOWN_TODO = "down";
  //3.Tạo hàm reducer
  const reducer = (state, action) => {
    switch (action) {
      case UP_TODO:
        return state + 1;
      case DOWN_TODO:
        return state - 1;
      default:
        return;
    }
  };
  const [countTodo, dispatch1] = useReducer(reducer, initState);

  //Click để đổi trạng thái của 1 item Todo
  const HandleTodoClick = (index) => {
    const newTodo = [...Todo];
    newTodo[index] = {
      ...newTodo[index],
      status: newTodo[index].status === "new" ? "completed" : "new",
    };
    setTodo(newTodo);
  };

  //Xóa 1 item
  const deleteTask = (index) => {
    dispatch1(DOWN_TODO);
    const newTodo = [...Todo];
    const newList = newTodo.filter((item) => item !== newTodo[index]);
    setTodo(newList);
  };

  //Thêm 1 item Todo
  const HandleAddTodo = (values) => {
    dispatch1(UP_TODO);
    const item = {
      id: Todo.length + 1,
      title: values,
      status: "new",
    };
    const newTodo = [...Todo, item];
    setTodo(newTodo);
  };

  const handleFilter = (value) => {
    switch (value) {
      case 1: {
        setFilterTodo("completed");
        break;
      }
      case 2: {
        setFilterTodo("new");
        break;
      }
      case 3: {
        setFilterTodo("all");
        break;
      }
      default:
        return;
    }
  };
  const todoFilter = Todo.filter(
    (data) => filterTodo === "all" || filterTodo === data.status
  );
  //Các giá trị trả ra cho các component sử dụng
  const value = {
    Todo,
    countTodo,
    HandleTodoClick,
    deleteTask,
    HandleAddTodo,
    handleFilter,
    todoFilter,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
