import React from 'react'


export const TaskCard2 = ({ task }) => {

    
  return (
    <div >
        <h2>{ task.title }</h2>
        <p>{ task.description }</p>
    </div>
  )
}
