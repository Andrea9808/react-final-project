import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import useFetch from '../useFetch';
import '../style/home_screen.scss';
import Loading from '../components/Loading';
import animationData from '../animation/gaming.json';
import { useGlobalContext } from '../context';

const HomeScreen = () => {
    const { input, setInput, games, isLoading, isError, handleSearch, count } = useFetch();
    const [currentPage, setCurrentPage] = useState(1);

    // Numero di giochi da visualizzare per pagina
    const itemsPerPage = 4;

    const indexOfLastGame = currentPage * itemsPerPage;
    const indexOfFirstGame = indexOfLastGame - itemsPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    // Cambia pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const { getScrollPosition } = useGlobalContext();
    const {deleteScrollPosition, scrollPosition } = useGlobalContext();
    const navigate = useNavigate();

    const goToGame = (_id) => {
        getScrollPosition(window.pageYOffset);
        navigate(`/game/${_id}`);
    };

    useEffect(() => {
      if(scrollPosition) {
        window.scrollTo(0, scrollPosition);
        deleteScrollPosition();
      }
    })

    return (
        <>
            <Hero>
                <StyledContent>
                    <div className='100-vh d-flex flex-column align-items-center justify-content-center text-white'>
                        <h1 className='mb-2'>GameMaster</h1>
                        <p>Benvenuto/a su GameMaster, il sito web di riferimento per tutti gli appassionati di videogiochi.</p>
                        <p>GameMaster è più di un semplice database: è la tua risorsa completa per esplorare, scoprire e immergerti nel vasto mondo dei videogiochi.</p>
                        <p>Con una vasta collezione di titoli e informazioni dettagliate, <span style={{ color: "green", fontWeight: "bold" }}>GameMaster</span> ti aiuta a trovare i giochi più recenti, a riscoprire i classici intramontabili e a seguire le ultime novità del settore.</p>
                    </div>
                    <Link to='/about' className='btn_home_hero'>Esplora</Link>
                    <div className='m-5'>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: animationData,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                            width={350}
                            height={200}
                        />
                    </div>
                </StyledContent>
            </Hero>
            <section>
                <div className='search-bar'>
                    <div className='container'>
                        <form onSubmit={(event) => handleSearch(event, input)}>
                            <label htmlFor='game'>
                                <h4>Cerca il tuo videogioco e cliccaci sopra per saperne di più</h4>
                            </label>
                            <div className='d-flex'>
                                <input
                                    type='text'
                                    id='game'
                                    className='input'
                                    placeholder="Inserisci il nome del gioco"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button type='submit' className='btn_search'>
                                    <FaSearch className='icon' />
                                </button>
                            </div>
                        </form>
                        {isLoading && <Loading />}
                        {isError && <p>Si è verificato un errore durante il caricamento dei dati.</p>}
                        <p className='result'>{count} risultati</p>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mb-5'>
                        {currentGames.map((game) => (
                            <div className='col-12 col-md-6 col-lg-3 mb-4' key={game.id}>
                                <div className='card' onClick={() => goToGame(game.id)}> 
                                    {game.cover ? (
                                        <img
                                            src={`https:${game.cover.url.replace('t_thumb', 't_cover_big')}`}
                                            className='card-img-top'
                                            alt={`${game.name} cover`}
                                        />
                                    ) : (
                                        <div className='text-white'>Immagine non disponibile</div>
                                    )}
                                    <div className='card-body'>
                                        <h5 className='card-title'>{game.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Impaginazione */}
                    <Pagination className='m-5'>
                        {Array.from({ length: Math.ceil(games.length / itemsPerPage) }, (_, index) => (
                            <PageNumber key={index} onClick={() => paginate(index + 1)}>{index + 1}</PageNumber>
                        ))}
                    </Pagination>
                </div>
            </section>
        </>
    );
};

const StyledContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Pagination = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
    gap: 10px;
    justify-items: center;
    margin-top: 20px;
`;

const PageNumber = styled.div`
    cursor: pointer;
    padding: 8px 16px;
    margin: 0 5px;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: 0.3s ease;

    &:hover {
        background-color: black;
        color: white;
    }
`;

export default HomeScreen;
