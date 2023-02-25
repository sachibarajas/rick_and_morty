import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error/Error'
import Form from './components/Form/Form';



function App () {

  const [characters, setCharacters] = useState([])
  const location = useLocation();
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const username = 'prueba1@gmail.com';
  const password = 'Abc12345';

  const login = (userData)=>{
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access])

  const onSearch = (character) =>{
    const present = characters.find(c => c.id==character)
    console.log(present);
    // present? setFlag(false): setFlag(true);
    if(!present){
      fetch(`http://localhost:3001/rickandmorty/${character}`)
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
      
      {location.pathname !=='/'  && <Nav onSearch = {onSearch}/>}
      
      <Routes>
        <Route exact path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
        
        
        
      
    </div>
  )
}

export default App
