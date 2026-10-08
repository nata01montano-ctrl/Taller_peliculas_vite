import { useState } from "react"

import movies from "./data/movies"

import Header from "./components/Header"
import Filters from "./components/Filters"
import MovieList from "./components/MovieList"
import MovieDetail from "./components/MovieDetail"
import Favorites from "./components/Favorites"

import './App.css'

function App() {

  const [buscar, setBuscar] = useState("")
  const [genero, setGenero] = useState("todos")
  const [año, setAño] = useState("todos")
  const [favoritos, setFavoritos] = useState([])
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false)
  const [pelicula, setPelicula] = useState(null) 
  const [calificaciones, setCalificaciones] = useState({})

  function agregarFavorito(id) {

    if (favoritos.includes(id)) {

      setFavoritos(
        favoritos.filter((item) => item !== id)
      )

    } else {

      setFavoritos([
        ...favoritos,
        id
      ])

    }
  }
function calificar(id, numero) {

  setCalificaciones({
    ...calificaciones,
    [id]: numero
  })

}

  let peliculas = movies.filter((movie) =>

    movie.title
      .toLowerCase()
      .includes(buscar.toLowerCase())

  )

  if (genero !== "todos") {

    peliculas = peliculas.filter(
      (movie) => movie.genre === genero
    )

  }
  if (año !== "todos") {
  peliculas = peliculas.filter(
    (movie) => movie.year === Number(año)
  )
}


  if (mostrarFavoritos) {

    peliculas = peliculas.filter(
      (movie) => favoritos.includes(movie.id)
    )

  }


  return (
    <> 
    <div>

      <Header
        buscar={buscar}
        setBuscar={setBuscar}
      />


      <Filters
        genero={genero}
        setGenero={setGenero}
        año={año}
        setAño={setAño}
      />


      <Favorites
        favoritos={favoritos}
        mostrarFavoritos={mostrarFavoritos}
        setMostrarFavoritos={setMostrarFavoritos}
      />


      <h2 className="titulo">
        CARTELERA 
      </h2>


      {peliculas.length === 0 ? (

        <h2 className="mensaje">
          No se encontro ninguna película
        </h2>

      ) : (

        <MovieList
        movies={peliculas}
        favoritos={favoritos}
        agregarFavorito={agregarFavorito}
        verDetalle={setPelicula}
        calificaciones={calificaciones}
        calificar={calificar}
      />

      )}


      <MovieDetail
        pelicula={pelicula}
        cerrar={() => setPelicula(null)}
      />

    </div>
    </>
  )
}

export default App