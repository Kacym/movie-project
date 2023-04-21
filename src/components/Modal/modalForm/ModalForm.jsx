import React, { useState } from 'react'
import Input from '../../UI/Input/Input'
import Label from '../../UI/Label/Label';
import "./ModalForm.css"
import Button from '../../UI/Button/Button';
import { movies } from '../../../utils/constants';

const ModalForm = ( {setMovie, closeModalHandler} ) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieRating, setMovieRating] = useState(0);
    const [movieImage, setMovieImage] = useState(null);

    function getMovieTitleValue(e) {
        setMovieTitle(e.target.value);
    }

    function getMovieImageValue(e) {
        setMovieImage(e.target.value)
    }

    function getMovieRatingValue(e) {
        setMovieRating(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(movieImage && movieRating && movieTitle) {

            const newMovie = {
                id: Math.floor(Math.random() * 10000),
                title: movieTitle,
                rating: movieRating,
                img: movieImage,
            }
            setMovie((prevMovie) => {
                return (
                    [...prevMovie, newMovie]
                    )
                })
                movies.push(newMovie)
    
            closeModalHandler()
        }
    }

  return (
    <form className="modalForm">

        <p className='modalCloser' onClick={closeModalHandler}>&times;</p>

        <div className="movieImageInput">

            <Label htmlFor="movie-img" title="movie picture"/>
            <Input id = "movie-img" onChange={getMovieImageValue}/>

        </div>
        <div className="movieNameAndRating">
            
            <Label htmlFor="movie-name" title="movie name" />
            <Input id="movie-name" onChange={getMovieTitleValue} inputType="text"/>

            <Label htmlFor="movie-rating" title="movie-rating" inputType="text"/>
            <Input id="movie-rating" onChange={getMovieRatingValue} inputType="number" max="5"/>

        </div>

        <Button title="add movie" style={{backgroundColor: "orange", width: "400px"}} 
            onClick={handleSubmit}/>
        
    </form>
  )
}

export default ModalForm