import React from 'react'

import '../../styles/users.css'

interface SprintUserButtonProps {
    avatar:string
}

const SprintUserButton: React.FC<SprintUserButtonProps> = ( {avatar}) => {
  return (
    <button className='avatar-button'>
          <img src={avatar} alt="avatar" className='avatar-icon'/>
    </button>
  )
}

export default SprintUserButton