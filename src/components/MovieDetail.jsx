function MovieDetail({ pelicula, cerrar }) {

  if (pelicula == null) {
    return null
  }

  return (

    <div className="detalle">

      <h2>
        {pelicula.title}
      </h2>

      <p>
        Género: {pelicula.genre}
      </p>

      <p>
        Año: {pelicula.year}
      </p>

      <p>
        Calificación: ⭐ {pelicula.rating}
      </p>

      <p>
        {pelicula.description}
      </p>

      <button onClick={cerrar}>
        Cerrar
      </button>

    </div>
  )
}

export default MovieDetail