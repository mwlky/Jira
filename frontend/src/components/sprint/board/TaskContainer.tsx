import React from 'react'

interface TaskContainerProps {
    title:string
}

const TaskContainer: React.FC<TaskContainerProps> = ({title}) => {
  return (
    <div className="tasks-container">
        <h1 className='tasks-container-title'>{title}</h1>
    </div>
  )
}

export default TaskContainer