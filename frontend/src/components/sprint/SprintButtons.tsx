import React from 'react'

import '../../styles/global.css'
import '../../styles/sprintButton.css'

const SprintButtons = () => {
  return (
    <div className='sprint-buttons-container'>
        <button className='sprint-button'>
            Epic
            <img src="/images/indicator.svg" alt="" />
        </button>

        <button className='sprint-button'>
            Label
            <img src="/images/indicator.svg" alt="" />
        </button>

        <button className='sprint-button'>
            Type
            <img src="/images/indicator.svg" alt="" />
        </button>
    </div>
  )
}

export default SprintButtons