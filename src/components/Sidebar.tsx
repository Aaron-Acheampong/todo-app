import React from 'react'
import AddTodoItem from './AddTodoItem'
import Button from './Button'

import SidebarCSS from '../CSS/Sidebar.module.css'
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

type SidebarProp = {
    onAddTodo: (td: string) => void;
}

const Sidebar = React.memo(function ({ onAddTodo } : SidebarProp) {

  const { login, register, isAuthenticated, logout, user } = useKindeAuth();


  return (
    <div className={SidebarCSS['main-div']}>
      <AddTodoItem addTodo={onAddTodo} />

      <div className={SidebarCSS['lower-btns']}>
        {!isAuthenticated && (<>
          <Button buttonType="secondary" handleClick={() => login()}>
              Log in
          </Button>

          <Button buttonType="secondary" handleClick={() => register()}>
              Register
          </Button> </>
      )}

      {
        isAuthenticated && (
        <>
        <p className={SidebarCSS['login-txt']}>Welcome {user?.givenName}</p>
        <Button buttonType="secondary" handleClick={() => logout()}>
            Log out
        </Button >
          
        </>
        )
      }
      </div>
    </div>
  )
})

export default Sidebar
