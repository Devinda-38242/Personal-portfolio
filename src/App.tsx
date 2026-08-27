
import { NeuralNetwork } from './components/neural/NeuralNetwork'
import { Navbar } from './components/navigation/Navbar'
import { Hero } from './sections/Hero/Hero'
import  About  from './sections/About/About';

function App() {
  return (
    <main>
      <NeuralNetwork />

      <Navbar />

      <Hero />

      <About/>
    </main>
  )
}

export default App