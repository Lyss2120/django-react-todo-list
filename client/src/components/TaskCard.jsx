import React from 'react'

export const TaskCard = ({ task }) => {
    return (
        <div>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <hr />
        </div>
    )
}
