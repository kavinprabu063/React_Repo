import React from 'react'

function Header({name}) {
  return (
    <div className='appBar'>
        <h2>{name}</h2>
    </div>
  )
}

export default Header;