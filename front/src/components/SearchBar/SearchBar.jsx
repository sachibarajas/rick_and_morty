import s from './SearchBar.module.css'
import {useState} from 'react';

export default function SearchBar({onSearch}) {

   const [character,setCharacter] = useState('');

   function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
   
   const handleChange = (e)=>{
      setCharacter(e.target.value);
   }

   return (
      <div className= {s.barContainer}>
         <button
            className={s.searchButton}
            onClick={()=>onSearch(getRandomInt(826))}
            >Random</button>
         <input 
            className={s.input} 
            type='text' 
            value={character}
            onChange={handleChange}/>
         <button 
            className={s.searchButton} 
            onClick={()=>onSearch(character)}>Agregar
         </button>
      </div>
   );
}
