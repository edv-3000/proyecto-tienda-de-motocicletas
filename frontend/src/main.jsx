import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { MotoProvider } from './context/ContextMoto.jsx'
import { TicketProvider } from './context/contextTicket.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MotoProvider>
        <TicketProvider>
          <App />
        </TicketProvider>
      </MotoProvider>
    </BrowserRouter>
  </StrictMode>,
)
