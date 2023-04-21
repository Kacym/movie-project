import React from 'react'

const Input = (props) => {
    const {inputValue, inputType, style, onChange, id, max} = props
  return (
    <input 
        id={id}
        type={inputType} 
        value={inputValue} 
        style={style} 
        onChange={onChange} 
        max={max}/>
  )
}

export default Input