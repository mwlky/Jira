import React from 'react'

import '../../styles/users.css'
import SprintUserButton from './SprintUserButton'

const SprintUsers = () => {
  return (
    <div className="users-container">
        <SprintUserButton avatar='/avatar.png'/>
        <SprintUserButton avatar='/avatar.png'/>
        <SprintUserButton avatar='/avatar.png'/>
    </div>
  )
}

export default SprintUsers