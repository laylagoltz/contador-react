import { useState } from "react"
import './App.css'


export default function App() {

    let [numero, setNumero] = useState(0)

    function aumentar() {
     setNumero(numero + 1)
    }
    function zerar() {
      setNumero(numero - numero)
    }
  
    function diminuir() {
     setNumero(numero - 1)
    }
  

  return(
   <section>
    <h1>Contador</h1>
    <p id="result">{numero}</p>
    <button onClick={diminuir}>Menos</button>
    <button onClick={zerar}>Zerar</button>
    <button onClick={aumentar}>Mais</button>
  </section> 
  )
}
