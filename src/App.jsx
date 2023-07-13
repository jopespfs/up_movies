function App() {

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de filme</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">Título</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label htmlFor="" className="form-label">Sinópse</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-1">
            <label htmlFor="" className="form-label">Votos</label>
            <input type="text" className="form-control" />
          </div>

        </form>
        <button className="btn btn-primary col-md-2 mt-3">Adicionar</button>
      </div>


    </>
  )
}

export default App
