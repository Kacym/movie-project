import React from 'react'
import "./Modal.css"
import ModalForm from './modalForm/ModalForm'

const Modal = ( {className, setMovie, openAndCloseModalHandler} ) => {
  return (
    <div className={className}>
    <div className="wrapper" onClick={openAndCloseModalHandler}></div>
        <ModalForm className={className}  closeModalHandler={openAndCloseModalHandler} setMovie={setMovie}/>
    </div>
  )
}

export default Modal