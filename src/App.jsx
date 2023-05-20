
import './App.css'
import { Calculadora } from './components/calculadora'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/Global'

function App() {

  return (
    <>
      <Header/>
      <Calculadora />
      <GlobalStyle />
    </>
  )
}

export default App
