import React, { useState } from 'react'
import { SENSITIVE_WORDS } from '../lib/constants';
import ButtonCSS from '../CSS/ButtonStyle.module.css'
import TodoFormCSS from '../CSS/TodoForm.module.css'

type AddTodoItemProp = {
    addTodo: (td: string) => void;
}

const AddTodoItem = React.memo(function ({ addTodo }: AddTodoItemProp) {

    const [todoItem, setTodoItem] = useState<string>("");

    const handleSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault();

            if(SENSITIVE_WORDS.includes(todoItem)) {
              alert("Please do not use sensitive information");
              return;
            }
            // update state
            addTodo(todoItem);

            setTodoItem("");
        }

  return (
    <form
        onSubmit={handleSubmit}
    >
      <h2 className={TodoFormCSS['input-head']}>Add a todo</h2>
      <input type="text" 
        autoFocus placeholder='What is the task today?' className={TodoFormCSS['input-area']}
        value={todoItem} onChange={(e) => {setTodoItem(e.target.value)}}
      />
      <button type='submit' className={ButtonCSS['all-buttons']}>Add Task</button>
    </form>
  )
})

export default AddTodoItem
