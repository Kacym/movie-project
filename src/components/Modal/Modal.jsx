import React from 'react'
import "./Modal.css"
import ModalForm from './modalForm/ModalForm'

const Modal = ( {setMovie, openAndCloseModalHandler} ) => {
  return (
    <div className='Modal'>
    <div className="wrapper" onClick={openAndCloseModalHandler}></div>
        <ModalForm closeModalHandler={openAndCloseModalHandler} setMovie={setMovie}/>
    </div>
  )
}

export default Modal