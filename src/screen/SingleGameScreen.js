import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import '../style/single_game_screen.scss';
import useFetch from '../useFetch';

const SingleGameScreen = () => {
    const { id } = useParams();
    const { isLoading, isError, games } = useFetch(id);

    // Check if games array is empty or undefined
    if (!games || games.length === 0) {
        return (
            <div className="container mt-5">
                <div className="text-center m-5">
                    <Link to="/" className="btn_home_hero">Torna alla Home</Link>
                </div>
            </div>
        );
    }

    const game = games[0]; // Safe to access the first element now
    const { name, summary, videos, platforms } = game;

    return (
        <div className="container mt-5">
            <div className="text-center m-5">
                <Link to="/" className="btn_home_hero">Torna alla Home</Link>
            </div>
            {isLoading && <h1>Caricamento...</h1>}
            {isError && <p>Si è verificato un errore durante il caricamento dei dati.</p>}
            <div className="row">
                <div className="col-md-6">
                    <div className="card single_card">
                        {game.cover ? (
                            <img
                                src={`https:${game.cover.url.replace('t_thumb', 't_cover_big')}`}
                                className='card-img-top'
                                alt={`${game.name} cover`}
                            />
                        ) : (
                            <div className='text-white'>Immagine non disponibile</div>
                        )}
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{summary}</p>
                            {platforms && (
                                <div>
                                    <h6 className='platform'>Piattaforme:</h6>
                                    <ul className='list_platform'>
                                        {platforms.map((platform) => (
                                            <li key={platform.id}>{platform.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    {videos && videos.length > 0 && (
                        <div>
                            <h6 className='title_video'>Video:</h6>
                            {videos.map((video) => (
                                <div key={video.video_id} className="mb-4">
                                    <h6 className='name_video'>{video.name}</h6>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src={`https://www.youtube.com/embed/${video.video_id}`}
                                        title={video.name}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleGameScreen;
