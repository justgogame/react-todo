import React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
  {
    id: 1,
    title: "View lecture",
  },
  {
    id: 2,
    title: "Complete assignment",
  },
  {
    id: 3,
    title: "Read a book",
  }
]

function TodoList(){
    return (
        <ul>
            {todoList.map((todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
      </ul>
    );

}

export default TodoList;