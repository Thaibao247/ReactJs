import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
function TodoForm(props) {
  const { handleAddTodo } = props;
  const [itemTodo, setItemTodo] = useState("");
  const inputRef = useRef(null);

  const onChangeItem = (e) => {
    setItemTodo(e.target.value);
  };
  const onAddItem = (e) => {
    e.preventDefault();
    if (!handleAddTodo || itemTodo === "") return;
    handleAddTodo(itemTodo);
    setItemTodo("");
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form action="" onSubmit={onAddItem}>
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          ref={inputRef}
          placeholder="Add Todo"
          onChange={onChangeItem}
          value={itemTodo}
        />
        <button className="custom-btn btn-1" type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
