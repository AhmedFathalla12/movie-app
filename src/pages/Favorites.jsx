import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../component/MovieCard";
const Favorites = () => {
  const { favorites } = useMovieContext();
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favorites Movies Yet</h2>
        <p>Start Adding Movies To Your Favorites And They Will Appear Here! </p>
      </div>
    );
  }
};

export default Favorites;
