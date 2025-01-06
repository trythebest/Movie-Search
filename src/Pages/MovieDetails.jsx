import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../Api/apiService';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await getMovieDetails(id);
      setMovie(details);
    };
    fetchDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-800 text-white">
      <div className="flex">
        <img src={movie.Poster} alt={movie.Title} className="w-1/3" />
        <div className="ml-4">
          <h1 className="text-4xl">{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Year: {movie.Year}</p>
          <p>Cast: {movie.Actors}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;