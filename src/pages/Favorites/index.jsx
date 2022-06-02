import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './favorites.css';

export default function Favorites(){
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=>{
        const minhaLista = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(minhaLista) || [])
    },[])

  
    function deleteFilme(id){
        let filterFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })

        setFilmes(filterFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filterFilmes));
        toast.success('Filme removido da lista com sucesso!')
    }
    
   

    return(
        <div className='minhalista'>
            <h1>Minha Lista</h1>

        {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

           <ul>
               {filmes.map((filme)=>{
                   return(
                       <li key={filme.id}>
                           <span>{filme.title}</span>
                           <div>
                               <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                               <button onClick={()=> deleteFilme(filme.id)}>Excluir</button>
                           </div>
                       </li>
                   )
               })}
           </ul>
        </div>
    )
}