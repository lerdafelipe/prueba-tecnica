import { useCatImage } from './hooks/useCatImage'
import { useFact } from './hooks/useFact'
import { getNewFact } from './logic/fact'

const App = () => {
  const { fact, setFact } = useFact()
  const { catImage } = useCatImage({ fact })

  const handleClick = async () => {
    const newFact = await getNewFact()
    setFact(newFact)
  }

  return (
    <div>
      <h1>App randoms facts and images of cats.</h1>
      <button onClick={handleClick}>Get New Fact</button>
      {fact && <h2><span style={{ color: 'violet' }}>Fact Cat:</span> {fact}</h2>}
      {catImage && <img alt='Random cat image using a random cat fact' src={catImage} />}
    </div>
  )
}

export default App
