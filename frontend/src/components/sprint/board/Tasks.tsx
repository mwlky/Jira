import React from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'

import '../../../styles/tasks.css'
import TaskContainer from './TaskContainer'

const Tasks = () => {
  const handleDragEnd = (result: DropResult) => {
    console.log(result);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='tasks-flex-container'>
        <TaskContainer title='TO DO' droppableId='todo' />
        <TaskContainer title='Paused' droppableId='paused' />
        <TaskContainer title='In Progress' droppableId='inprogress' />
        <TaskContainer title='Resolved' droppableId='resolved' />
        <TaskContainer title='In Review' droppableId='review' />
        <TaskContainer title='Archive' droppableId='archive' />
        <TaskContainer title='Done' droppableId='done' />
      </div>
    </DragDropContext>
  )
}

export default Tasks