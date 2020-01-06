import React from 'react'
const showEvent = e => {
  return console.log('Olá Mundo', e)
}
const Button = <button onClick={showEvent}>Teste</button>
const App = () => {
  return (
    <div>
      <p>SpeedSul Innovation</p>
      <p>Seja bem vindo a Innovation</p>
      {Button}
    </div>
  )
}
export default App
