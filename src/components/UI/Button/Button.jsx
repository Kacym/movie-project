import React from 'react'
import "./Button.css"

const Button = ({title, style}) => {
  return (
    <button style={style}>{title}</button>
  )
}

export default Button