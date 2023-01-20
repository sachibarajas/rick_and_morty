import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({name, species, image, onClose, gender, id}) {
   return (
      <div className={s.cardDiv}>
         <button className={s.closeButton} onClick={onClose}>X</button>
         <h2 className={s.id}>#{id}.</h2> 
         <Link className={s.nameLink} to={`/detail/${id}`}><h2 className={s.name}>{name}</h2></Link>
         <img className={s.cardImg} src={image} alt={name} />
         <div className={s.infoDiv}>
            <h2 className={s.info}>{species}</h2>
            <h2 className={s.info}>{gender}</h2>
         </div>
         
         
      </div>
   );
}
