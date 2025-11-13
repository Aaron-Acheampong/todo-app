import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import type { TodoType } from '../lib/types'
import ItemCSS from '../CSS/TodoItem.module.css'


type TodoProps = {
    task: TodoType;
    edit: (id: string) => void;
    deleteitem: (id: string) => void; 
    toggleComplete: (id: string) => void; 
    
}
    

function Todo({ task, edit, deleteitem, toggleComplete }: TodoProps) {
  return (
    <div className={ItemCSS.item}>
      <div className={ItemCSS.content}>
        <p className={task.completed ? ItemCSS.completed : '' } onClick={() => toggleComplete(task.id)}>{task.content}</p>
      </div>
      
      <div className={ItemCSS['item-icons-group']}> 
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => edit(task.id)} className={`${ItemCSS['item-icons']} ${ItemCSS['edit-icon']}`} /> 
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteitem(task.id)} className={`${ItemCSS['item-icons']} ${ItemCSS['delete-icon']}`} />
      </div>
    </div>
  )
}

export default Todo
