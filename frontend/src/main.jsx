import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { MotoProvider } from './context/ContextMoto.jsx'
import { TicketProvider } from './context/contextTicket.jsx'
import { AdminProvider } from './context/ContextAdmin.jsx'
import { TokenProvider } from './context/ContextToken.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <TokenProvider>
      <MotoProvider>
        <TicketProvider>
            <AdminProvider>
              <App />
            </AdminProvider>
        </TicketProvider>
      </MotoProvider>
      </TokenProvider>
    </BrowserRouter>
  </StrictMode>,
)
