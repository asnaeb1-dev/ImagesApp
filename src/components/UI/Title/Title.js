import React from 'react'
import './title.css';

const Title = ({ AppTitle }) => {
  return (
    <div className='app-title'>
        <p>{AppTitle}</p>
    </div>
  )
}

export default Title