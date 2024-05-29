import React from "react";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  const handleOnRemove = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <li>
      {todo.title}
      <button type="button" onClick={handleOnRemove}>
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;