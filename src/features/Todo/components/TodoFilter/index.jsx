import React from "react";
import { ThemeContext } from "../../ThemeContext";
import { useContext } from "react";
import "./styles.scss";
function TodoFilter(props) {
  const todoContext = useContext(ThemeContext);
  const filterButton = [
    {
      name: "completed",
      key: 1,
    },
    {
      name: "New",
      key: 2,
    },
    {
      name: "All",
      key: 3,
    },
  ];
  return (
    <div className="todo-filter">
      {filterButton.map((item) => (
        <button
          className="button-three"
          onClick={() => {
            todoContext.handleFilter(item.key);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default TodoFilter;
