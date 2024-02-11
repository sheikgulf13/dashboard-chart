import React from 'react'

const Button = ({ handleClick }) => {
  return (
    //Change parent state from child
    <button type='submit' onClick={handleClick}>Add Row</button>
  )
}

export default Button