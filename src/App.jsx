import { useState } from "react"
import { InputForm } from "./components/inputForm";
import { Button } from "./components/button";

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

  const atualizaInput = event => {
    console.log(event.target.id);
    setFields({ ...fields, [event.target.id]: event.target.value })
    //desestruturação^
  }

  const enviar = event => {
    event.preventDefault()
    console.log('enviar')
  }

  const limpar = event => {
    event.preventDefault()
    console.log ('limpar')
  }

  return (
    <>
      <div className="container">
        <h2 className="mt-3 mb-3">Cadastro de filme</h2>
        <form className="row g-3">
          <InputForm nome='Gênero' width={2} />
          <InputForm nome='título' width={7} />
          <InputForm nome='Diretor' width={3} />
          <InputForm nome='Sinópse' width={11} />
          <InputForm nome='votos' width={1} />

          <div className="row mt-3">
            <Button 
            tipo={'submit'}
            nome='enviar' 
            width={2} 
            click={enviar}/>
            <Button 
            tipo={'reset'}
            nome='limpar' 
            width={2} 
            click ={limpar}/>
          </div>

        </form>

      </div>


    </>
  )
}

export default App
