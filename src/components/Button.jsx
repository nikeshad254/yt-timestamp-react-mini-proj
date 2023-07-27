import React from 'react'

const Button = ({handleClick, children}) => {
  return (
    <button onClick={handleClick} className="btn">{children}</button>
  )
}

export default Button
