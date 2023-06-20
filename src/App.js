import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import CharactersList from './Pages/CharactersList';
import Character from './Pages/Character';
import Search from './Pages/Search';

function App() {
  return (
    <div>
      
        <Routes>
          <Route path='/' element={<CharactersList />} />
          <Route path='/search' element={<Search/>} />
          <Route path='/:id' element={<Character/>} />
        </Routes>
      
    </div>
  );
}

export default App;
