import React from 'react'
import type { TodoType } from '../lib/types'
import HeaderCSS from '../CSS/Header.module.css'

type HeaderProps = {
  todos: TodoType[];
}

function Header({ todos }: HeaderProps) {

  const todosCompleted = todos.filter((todo: TodoType) => todo.completed).length


  return (
    <div className={HeaderCSS['main-div']}>
      <span className={HeaderCSS['logo']}>Get Things Done!</span>
      <span className={HeaderCSS['counter']}>{todosCompleted} / {todos.length} todos completed</span>
    </div>
  )
}

export default Header
