import React from 'react'
import Status from '../CSS/StatusBar.module.css'

type StatusProps = {
    progressPercentage: number;
}

function StatusBar({ progressPercentage }: StatusProps) {
  return (
    <div 
        style={{
            width: `${progressPercentage}%`
        }}
        className={Status.status}
    />
  )
}

export default StatusBar
