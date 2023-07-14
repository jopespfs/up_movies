import { useState } from "react"

function App() {

  const [fields, setFields] = useState({
    titulo: '',
    sinopse: '',
    votos: '',
  })

  const adicionar = event => {
    //evita que a página seja recarregada
    event.preventDefault()
    console.log('add', fields);
  }

  const atualizaInput = event =>  {
    console.log(event.target.id);
    setFields({...fields, [event.target.id]: event.target.value})
    //desestruturação^
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de filme</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              id='titulo'
              type="text"
              className="form-control"
              value={fields.titulo}
              onChange={atualizaInput}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="sinopse" className="form-label">Sinópse</label>
            <input
              id='sinopse'
              type="text"
              className="form-control"
              value={fields.sinopse}
              onChange={atualizaInput}
            />
          </div>
          <div className="col-md-1">
            <label htmlFor="votos" className="form-label">Votos</label>
            <input
              id='votos'
              type="text"
              className="form-control"
              value={fields.votos}
              onChange={atualizaInput}
            />
          </div>

        </form>
        <button className="btn btn-primary col-md-2 mt-3" onClick={adicionar}>Adicionar</button>
      </div>


    </>
  )
}

export default App
