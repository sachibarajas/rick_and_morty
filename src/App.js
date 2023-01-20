import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error'

function App () {

  const [characters, setCharacters] = useState([])
  // const [flag, setFlag] = useState(true);
  const onSearch = (character) =>{
    const present = characters.find(c => c.id==character)
    console.log(present);
    // present? setFlag(false): setFlag(true);
    if(!present){
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
    } else {window.alert('Personaje Repetido');}
  }

  const onClose = (id) =>{
    setCharacters(characters.filter(char => char.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch = {onSearch}/>
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
        
        
        
      
    </div>
  )
}

export default App
