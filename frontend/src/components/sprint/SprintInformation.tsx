import React from 'react'
import SprintPath from './SprintPath'
import SprintDetails from './SprintTitle'

import '../../styles/sprint.css'
import Board from './board/Board'

const SprintInformation = () => {
  return (
    <>
        <SprintPath />
        <SprintDetails />
        <Board />
    </>
  )
}

export default SprintInformation