import React, { useEffect, useState } from 'react'

const factAPI = 'https://catfact.ninja/fact'
const imageAPI = 'https://cataas.com/cat/says/'

const App = () => {
  const [fact, setFact] = useState(null)
  const [catImage, setCatImage] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    fetch(factAPI)
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)

        const fisrtThreeWords = data.fact.split(' ', 3).join(' ')

        fetch(`${imageAPI}${fisrtThreeWords}`)
          .then(res => setCatImage(res))
          .catch(err => setErrorMessage('Something went bad', err))
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>App randoms facts and images of cats.</h1>
      <button onClick={() => { alert('Nuevo dato rantom') }}>Get New Fact</button>
      {fact && <h2><span style={{ color: 'violet' }}>Fact Cat:</span> {fact}</h2>}
      {catImage && <img alt='Random cat image using a random cat fact' src={catImage} />}
      {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
    </div>
  )
}

export default App
