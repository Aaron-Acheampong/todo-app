import React from 'react'
import type {TodoType} from '../lib/types'
import Todo from './Todo';
import EditTodo from './EditTodo';
import ListCSS from '../CSS/TodoList.module.css'

type TodoListProps = {
  todos: TodoType[];
  clickEdit: (id: string) => void;
  editTodo: (task: string, id:string) => void;
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

function TodoList({ todos, clickEdit, editTodo, deleteTodo, toggleComplete }: TodoListProps) {
  return (
    <div className={ListCSS['list-main-div']}>
      {todos.map((todo) => (
        todo.edit ? (
          <EditTodo task={todo} editTodo={editTodo} />
        ) : (
          <Todo key={todo.id} task={todo} edit={clickEdit} deleteitem={deleteTodo} toggleComplete={toggleComplete} />
        )
      ))}
    </div>
  )
}

export default TodoList
