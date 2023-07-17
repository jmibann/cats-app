import './App.css'

import { useCatFact, useCatImage } from './hooks';

function App() {
  const {fact, refreshFact} = useCatFact();
  const imageUrl = useCatImage({ fact });

  return (
    <main>
      <h1>A cats app</h1>
      <button onClick={refreshFact}>Get new fact</button>
      
      {fact && <span>{fact}</span>}
      {imageUrl && <img alt={fact} src={imageUrl} />}
    </main>
  )
}

export default App
