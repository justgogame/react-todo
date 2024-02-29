import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function App() {
  return(
    <div>
      <h1>Todo List</h1>
      
      <ul>
        {todoList.map(function(el) {
          return (
            <li key = {el.id}>{el.title}</li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
