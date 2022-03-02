import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else return [];
};

function App() {
  const [todos, setTodos] = useState(getLocalStorage);

  // form function
  const addTodo = (todo) => {
    const currentTodos = [...todos];
    currentTodos.push({ done: false, description: todo });
    setTodos(currentTodos);
  };

  // delete item
  const deleteList = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // check uncheck
  const checkUncheck = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // storing in localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  // number of task done
  const isDone = () => {
    return todos.filter((todo) => todo.done === true).length;
  };

  return (
    <>
      <Header isDone={isDone} totalTask={todos.length} />
      <main>
        <Form addTodo={addTodo} />
        <List todos={todos} deleteList={deleteList} checkUncheck={checkUncheck} />
      </main>
      <Footer />
    </>
  );
}

export default App;
