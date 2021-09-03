import { useState } from "react"

export default function Exercicio01() {
  // 💣 exclua essa declaração de variável e substitua por uma chamada a React.useState()
  let [name, setName] = useState()

  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}