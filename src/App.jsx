import './App.css'
import Header from './components/Header'
import Capa from './components/Capa'
import Produtos from './components/Produtos'

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Capa/>
      </main>
      <section>
        <Produtos/>
      </section>
    </div>
  )
}

export default App
