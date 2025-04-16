import React from 'react'

import BoardSearchBar from './BoardSearchBar'
import SprintUsers from './SprintUsers'

import '../../styles/board.css'

const Board = () => {
  return (
    <>
      <div className='board-info-container'>
        <BoardSearchBar />
        <SprintUsers />
      </div>
    </>
  )
}

export default Board