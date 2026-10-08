function Header({ buscar, setBuscar }) {

  return (
    <header>

      <h1>ENCUENTRA TU PELICULA AQUI</h1>

      <input
        type="text"
        placeholder="Buscar película"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />

    </header>
  )
}

export default Header