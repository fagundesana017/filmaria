import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import './movies.css'


export default function Movies(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     async function loadMovies(){
    await api.get(`/movie/${id}`, {
        params:{
           api_key: "53e7b415c1d6dfa7ea09b0184f982457",
           language:"pt-br",
        }
     })
     //TRATAMENTO DO FILME QUE NÃO EXISTE QUANDO TENTA ACESSAR PELA URL
        .then((response)=> {
         setFilme(response.data);
         setLoading(false);
     })
        .catch(()=>{
            console.log('FILME NÃO ENCONTRADO');
            navigate('/', {replace: true});
            return;
    })
    }
     loadMovies();
     
     return() => {
        console.log("Componente foi desmontado")
    }
    }, [navigate, id])


    function salveFilmes(){
        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

        if (hasFilme) {
            toast.warn('Filme já se encontra na sua lista!')
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success('Filme salvo na lista com sucesso!')
    }


    if (loading) {
        return(
            <div className="filme-info">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopese</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className="area-buttons">
                <button onClick={salveFilmes}>Salvar</button>
                <button>
                    <a target='_blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}