function Favorites({
  favoritos,
  mostrarFavoritos,
  setMostrarFavoritos
}) {

  return (

    <div className="favoritos">

      <h2>
         Favoritos: {favoritos.length}
      </h2>

      <button
        onClick={() =>
          setMostrarFavoritos(!mostrarFavoritos)
        }
      >

        {mostrarFavoritos
          ? "Ver todas"
          : "Ver favoritos"}

      </button>

    </div>
  )
}

export default Favorites