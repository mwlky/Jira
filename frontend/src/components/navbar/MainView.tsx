import React from 'react'
import SprintInformation from '../sprint/SprintInformation'

import "../../styles/mainview.css"

const MainView = () => {
  return (
    <div className='main-view-container'>
        <div className='main-view-content'>
            <SprintInformation />
        </div>
    </div>
  )
}

export default MainView