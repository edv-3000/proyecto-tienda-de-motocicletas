
import './assets/styles/style.css'
import { Route,Routes } from 'react-router-dom'
import Publico from './pages/Publico'
import Gestor from './pages/Gestor'
import FormularioMoto from './pages/Formulario_moto'


function App() {

  return (
    <>
    <Routes>
<Route path="/*" element={<Publico />} />
<Route path="/gestor/*" element={<Gestor />} />
<Route path="/agregarMoto" element={<FormularioMoto />} />
</Routes>
    </>
  )
}

export default App
