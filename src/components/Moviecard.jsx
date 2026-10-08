function MovieCard({
  movie,
  favorito,
  agregarFavorito,
  verDetalle,
  calificacion,
  calificar
}) {

  return (

    <div className="card">

      <img
        src={movie.image}
        alt={movie.title}
      />

      <h2>
        {movie.title}
      </h2>

      <p>
        Género: {movie.genre}
      </p>

      <p>
        Año: {movie.year}
      </p>

      <p>
        Calificación de la película: {movie.rating}
      </p>


      <button
        onClick={() => verDetalle(movie)}
      >
        Ver detalle
      </button>


      <button
        onClick={() => agregarFavorito(movie.id)}
      >

        {favorito
          ? "Favorito"
          : "Agregar"}

      </button>


      <div>
        <p>Mi calificación:</p>

        <button onClick={() => calificar(movie.id, 1)}>
          1
        </button>

        <button onClick={() => calificar(movie.id, 2)}>
          2
        </button>

        <button onClick={() => calificar(movie.id, 3)}>
          3
        </button>

        <button onClick={() => calificar(movie.id, 4)}>
          4
        </button>

        <button onClick={() => calificar(movie.id, 5)}>
          5
        </button>

        <p>
          Tu calificación: {calificacion || "Sin calificar"}
        </p>
      </div>
    </div>
  )
}

export default MovieCard