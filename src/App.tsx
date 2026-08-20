
import { NeuralNetwork } from './components/neural/NeuralNetwork'
import { Navbar } from './components/navigation/Navbar'
import { Hero } from './sections/Hero/Hero'

function App() {
  return (
    <main>
      <NeuralNetwork />

      <Navbar />

      <Hero />
    </main>
  )
}

export default App