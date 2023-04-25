import './MainContent.css'
import Button from '../UI/Button/Button'
import { useState } from 'react'

const MainContent = (props) => {

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  
  function openAndCloseUpdateForm() {
    setShowUpdateForm(!showUpdateForm)
  }
  
  const {id, img, title, rating} = props
  return (
    <>
    <div className='mainContent'>
        <ul className='movieList'>
            <li key={id} className="movieListItem">
              <div className="movieImage">
                <img src={img} alt={id} />
              </div>
              <div className="movieInfo">
                <h2 className="movieTitle">{title}</h2>
                <span className='rating'>{rating}/5 stars</span>
                <Button style={{backgroundColor: "red", marginRight: "20px", paddingLeft: "30px", paddingRight: "30px"}} onClick={() => props.onDelete(id)} title="delete"/>  
                <Button style={{backgroundColor: "blue", paddingLeft: "25px", paddingRight: "25px"}} onClick={openAndCloseUpdateForm} title="edit"/>        

              </div>
            </li>
        </ul>
    </div>   
                </>
  )
}

export default MainContent