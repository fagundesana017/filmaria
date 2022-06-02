import { Link } from 'react-router-dom';

import './style.css';


export default function Header(){
    return(
        <header>
          <Link className='logo' to='/'>Prime Flix</Link>
          <Link className='favoritos' to='/favoritos'>Minha Lista</Link>
        </header>
    )
}