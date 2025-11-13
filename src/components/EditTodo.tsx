import React, { useState } from 'react'
import type { TodoType } from '../lib/types';
import { SENSITIVE_WORDS } from '../lib/constants';
import ButtonCSS from '../CSS/ButtonStyle.module.css'
import EditCSS from '../CSS/EditTodo.module.css'

type EditTodoProp = {
    task: TodoType;
    editTodo: (task: string, id: string) => void;
}


function EditTodo({ task, editTodo }: EditTodoProp) {

    const [value, setValue] = useState<string>("");

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(SENSITIVE_WORDS.includes(value)) {
              alert("Please do not use sensitive information");
              return;
            }
        // update state
        
        setValue("");
        editTodo(value ,task.id);

    }


  return (
    <form
        onSubmit={handleSubmit}
        className={EditCSS['form-group']}
    >
      <input type="text"  className=''
        autoFocus placeholder='Update your todo task...'
        value={value} onChange={(e) => {setValue(e.target.value)}}
      />
      <button type='submit' className={ButtonCSS['all-buttons']}>Update Task</button>
    </form>
  )
}

export default EditTodo
