function Filters({
  genero,
  setGenero,
  año,
  setAño
}) {
  return (
    <div className="filtros">

      <label>Género:</label>

      <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      >
        <option value="todos">Todos</option>
        <option value="Acción">Acción</option>
        <option value="Animación">Animación</option>
        <option value="Ciencia ficción">Ciencia ficción</option>
        <option value="Romance">Romance</option>
        <option value="Drama">Drama</option>
        <option value="Fantasía">Fantasía</option>
        <option value="Aventura">Aventura</option>
      </select>

      <label>Año:</label>

      <select
        value={año}
        onChange={(e) => setAño(e.target.value)}
      >
        <option value="todos">Todos</option>
        <option value="1993">1993</option>
        <option value="1995">1995</option>
        <option value="2003">2003</option>
        <option value="2001">2001</option>
        <option value="2024">2024</option>
        <option value="2021">2021</option>
        <option value="2014">2014</option>
        <option value="2017">2017</option>
        <option value="2019">2019</option>
      </select>

    </div>
  )
}

export default Filters