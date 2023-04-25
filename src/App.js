import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import { movies } from './utils/constants';

function App() {
  const [movie, setMovie] = useState(movies)

  function deleteHandler(id) {
    const newData = movie.filter((el) => el.id !== id)
    console.log(newData);
    setMovie(newData)
  }


  return (
    <div className="App">
      <Header setMovie={setMovie}/>
      {
        movie.map(({id, title, rating, img})=> {
          return <MainContent onDelete={deleteHandler} setMovie={setMovie} id={id} title={title} rating={rating} img={img}/>
        })
      }
    </div>
  );
}

export default App;
