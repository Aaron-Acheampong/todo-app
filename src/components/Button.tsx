import React from 'react';
import ButtonCSS from '../CSS/ButtonStyle.module.css'


type ButtonProps = {
    buttonType: "primary" | "secondary";
    handleClick: () => void;
    children: React.ReactNode;
}

function Button({buttonType, handleClick, children} : ButtonProps) {
  return (
    <button className={`${ButtonCSS['all-buttons']} ${buttonType === "secondary" ? ButtonCSS['secondary-buttons'] : ""}`}
    onClick={handleClick} >
      {children}
    </button>
  )
}

export default Button;
