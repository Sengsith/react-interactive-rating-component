import React, {useState} from 'react';
import logo from './images/icon-star.svg';
import { Link } from 'react-router-dom';

const Rating = () => {
  const [rating, setRating] = useState();

  const handleOnFocus = (e) => {
    setRating(e.target.value);
  }

  return (
    <div className="rating-container">
      <img src={logo} alt="Small icon of a star"/>
      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className="rating-buttons">
        <button onFocus={handleOnFocus} value="1">1</button>
        <button onFocus={handleOnFocus} value="2">2</button>
        <button onFocus={handleOnFocus} value="3">3</button>
        <button onFocus={handleOnFocus} value="4">4</button>
        <button onFocus={handleOnFocus} value="5">5</button>
      </div>
      <form onSubmit={e => e.preventDefault()}>
      {/* Can utlize useNavigate from react-router-dom instead of passing in state directly into link, but will just do it directly for this project */}
      <Link to="/submit" state={{rating: rating}} style={{textDecoration: 'none', color: 'white'}}>
        <button type="submit">SUBMIT</button>
      </Link>
      </form>
    </div>
  );
}

export default Rating;