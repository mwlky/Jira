import React from 'react'

import '../../../styles/tasks.css'
import TaskContainer from './TaskContainer'

const Tasks = () => {
  return (
    <div className='tasks-flex-container'>
        <TaskContainer title='TO DO'/>
        <TaskContainer title='Paused'/>
        <TaskContainer title='In Progress'/>
        <TaskContainer title='Resolved'/>
        <TaskContainer title='In Review'/>
        <TaskContainer title='Archive'/>
        <TaskContainer title='Done'/>
    </div>
  )
}

export default Tasks