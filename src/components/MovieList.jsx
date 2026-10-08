import MovieCard from "./Moviecard"

function MovieList({
  movies,
  favoritos,
  agregarFavorito,
  verDetalle,
  calificaciones,
  calificar
}) {
  return (
    <div className="lista">

      {movies.map((movie) => (

        <MovieCard
          key={movie.id}
          movie={movie}
          favorito={favoritos.includes(movie.id)}
          agregarFavorito={agregarFavorito}
          verDetalle={verDetalle}
          calificacion={calificaciones[movie.id] || 0}
          calificar={calificar}
        />

      ))}

    </div>
  )
}

export default MovieList