import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <main className="app">
      <h1>Todo List</h1>
      <ul>
        {todos?.map((todo) => (
          <li className="todo" key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
