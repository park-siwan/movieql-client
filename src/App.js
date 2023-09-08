import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './routes/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/movies/:id' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
