import React from 'react';
import "./Header.css"
import Button from '../UI/Button/Button';
import { useState } from 'react';
import Modal from '../Modal/Modal';


const Header = ( {setMovie} ) => {
  const [showForm, setShowForm] = useState(false);

  function openAndCloseModalHandler() {
    setShowForm(!showForm);
  }
  return (
    <div className='header'>
        <h1 className='head__text'>Favorite movies</h1>
        <Button style={{backgroundColor: "orange"}} title="add movie" onClick={openAndCloseModalHandler}/>
        {
          showForm && <Modal className='from-add-the-new-movie' setMovie={setMovie} openAndCloseModalHandler={openAndCloseModalHandler}/>
        }
        </div>
  )
}

export default Header