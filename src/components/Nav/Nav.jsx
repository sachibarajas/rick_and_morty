import SearchBar from '../SearchBar/SearchBar';
import s from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
    return <div className={s.navContainer}>
        <SearchBar onSearch={onSearch} />
        <Link className={s.Link} to={'/home'}>Home</Link>
        <Link className={s.Link} to={'/about'}>About</Link>
    </div>
}