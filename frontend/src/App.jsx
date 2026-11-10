import './assets/styles/style.css'
import { Route, Routes } from 'react-router-dom'
import Publico from './pages/Publico'
import Gestor from './pages/Gestor'
import ErrorRuta from './componentes/ErrorRuta'

function App() {
    return (
        <Routes>
            <Route path="/gestor/*" element={<Gestor />} />
            <Route path="/*" element={<Publico />} />
        </Routes>
    )
}

export default App