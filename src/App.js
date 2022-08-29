import './App.scss';
import Rating from './Rating.jsx';
import Submit from './Submit.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Rating />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </main>
  );
}

export default App;
