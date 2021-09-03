import { useEffect, useState } from "react"

export default function Exercicio02() {
  // 💣 exclua essa declaração de variável e substitua por uma chamada a React.useState()
  function getNameCookie() {
    console.log("Getting cookie!")
    return localStorage.getItem("name")
  }

  let [name, setName] = useState(getNameCookie || "")

  function handleChange(event) {
    setName(event.target.value)
  }

  useEffect(() => {
    localStorage.setItem("name", name)
  }, [name])
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
