import { useState } from "react"

export default function Teste() {
  const [msg, setMsg] = useState('')
  function buttonClick(event) {
    setMsg('Este é o segundo componente de teste')
  }


  return (
    <>
      <h2>Segundo component react</h2>
      {msg}
      <button onClick={buttonClick}>Show</button>
    </>
  )
}