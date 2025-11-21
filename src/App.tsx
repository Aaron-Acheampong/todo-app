import { useState, useEffect, lazy, Suspense, useMemo, useCallback } from 'react'
import AppCSS from './App.module.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Background from './components/Background'
import StatusBar from './components/StatusBar'
import type { TodoType } from './lib/types'
import { v4 as uuidv4 } from 'uuid'
import SuspenseLoader from './components/SuspenseLoader'
import { setItem, getItem } from './lib/utils'
import { MAX_FREE_TODOS } from './lib/constants';

import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

 const TodoListLazy = lazy(() => import('./components/TodoList'));

function App() {
  const [todos, setTodos] = useState<TodoType[]>(() => {
    const item = (getItem("todos") as TodoType[]);
    return item || [];
  })

  const {  user } = useKindeAuth();

 

  const todosCompletedPercentage =  useMemo(() => { 
    return (todos.filter((todo) => todo.completed).length / todos.length) * 100;
   }, [todos]);


  const handleAddTodo = useCallback((todoItem: string) => {
    if (!user && todos.length >= MAX_FREE_TODOS) {
          alert("Register or  sign in to add more todos");
          return; 
      }
    setTodos([...todos, {id: uuidv4(),
        content: todoItem, completed: false, edit: false }]);
  }, [todos])


  const clickEditTodo = useCallback((id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, edit: !todo.edit} : todo))
  }, [todos]);


  const editTodo = useCallback((task: string, id:string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, content: task, edit: !todo.edit} : todo))
  }, [todos])


  const handleDeleteTodo = useCallback((id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos]);


  const toggleComplete = useCallback((id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }, [todos]);


  useEffect(() => {
    setItem('todos', todos);
  }, [todos]);



  return (
    <div className={AppCSS['main-div']}>

      <StatusBar progressPercentage={todosCompletedPercentage}/>

      <Background />

      <main className={AppCSS['main-body']}>
        <Header todos={todos}/>

        <div className={AppCSS['todo-area']}>
          <Suspense fallback={<SuspenseLoader />}>
          <TodoListLazy todos={todos} clickEdit={clickEditTodo} editTodo={editTodo} deleteTodo={handleDeleteTodo} toggleComplete={toggleComplete} />
        </Suspense>
        <Sidebar onAddTodo={handleAddTodo} />
        </div>
        
      </main>

      <Footer />
    </div>
  )
}

export default App
