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
            {todoList.map(function(el) {
                return (
                    <li key = {el.id}>{el.title}</li>
                );
            })}
      </ul>
    );

}

export default TodoList;