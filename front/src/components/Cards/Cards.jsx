import Card from '../Card/Card';
import s from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   return <div className={s.cardsContainer}>
      {characters.map(character =>(
         <Card
            key={character.name}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
         />
      ))}
   </div>;
}
