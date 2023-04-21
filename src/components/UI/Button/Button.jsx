import React from 'react'
import "./Button.css"

const Button = ({title, style, onClick}) => {
  return (
    <button style={style} onClick={onClick} >{title}</button>
  )
}

export default Button