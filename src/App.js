import logo from './logo.svg';
import './App.css';
import{TodoList} from './Components/TodoList';
import React, {Fragment,useState,useRef,useEffect} from "react";
import { v4 as uuidv4} from 'uuid'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';


const KEY="todoApp.todos";

export function App() {
  const[todos,setTodos]=useState([])

  const todoTaskRef = useRef();
  const toggleTodo=(id)=>{
    const newTodos=[...todos];
    const todo= newTodos.find((todo)=>todo.id ===id);
    todo.completed= !todo.completed;
    setTodos(newTodos);
  }
  

  useEffect(()=>{
    const storedTodos= JSON.parse(localStorage.getItem(KEY));
    if (storedTodos){
      setTodos(storedTodos);
    }
  },[])

  useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(todos))},[todos]);

  const handleTodoAdd=()=>{
    const task = todoTaskRef.current.value;
    if (task==='') return;

    setTodos((prevTodos)=>{
      return [...prevTodos,{id:uuidv4(),task,completed:false}]// genera un id distinto con uuidv4 para tener id diferentes
    })
    
    todoTaskRef.current.value=null;

  }
  const handleClearAll=()=>{
    const newTodos=todos.filter((todo)=>!todo.completed);
    setTodos(newTodos);
  }

  return (
    <Fragment>
     <Router>
      <Navbar />
      <Switch>
        <Route path='/index' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </p>
        <p>
          <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
          <button onClick={handleTodoAdd}>Set</button>
          <button onClick={handleClearAll}>Delete</button>
          <div>left task {todos.filter((todo)=>!todo.completed).length}</div>
        </p>
      </header>
    </div>

    </Fragment>
  );
}
