import React from 'react';
import "./Header.css"
import Button from '../UI/Button/Button';


const Header = () => {
  return (
    <div className='header'>
        <h1 className='head__text'>Favorite movies</h1>
        <Button style={{backgroundColor: "orange"}} title="add movie"/>
        </div>
  )
}

export default Header