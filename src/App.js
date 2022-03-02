import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('list')));
  const [done, setDone] = useState(false);

  // form function
  const addTodo =  (todo) => {
    const currentTodos = [...todos];
    currentTodos.push({ done: done, description: todo});
    setTodos(currentTodos);
  }

  // delete item
  const deleteList = (index) => {
    todos.splice(index, 1);
    setTodos(todos)
  }

  // storing in localStorage
  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(todos));
  }, [todos])
  
  // cocher/décocher les tâches
  // const check = (id) => {
  //   const test = todos.filter(item => item.id === id);
  //   if(test) console.log(test)
  // }
  return (
    <>
     <Header/>

      <main>
         <Form addTodo={addTodo}/>
         <List todos ={todos} deleteList={deleteList} />
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
