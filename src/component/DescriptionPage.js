import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

const MovieDescription = () => {
    const params = useParams();
    const movie = movies.find((movie) => movie.id === params.id);
    

    console.log('Para', params)
    console.log('Para', movie)
    if (!movie) {
        return <div className="not-found">MOVIE NOT FOUND!!!</div>;
    }


    return (
        <div className="movie-details-container">
            <div className="container">
                <h2 className="desc-title">{movie.title}</h2>
                <p className="desc-page">{movie.description}</p>
                <iframe
                    className="iframe"
                    title="Movie Trailer"
                    width="560"
                    height="315"
                    src={movie.trailerLink}
                    allowFullScreen
                ></iframe>
                <Link className="link" to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default MovieDescription;