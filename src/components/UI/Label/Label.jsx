import React from 'react'

const Label = (props) => {
    const {htmlFor, title} = props 
  return (
    <label htmlFor={htmlFor}>{title}</label>
  )
}

export default Label