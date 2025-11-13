import React from 'react'
import AddTodoItem from './AddTodoItem'
import Button from './Button'
import { login, register } from '../lib/utils'
import SidebarCSS from '../CSS/Sidebar.module.css'

type SidebarProp = {
    onAddTodo: (td: string) => void;
}

const Sidebar = React.memo(function ({ onAddTodo } : SidebarProp) {
  return (
    <div className={SidebarCSS['main-div']}>
      <AddTodoItem addTodo={onAddTodo}/>

      <div className={SidebarCSS['lower-btns']}>
        <Button buttonType="secondary" handleClick={() => login()}>
            Log in
        </Button>
        <Button buttonType="secondary" handleClick={() => register()}>
            Register
        </Button>
      </div>
    </div>
  )
})

export default Sidebar
