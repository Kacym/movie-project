import './App.css';
import Header from './components/header/Header';
import MainContent from './components/mainContent/MainContent';
import { movies } from './utils/constants';

function App() {
  return (
    <div className="App">
      <Header/>
      {
        movies.map(({id, title, rating, img})=> {
          return <MainContent id={id} title={title} rating={rating} img={img}/>
        })
      }
    </div>
  );
}

export default App;
