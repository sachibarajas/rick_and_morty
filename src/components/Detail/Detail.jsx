import {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import s from './Detail.module.css';


export default function Detail(){

    const {detailId} = useParams();
    const [character,setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(<div className={s.detailDiv}>
        <img className={s.detailImg} src={character.image} alt="" />
        
        <div className={s.infoDiv}>
            <h1 className={s.charName}>{character.id}. {character.name}</h1>
            <span className={s.infoLabel}>STATUS: </span>
            <span className={s.Info}>{character.status}</span>
            <br />
            <span className={s.infoLabel}>SPECIE: </span>
            <span className={s.Info}>{character.species}</span>
            <br />
            <span className={s.infoLabel}>GENDER: </span>
            <span className={s.Info}>{character.gender}</span>
            <br />
            <span className={s.infoLabel}>ORIGIN: </span>
            <span className={s.Info}>{}</span>
            <br />
            <Link to={'/home'}><button className={s.homeButton}>Home</button></Link>
        </div>
        
    </div>)
}